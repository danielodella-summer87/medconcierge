import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import travelersImage from "@/public/images/viajeros-medconcierge.jpg";

const FEATURES = [
  "Consultas privadas",
  "Segunda opinión médica",
  "Chequeos preventivos",
  "Acompañamiento personalizado",
  "Soporte bilingüe",
];

const BENEFITS = [
  "Respuesta rápida ante imprevistos",
  "Atención sin barreras de idioma",
  "Red médica internacional de confianza",
];

type TravelersSectionProps = {
  ctaHref?: string;
};

export default function TravelersSection({
  ctaHref = "/viajeros",
}: TravelersSectionProps) {
  return (
    <section id="viajeros" className="scroll-mt-20 bg-brand-mist">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:order-1">
          <div className="relative h-56">
            <Image
              src={travelersImage}
              alt="Viajero en aeropuerto"
              fill
              placeholder="blur"
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
          <div className="p-8">
            <p className="text-lg font-semibold text-brand-navy">
              Atención médica confiable en cualquier destino.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Sabemos que viajar puede implicar imprevistos de salud. Por eso
              ofrecemos atención rápida, privada y en su idioma, para que
              viajar sea siempre una experiencia segura.
            </p>

            <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Acompañamiento personalizado
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            MedConcierge Viajeros
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Atención especializada para viajeros que necesitan acceso rápido
            y confiable a servicios de salud, con acompañamiento bilingüe en
            todo momento.
          </p>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="mt-10 inline-block rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Solicitar consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
