import Image from "next/image";
import pharmcare from "@/public/images/partners/pharmcare.png";
import breastCareCenters from "@/public/images/partners/breast-care-centers.jpg";
import integrativeHealth from "@/public/images/partners/integrative-health.png";
import fertilab from "@/public/images/partners/fertilab.jpg";
import moreTurismo from "@/public/images/partners/more-turismo.jpg";
import universalAssistance from "@/public/images/partners/universal-assistance.jpg";
import digitalMedicalImaging from "@/public/images/partners/digital-medical-imaging.jpg";
import mytreat from "@/public/images/partners/mytreat.jpg";
import clubDeGolfUruguay from "@/public/images/partners/club-de-golf-uruguay.jpg";
import innovativeCancerInstitute from "@/public/images/partners/innovative-cancer-institute.jpg";
import privilegeAssistance from "@/public/images/partners/privilege-assistance.jpeg";
import cdi from "@/public/images/partners/cdi.jpg";

const PARTNERS = [
  { name: "Pharmcare Services", logo: pharmcare },
  { name: "Breast Care Centers", logo: breastCareCenters },
  { name: "Integrative Health", logo: integrativeHealth },
  { name: "Fertilab", logo: fertilab },
  { name: "More Turismo", logo: moreTurismo },
  { name: "Universal Assistance", logo: universalAssistance },
  { name: "Digital Medical Imaging", logo: digitalMedicalImaging },
  { name: "MyTreat", logo: mytreat },
  { name: "Club de Golf del Uruguay", logo: clubDeGolfUruguay },
  { name: "Innovative Cancer Institute", logo: innovativeCancerInstitute },
  { name: "Privilege Assistance", logo: privilegeAssistance },
  { name: "Center for Diagnostic Imaging", logo: cdi },
];

export default function PartnersLogoCarousel() {
  return (
    <section className="border-y border-slate-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          Aliados y colaboradores
        </p>
      </div>

      <div className="partners-viewport relative mt-6 overflow-hidden">
        <div className="partners-track flex w-max items-center gap-12 sm:gap-16">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-12 w-24 flex-shrink-0 items-center justify-center sm:h-16 sm:w-32"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="max-h-full w-auto object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
