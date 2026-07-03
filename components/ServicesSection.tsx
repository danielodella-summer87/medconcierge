import Image from "next/image";
import {
  GlobeIcon,
  HomeHeartIcon,
  PackageIcon,
  PlaneIcon,
  ShieldCheckIcon,
  UserHeartIcon,
} from "@/components/icons";
import medicalImage from "@/public/images/servicio-medico.jpg";
import auditImage from "@/public/images/servicio-auditoria.jpg";

const SERVICES = [
  {
    icon: GlobeIcon,
    image: medicalImage,
    title: "Consultora Médica Internacional",
    description:
      "Asesoramiento integral para pacientes que buscan atención médica en distintos países, con coordinación de especialistas y centros de salud.",
  },
  {
    icon: UserHeartIcon,
    title: "Atención Personalizada",
    description:
      "Un plan de acompañamiento a medida de cada paciente, con seguimiento cercano y comunicación directa en todo momento.",
  },
  {
    icon: PlaneIcon,
    title: "MedConcierge Viajeros",
    description:
      "Soporte médico para viajeros: consultas privadas, segunda opinión y chequeos preventivos antes, durante y después del viaje.",
  },
  {
    icon: ShieldCheckIcon,
    image: auditImage,
    title: "Auditoría Médica Internacional",
    description:
      "Revisión y validación de diagnósticos, tratamientos y costos médicos con estándares internacionales de calidad.",
  },
  {
    icon: PackageIcon,
    title: "Distribución de Insumos y Equipos Médicos",
    description:
      "Gestión y provisión de insumos y equipamiento médico para instituciones y profesionales de la salud.",
  },
  {
    icon: HomeHeartIcon,
    title: "MedConcierge Familias",
    description:
      "Servicio de acompañamiento continuo para adultos mayores, con evaluaciones periódicas e informes para la familia.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-brand-mist">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Servicios
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Soluciones integrales de salud pensadas para pacientes, viajeros,
            familias e instituciones.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, image, title, description }) => (
            <div
              key={title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-blue/30"
            >
              {image ? (
                <div className="relative h-36 w-full">
                  <Image
                    src={image}
                    alt=""
                    fill
                    placeholder="blur"
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              ) : (
                <div className="pt-7 pl-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-navy to-brand-blue text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-7 pt-5">
                <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
