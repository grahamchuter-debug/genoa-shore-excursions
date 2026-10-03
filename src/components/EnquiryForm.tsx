"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const ENDPOINT = "https://wowatour-enquiries.dark-violet-8d91.workers.dev/v1/enquiries";
const SITE_ID = "genoa";

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "success"; reference: string } | { kind: "error"; message: string };

interface Props {
  excursions: { slug: string; title: string }[];
  fallbackEmail: string;
}

const inputClass = "w-full rounded-lg border border-gray-300 px-4 py-2 text-sm";

function newKey(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

export function EnquiryForm({ excursions, fallbackEmail }: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [excursion, setExcursion] = useState<{ slug: string; title: string } | null>(null);
  const renderedAt = useRef(0);
  const idempotencyKey = useRef("");

  useEffect(() => {
    renderedAt.current = Date.now();
    idempotencyKey.current = newKey();
    const slug = new URLSearchParams(window.location.search).get("excursion");
    setExcursion(excursions.find((e) => e.slug === slug) ?? null);
  }, [excursions]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    setStatus({ kind: "submitting" });
    setFieldErrors({});
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: SITE_ID,
          idempotencyKey: idempotencyKey.current,
          name: value("name"),
          email: value("email"),
          message: value("message"),
          travelDate: value("travelDate") || null,
          ship: value("ship") || null,
          productRef: excursion?.slug ?? null,
          sourceUrl: window.location.href,
          website: value("website"),
          elapsedMs: Date.now() - renderedAt.current,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; reference?: string; message?: string; errors?: Record<string, string> } | null;
      if (res.ok && data?.ok && data.reference) {
        setStatus({ kind: "success", reference: data.reference });
        idempotencyKey.current = newKey();
        return;
      }
      if (data?.errors) setFieldErrors(data.errors);
      setStatus({ kind: "error", message: data?.message ?? "We couldn't send your enquiry just now. Please try again." });
    } catch {
      setStatus({ kind: "error", message: "We couldn't reach our server. Please check your connection and try again." });
    }
  }

  if (status.kind === "success") {
    return (
      <div role="status" className="rounded-xl border border-coastal-200 bg-coastal-50 p-6">
        <h2 className="font-display text-2xl font-semibold text-gray-900">Thank you — we&apos;ve received your enquiry</h2>
        <p className="mt-3 text-sm text-gray-700">
          Your reference is <strong>{status.reference}</strong>. We&apos;ll reply by email, usually within one working day.
        </p>
      </div>
    );
  }

  const error = (name: string) =>
    fieldErrors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
        {fieldErrors[name]}
      </p>
    ) : null;
  const describedBy = (name: string) => (fieldErrors[name] ? `${name}-error` : undefined);

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {excursion && (
        <p className="rounded-lg bg-coastal-50 px-4 py-3 text-sm text-coastal-900">
          Enquiring about: <strong>{excursion.title}</strong>
        </p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" className={inputClass} aria-describedby={describedBy("name")} />
        {error("name")}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} aria-describedby={describedBy("email")} />
        {error("email")}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">Cruise date (optional)</label>
          <input id="travelDate" name="travelDate" type="date" className={inputClass} aria-describedby={describedBy("travelDate")} />
          {error("travelDate")}
        </div>
        <div>
          <label htmlFor="ship" className="block text-sm font-medium text-gray-700 mb-1">Ship (optional)</label>
          <input id="ship" name="ship" type="text" maxLength={100} className={inputClass} placeholder="e.g. Celebrity Apex" aria-describedby={describedBy("ship")} />
          {error("ship")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          className={inputClass}
          placeholder="Tell us about your Italian Riviera port day and how we can help..."
          aria-describedby={describedBy("message")}
        />
        {error("message")}
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status.kind === "error" && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message} If the problem continues, email us at <a className="underline" href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
        </div>
      )}
      <button type="submit" className="btn-primary" disabled={status.kind === "submitting"}>
        {status.kind === "submitting" ? "Sending…" : status.kind === "error" ? "Try again" : "Send Enquiry"}
      </button>
      <p className="text-xs text-gray-500">
        We use your details only to reply to your enquiry. See our <a className="underline" href="/privacy/">privacy policy</a>.
      </p>
    </form>
  );
}
