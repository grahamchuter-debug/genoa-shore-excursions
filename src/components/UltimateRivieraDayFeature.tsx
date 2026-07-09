import Link from "next/link";
import { SignatureExperienceBadge } from "@/components/SignatureExperienceBadge";
import { ultimateItalianRivieraDay, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";

export function UltimateRivieraDayFeature({ embedded = false }: { embedded?: boolean }) {
  const image = subjectImages.highlights;

  const inner = (
    <div className="card-signature grid gap-0 overflow-hidden lg:grid-cols-2">
      <div className="relative min-h-[280px] lg:min-h-full">
        <img
          src={image.src}
          alt="Ultimate Italian Riviera Day — Portofino, Santa Margherita and Camogli"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-coastal-900/70 via-coastal-900/30 to-transparent lg:bg-gradient-to-t lg:from-coastal-900/60 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
          <SignatureExperienceBadge showEditorsChoice />
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="hidden lg:block">
          <SignatureExperienceBadge showEditorsChoice />
        </div>
        <p className="section-eyebrow mt-4 lg:mt-6">Signature Experience</p>
        <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl mt-1">
          🏆 {ultimateItalianRivieraDay.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 italic">
          &ldquo;{ultimateItalianRivieraDay.tagline}&rdquo;
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          Not our only suggestion — but the experience we would honestly recommend to a first-time cruise passenger
          who wants Portofino, Santa Margherita and Camogli with unhurried small-group pacing in a single port day.
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {ultimateItalianRivieraDay.benefits.slice(0, 4).map((b) => (
            <div key={b.title} className="flex items-start gap-2 text-sm text-gray-700">
              <span aria-hidden="true">{b.emoji}</span>
              <span>{b.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">
            Discover Ultimate Italian Riviera Day →
          </Link>
          <Link href="/enquire" className="btn-secondary">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return inner;
  }

  return (
    <section className="section-padding bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-amber-100/60">
      <div className="container-wide">{inner}</div>
    </section>
  );
}
