import { GlobeIcon, HomeHeartIcon, UserHeartIcon } from "@/components/icons";

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
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Nosotros
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Sobre MedConcierge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            MedConcierge es una consultora médica internacional dedicada a
            conectar pacientes, viajeros y familias con servicios de salud
            confiables y de excelencia. Con presencia en Estados Unidos y
            Uruguay, trabajamos junto a profesionales de la salud para brindar
            acompañamiento integral, seguro y humano en cada etapa del
            proceso médico.
          </p>
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
