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
    <section id="cobertura" className="scroll-mt-20 bg-brand-navy-dark">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          Red internacional
        </p>

        <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
          {COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-2"
            >
              <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src={country.flag}
                  alt={`Bandera de ${country.name}`}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </span>
              <span className="text-[11px] font-medium text-slate-300 sm:text-sm">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
