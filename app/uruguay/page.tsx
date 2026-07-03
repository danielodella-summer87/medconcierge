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
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              MedConcierge Uruguay
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              MedConcierge Familias
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
              Programa de evaluación y seguimiento independiente para
              adultos mayores.
            </p>
            <Link
              href="/familias"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-sky"
            >
              Solicitar servicio
            </Link>
          </div>

          <div className="relative hidden overflow-hidden rounded-3xl border border-white/15 shadow-xl lg:block">
            <Image
              src={uruguayImage}
              alt="Pareja de adultos mayores acompañada por MedConcierge"
              className="h-[360px] w-full object-cover"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
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
