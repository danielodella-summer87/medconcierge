import Image from "next/image";
import { CreditCardIcon, PhoneIcon, PinIcon } from "@/components/icons";
import logoWhite from "@/public/images/medconcierge-logo-white.png";

const PAYMENT_URL =
  "https://checkout.square.site/pay/6fe35a8a-2400-4345-83b1-d07c802ad2be";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Image src={logoWhite} alt="MedConcierge" className="h-9 w-auto" />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              MedConcierge LLC USA
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <PhoneIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
              +1 305 308 9191
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm">
              <PinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              2500 Parkview Drive #1219, Hallandale Beach, FL 33009 USA
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              MedConcierge Uruguay SRL
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <PhoneIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
              +598 99 389 189
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm">
              <PinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              World Trade Center, Montevideo, Uruguay
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Enlaces
            </h3>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <CreditCardIcon className="h-4 w-4" />
              Realizar pago
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {year} MedConcierge. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
