import HomeCarousel from "@/components/HomeCarousel";
import PartnersLogoCarousel from "@/components/PartnersLogoCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FamiliesSection from "@/components/FamiliesSection";
import TravelersSection from "@/components/TravelersSection";
import CountriesSection from "@/components/CountriesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <PartnersLogoCarousel />
      <AboutSection />
      <ServicesSection />
      <FamiliesSection />
      <TravelersSection />
      <CountriesSection />
      <ContactSection />
    </>
  );
}
