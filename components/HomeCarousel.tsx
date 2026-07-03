"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import consultoraImage from "@/public/images/servicio-auditoria.jpg";
import viajerosImage from "@/public/images/viajeros-medconcierge.jpg";
import experienciaImage from "@/public/images/servicio-medico.jpg";
import familiasImage from "@/public/images/familias-adultos-mayores.jpg";

const SLIDES = [
  {
    title: "Consultora Médica Internacional.-",
    subtitle: "de Servicios de Salud y Bienestar",
    text: "Somos profesionales de la salud con más de 30 años dedicados al Turismo de Bienestar y Salud en Estados Unidos.",
    ctaLabel: "Ver más",
    ctaHref: "#nosotros",
    image: consultoraImage,
    alt: "Reunión de profesionales de MedConcierge",
  },
  {
    title: "MedConcierge Viajeros",
    subtitle: "Para viajar tranquilos",
    text: "Somos un asistente personal que coordina diferentes actividades médicas, lleva al cliente de la mano, lo aconseja y apoya. Asesoramos y certificamos a viajeros sobre inmunizaciones.",
    ctaLabel: "Ver Plan",
    ctaHref: "/viajeros",
    image: viajerosImage,
    alt: "Viajero en aeropuerto",
  },
  {
    title: "Más de 30 años de experiencia",
    subtitle: "avalan nuestro trabajo",
    text: "Somos profesionales de la Salud y nos dedicamos desde hace muchos años al Turismo de Salud y Bienestar en USA.",
    ctaLabel: "Ver Servicios",
    ctaHref: "#servicios",
    image: experienciaImage,
    alt: "Profesional médica en atención clínica",
  },
  {
    title: "MedConcierge Familias",
    subtitle: "Servicio de supervisión y cuidado de adultos mayores",
    text: "MedConcierge Familias es el Programa de evaluación y seguimiento independiente para adultos mayores. Es un sistema de visitas mensuales en su lugar de residencia a través de una membresía, consultanos por más información.",
    ctaLabel: "Ver Plan",
    ctaHref: "/familias",
    image: familiasImage,
    alt: "Adulto mayor acompañado en su hogar",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export default function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = SLIDES[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <section
      id="home"
      className="scroll-mt-20"
      role="region"
      aria-roledescription="carousel"
      aria-label="Presentación de MedConcierge"
    >
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative h-[560px] w-full overflow-hidden bg-brand-navy sm:h-[600px] lg:h-[640px]"
      >
        <Image
          key={slide.image.src}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={activeIndex === 0}
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent lg:hidden" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 sm:p-8 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[46%] lg:justify-center lg:p-12">
          <div className="relative overflow-hidden rounded-2xl bg-brand-navy/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:h-full lg:rounded-none lg:bg-brand-navy/75 lg:p-12">
            <div
              className="bg-cross-pattern pointer-events-none absolute inset-y-0 right-0 w-16 opacity-60"
              aria-hidden="true"
            />

            <div className="relative">
              <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {slide.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-brand-sky sm:text-xl">
                {slide.subtitle}
              </p>
              <div className="mt-4 h-px w-16 bg-white/25" />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-100/90 sm:text-base">
                {slide.text}
              </p>
              <Link
                href={slide.ctaHref}
                className="mt-6 inline-block rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-teal/90"
              >
                {slide.ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:left-5"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:right-5 lg:right-[calc(46%+1.25rem)]"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 lg:bottom-6 lg:left-[27%]">
          {SLIDES.map((s, index) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir a la diapositiva ${index + 1}: ${s.title}`}
              aria-current={index === activeIndex}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-brand-teal"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
