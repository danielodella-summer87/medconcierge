import type { Metadata } from "next";
import TravelersSection from "@/components/TravelersSection";

export const metadata: Metadata = {
  title: "MedConcierge Viajeros | MedConcierge",
  description:
    "Atención médica para viajeros: consultas privadas, segunda opinión médica, chequeos preventivos y acompañamiento bilingüe.",
};

export default function ViajerosPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pt-16 pb-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            MedConcierge Viajeros
          </span>
          <h1 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Atención médica para quienes viajan
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Coordiná una consulta antes de tu viaje, durante tu estadía o al
            regresar. Nuestro equipo te acompaña en tu idioma, donde sea que
            estés.
          </p>
        </div>
      </section>

      <TravelersSection ctaHref="/#contacto" />
    </>
  );
}
