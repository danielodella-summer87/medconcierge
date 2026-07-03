import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, HomeHeartIcon, UserHeartIcon } from "@/components/icons";
import heroImage from "@/public/images/hero-medconcierge.jpg";

const TRUST_CHIPS = [
  { icon: GlobeIcon, label: "Cobertura internacional" },
  { icon: UserHeartIcon, label: "Atención bilingüe" },
  { icon: HomeHeartIcon, label: "Acompañamiento personalizado" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue"
    >
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-teal/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            MedConcierge · USA &amp; Uruguay
          </span>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Consultora Médica Internacional
          </h1>
          <p className="text-xl font-semibold text-brand-sky sm:text-2xl">
            Servicios de Salud y Bienestar
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
            Acompañamos a pacientes, viajeros y familias con servicios
            médicos de excelencia en Estados Unidos, Uruguay y el mundo.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/viajeros"
              className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-sky"
            >
              Solicitar consulta
            </Link>
            <Link
              href="#servicios"
              className="rounded-md border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Conocer servicios
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_CHIPS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-200">
                <Icon className="h-4 w-4 text-brand-teal" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-xl">
            <Image
              src={heroImage}
              alt="Equipo médico de MedConcierge"
              className="h-[420px] w-full object-cover"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/20 text-brand-teal">
                    <GlobeIcon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Red médica internacional
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-200">
                  USA · Uruguay · LatAm — Español &amp; English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
