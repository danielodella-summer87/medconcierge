"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

const CONTACT_INFO = [
  {
    label: "MedConcierge LLC USA",
    phone: "+1 786 346 3592",
    address: "3670 S Douglas Rd., Miami, Florida 33133 USA",
    whatsapp: "https://wa.me/17863463592",
  },
  {
    label: "MedConcierge Uruguay SRL",
    phone: "+598 99 389 189",
    address: "World Trade Center, Montevideo, Uruguay",
    whatsapp: "https://wa.me/59899389189",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // El envío del formulario se integrará más adelante (API / email).
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="scroll-mt-20 bg-brand-mist">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Escribinos y un miembro de nuestro equipo se pondrá en contacto a
            la brevedad.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:col-span-3">
            {isSubmitted ? (
              <div className="flex flex-col items-start gap-3 py-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-brand-navy">
                  ¡Gracias! Tu mensaje fue recibido.
                </h3>
                <p className="text-sm text-slate-600">
                  Nos pondremos en contacto a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-brand-blue hover:text-brand-navy"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-navy"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-navy"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-brand-navy"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-navy"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-brand-navy">
                  {info.label}
                </h3>
                <div className="mt-3 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <PhoneIcon className="h-4 w-4 flex-shrink-0 text-brand-blue" />
                    {info.phone}
                  </p>
                  <p className="flex items-start gap-2 text-sm text-slate-600">
                    <PinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                    {info.address}
                  </p>
                </div>
                <a
                  href={info.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
