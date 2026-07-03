import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FamiliesSection from "@/components/FamiliesSection";
import TravelersSection from "@/components/TravelersSection";
import CountriesSection from "@/components/CountriesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FamiliesSection />
      <TravelersSection />
      <CountriesSection />
      <ContactSection />
    </>
  );
}
