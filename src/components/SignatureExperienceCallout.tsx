import Link from "next/link";
import { SignatureExperienceBadge } from "@/components/SignatureExperienceBadge";
import { ultimateItalianRivieraDay, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";

interface SignatureExperienceCalloutProps {
  context?: "portofino" | "camogli" | "general";
  compact?: boolean;
}

const CONTEXT_COPY = {
  portofino: "Visiting Portofino from Genoa? Our editors' Signature Experience sequences Portofino, Santa Margherita and Camogli in one day — maximum eight guests.",
  camogli: "Exploring Camogli and the Riviera villages? Ultimate Italian Riviera Day covers all three destinations with small-group pacing our editors recommend for first-timers.",
  general: "Our editors' Signature Experience for first-time Riviera visitors — Portofino, Santa Margherita and Camogli in one carefully planned day.",
};

export function SignatureExperienceCallout({ context = "general", compact = false }: SignatureExperienceCalloutProps) {
  const image = subjectImages.highlights;

  if (compact) {
    return (
      <div className="card-signature mt-10">
        <SignatureExperienceBadge showEditorsChoice />
        <h2 className="mt-4 font-display text-xl font-bold text-gray-900">{ultimateItalianRivieraDay.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{CONTEXT_COPY[context]}</p>
        <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent mt-5 inline-flex text-sm">
          Discover Ultimate Italian Riviera Day →
        </Link>
      </div>
    );
  }

  return (
    <div className="card-signature mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        <SignatureExperienceBadge showEditorsChoice />
        <h2 className="mt-4 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          {ultimateItalianRivieraDay.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-600">{CONTEXT_COPY[context]}</p>
        <ul className="mt-5 space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-maple-500" aria-hidden="true">✓</span>
            Maximum 8 guests — three Riviera villages in one day
          </li>
          <li className="flex items-center gap-2">
            <span className="text-maple-500" aria-hidden="true">✓</span>
            Timed for cruise ship hours with return-to-ship confidence
          </li>
          <li className="flex items-center gap-2">
            <span className="text-maple-500" aria-hidden="true">✓</span>
            The experience our editors recommend to first-time passengers
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">
            View Signature Experience →
          </Link>
          <Link href="/enquire" className="btn-secondary text-sm">
            Enquire
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={image.src}
          alt="Portofino and the Italian Riviera — Ultimate Italian Riviera Day Signature Experience"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/40 to-transparent" aria-hidden="true" />
      </div>
    </div>
  );
}
