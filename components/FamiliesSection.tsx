import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import familiesImage from "@/public/images/pareja-familias.avif";

const FEATURES = [
  "Evaluación periódica del estado de salud",
  "Informes mensuales para la familia",
  "Contacto directo con profesionales de salud",
];

const BENEFITS = [
  "Seguimiento continuo, no solo puntual",
  "Comunicación directa con la familia",
  "Reportes claros y fáciles de entender",
];

export default function FamiliesSection() {
  return (
    <section id="familias" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Acompañamiento personalizado
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            MedConcierge Familias
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Un servicio pensado para el cuidado de adultos mayores, que
            permite a las familias mantenerse informadas y tranquilas sobre
            la salud de sus seres queridos, estén donde estén.
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
            href="/familias"
            className="mt-10 inline-block rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Solicitar servicio
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-brand-sky shadow-sm">
          <div className="relative h-56">
            <Image
              src={familiesImage}
              alt="Pareja de adultos mayores acompañada por MedConcierge"
              fill
              placeholder="blur"
              className="object-cover object-top"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
          <div className="p-8">
            <p className="text-lg font-semibold text-brand-navy">
              Tranquilidad para la familia, cuidado para quienes más queremos.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Nuestro equipo realiza seguimiento continuo del bienestar de
              cada adulto mayor, manteniendo a la familia informada.
            </p>

            <ul className="mt-6 space-y-3 border-t border-brand-navy/10 pt-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
