import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FamiliesSection from "@/components/FamiliesSection";
import ServicesSection from "@/components/ServicesSection";
import { ShieldCheckIcon, StarIcon, UserHeartIcon } from "@/components/icons";
import uruguayImage from "@/public/images/uruguay-familias.jpg";

export const metadata: Metadata = {
  title: "MedConcierge Uruguay | Programa Familias",
  description:
    "Programa de evaluación y seguimiento independiente para adultos mayores, con acompañamiento de MedConcierge en Uruguay.",
};

const TRUST_BLOCKS = [
  {
    icon: StarIcon,
    title: "Un servicio innovador",
    description:
      "Un modelo de seguimiento médico independiente, pensado para adultos mayores que viven solos o lejos de su familia.",
  },
  {
    icon: UserHeartIcon,
    title: "Tranquilidad para todos",
    description:
      "La familia recibe información clara y periódica sobre el estado de salud de su ser querido, esté donde esté.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Seguridad",
    description:
      "Evaluaciones realizadas por profesionales de la salud, con protocolos claros y comunicación directa.",
  },
];

export default function UruguayPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="relative h-[480px] w-full sm:h-[520px] lg:h-[560px]">
          <Image
            src={uruguayImage}
            alt="Pareja de adultos mayores acompañada por MedConcierge"
            fill
            placeholder="blur"
            priority
            className="object-cover object-top"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/15 to-transparent lg:hidden" />

          <div className="absolute inset-x-4 bottom-8 overflow-hidden rounded-2xl bg-brand-navy/80 p-6 shadow-xl backdrop-blur-sm sm:inset-x-6 sm:p-8 lg:inset-x-auto lg:bottom-auto lg:right-14 lg:top-1/2 lg:w-[460px] lg:-translate-y-1/2 lg:rounded-2xl lg:p-10 lg:shadow-2xl xl:right-20">
            <div
              className="bg-cross-pattern pointer-events-none absolute inset-y-0 right-0 w-12 opacity-20"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                MedConcierge Uruguay
              </span>
              <h1 className="mt-4 whitespace-pre-line text-2xl font-bold leading-tight text-white sm:text-3xl">
                MedConcierge{"\n"}Familias
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-100/90 sm:text-base">
                Programa de evaluación y seguimiento independiente para
                adultos mayores.
              </p>
              <Link
                href="/familias"
                className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-sky"
              >
                Solicitar servicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TRUST_BLOCKS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-brand-mist p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-navy shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <FamiliesSection />
    </>
  );
}
