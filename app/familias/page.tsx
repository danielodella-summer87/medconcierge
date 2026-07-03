import type { Metadata } from "next";
import Image from "next/image";
import FamiliasForm from "@/components/FamiliasForm";
import familiasImage from "@/public/images/familias-evaluacion.jpg";
import { CreditCardIcon } from "@/components/icons";
import { PAYMENT_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plan MedConcierge Familias | MedConcierge",
  description:
    "Solicitá el plan MedConcierge Familias: acompañamiento y evaluación periódica para adultos mayores.",
};

export default function FamiliasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="relative h-56 w-full sm:h-64">
          <Image
            src={familiasImage}
            alt="Profesional de salud acompañando a un paciente mayor"
            fill
            placeholder="blur"
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              MedConcierge Familias
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Plan MedConcierge Familias
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Por favor completá los datos del contratante y del paciente.
            Luego de recibida la información nos pondremos en contacto para
            coordinar el servicio y proceder al pago.
          </p>

          <div className="mt-10">
            <FamiliasForm />
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm text-slate-600">
              ¿Ya coordinaste el servicio?
            </p>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-navy"
            >
              <CreditCardIcon className="h-4 w-4" />
              Realizar pago
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
