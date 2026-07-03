import Image from "next/image";
import { GlobeIcon, HomeHeartIcon, UserHeartIcon } from "@/components/icons";
import adnImage from "@/public/images/nuestro-adn-scott-graham.avif";

const PILLARS = [
  {
    icon: GlobeIcon,
    title: "Enfoque Internacional",
    description:
      "Coordinamos atención médica de calidad entre distintos países, articulando profesionales, instituciones y familias sin importar la distancia.",
  },
  {
    icon: UserHeartIcon,
    title: "Experiencia en Salud y Bienestar",
    description:
      "Un equipo con trayectoria en medicina, gestión sanitaria y bienestar integral, enfocado en resultados y en la tranquilidad del paciente.",
  },
  {
    icon: HomeHeartIcon,
    title: "Acompañamiento Médico Personalizado",
    description:
      "Cada persona recibe seguimiento a medida, con comunicación clara y cercana en cada etapa de su proceso de salud.",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Nuestro ADN
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Nuestro ADN
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand-teal" />
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
              Sobre MedConcierge
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Somos profesionales de la Salud y nos dedicamos desde hace
              muchos años al Turismo de Salud y Bienestar en USA.
              Comercializamos a través de socios estratégicos Seguros de
              Salud y Vida, poniendo al servicio de clientes la más completa
              y selecta gama de Seguros de Salud Internacionales, Seguros de
              Incapacidad Profesional y Viajes. Trabajamos además con
              profesionales de la salud de Argentina, Brasil, Colombia,
              Mexico, Paraguay y Uruguay.
            </p>
          </div>

          <div className="relative h-64 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 lg:h-80">
            <Image
              src={adnImage}
              alt="Equipo de MedConcierge trabajando en conjunto"
              fill
              placeholder="blur"
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200 bg-brand-mist p-6 transition-shadow hover:shadow-md"
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
  );
}
