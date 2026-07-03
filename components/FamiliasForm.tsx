"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";

type FormState = {
  contratanteNombre: string;
  contratanteCalle: string;
  contratanteCiudad: string;
  contratantePais: string;
  contratanteTelefono: string;
  contratanteEmail: string;
  pacienteNombre: string;
  pacienteDireccion: string;
};

const INITIAL_STATE: FormState = {
  contratanteNombre: "",
  contratanteCalle: "",
  contratanteCiudad: "",
  contratantePais: "",
  contratanteTelefono: "",
  contratanteEmail: "",
  pacienteNombre: "",
  pacienteDireccion: "",
};

export default function FamiliasForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // El envío del formulario se integrará más adelante (API / email).
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(INITIAL_STATE);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal-light text-brand-teal">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-semibold text-brand-navy">
          ¡Gracias! Recibimos los datos.
        </h3>
        <p className="text-sm text-slate-600">
          Nos pondremos en contacto para coordinar el servicio y proceder al
          pago.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-blue hover:text-brand-navy"
        >
          Completar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10"
    >
      <fieldset>
        <legend className="text-lg font-semibold text-brand-navy">
          Datos del contratante
        </legend>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="contratanteNombre"
              className="block text-sm font-medium text-brand-navy"
            >
              Nombre completo *
            </label>
            <input
              id="contratanteNombre"
              name="contratanteNombre"
              type="text"
              required
              value={formData.contratanteNombre}
              onChange={handleChange}
              autoComplete="name"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="contratanteCalle"
              className="block text-sm font-medium text-brand-navy"
            >
              Calle *
            </label>
            <input
              id="contratanteCalle"
              name="contratanteCalle"
              type="text"
              required
              value={formData.contratanteCalle}
              onChange={handleChange}
              autoComplete="address-line1"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="contratanteCiudad"
              className="block text-sm font-medium text-brand-navy"
            >
              Ciudad *
            </label>
            <input
              id="contratanteCiudad"
              name="contratanteCiudad"
              type="text"
              required
              value={formData.contratanteCiudad}
              onChange={handleChange}
              autoComplete="address-level2"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="contratantePais"
              className="block text-sm font-medium text-brand-navy"
            >
              País *
            </label>
            <input
              id="contratantePais"
              name="contratantePais"
              type="text"
              required
              value={formData.contratantePais}
              onChange={handleChange}
              autoComplete="country-name"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="contratanteTelefono"
              className="block text-sm font-medium text-brand-navy"
            >
              Teléfono *
            </label>
            <input
              id="contratanteTelefono"
              name="contratanteTelefono"
              type="tel"
              required
              value={formData.contratanteTelefono}
              onChange={handleChange}
              autoComplete="tel"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="contratanteEmail"
              className="block text-sm font-medium text-brand-navy"
            >
              Email *
            </label>
            <input
              id="contratanteEmail"
              name="contratanteEmail"
              type="email"
              required
              value={formData.contratanteEmail}
              onChange={handleChange}
              autoComplete="email"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="border-t border-slate-200 pt-8">
        <legend className="text-lg font-semibold text-brand-navy">
          Datos del paciente
        </legend>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="pacienteNombre"
              className="block text-sm font-medium text-brand-navy"
            >
              Nombre completo *
            </label>
            <input
              id="pacienteNombre"
              name="pacienteNombre"
              type="text"
              required
              value={formData.pacienteNombre}
              onChange={handleChange}
              autoComplete="name"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label
              htmlFor="pacienteDireccion"
              className="block text-sm font-medium text-brand-navy"
            >
              Dirección
            </label>
            <input
              id="pacienteDireccion"
              name="pacienteDireccion"
              type="text"
              value={formData.pacienteDireccion}
              onChange={handleChange}
              autoComplete="street-address"
              className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
