import Image from "next/image";
import argentina from "@/public/images/flags/argentina.png";
import australia from "@/public/images/flags/australia.png";
import brasil from "@/public/images/flags/brasil.png";
import colombia from "@/public/images/flags/colombia.png";
import europa from "@/public/images/flags/europa.png";
import mexico from "@/public/images/flags/mexico.png";
import uruguay from "@/public/images/flags/uruguay.png";
import usa from "@/public/images/flags/usa.png";

const COUNTRIES = [
  { name: "USA", flag: usa },
  { name: "Uruguay", flag: uruguay },
  { name: "Europa", flag: europa },
  { name: "Brasil", flag: brasil },
  { name: "Colombia", flag: colombia },
  { name: "Australia", flag: australia },
  { name: "Argentina", flag: argentina },
  { name: "México", flag: mexico },
];

export default function CountriesSection() {
  return (
    <section id="cobertura" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Red internacional
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Cobertura Internacional
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Con base en Estados Unidos y Uruguay, acompañamos a pacientes y
            familias en los siguientes países.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4">
            {COUNTRIES.map((country) => (
              <div key={country.name} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ring-4 ring-brand-mist transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <Image
                    src={country.flag}
                    alt={`Bandera de ${country.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-brand-navy">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
