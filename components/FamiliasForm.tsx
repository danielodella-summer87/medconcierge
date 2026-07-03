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
  pacienteCalle: string;
  pacienteCiudad: string;
  pacientePais: string;
  pacienteTelefono: string;
  pacienteEmail: string;
  pacienteVinculo: string;
  familiarTelefono: string;
  familiarDireccion: string;
  comentarios: string;
};

const INITIAL_STATE: FormState = {
  contratanteNombre: "",
  contratanteCalle: "",
  contratanteCiudad: "",
  contratantePais: "",
  contratanteTelefono: "",
  contratanteEmail: "",
  pacienteNombre: "",
  pacienteCalle: "",
  pacienteCiudad: "",
  pacientePais: "",
  pacienteTelefono: "",
  pacienteEmail: "",
  pacienteVinculo: "",
  familiarTelefono: "",
  familiarDireccion: "",
  comentarios: "",
};

const inputClass =
  "mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";
const labelClass = "block text-sm font-medium text-brand-navy";

export default function FamiliasForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
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
            <label htmlFor="contratanteNombre" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contratanteCalle" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contratanteCiudad" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contratantePais" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contratanteTelefono" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contratanteEmail" className={labelClass}>
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
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="border-t border-slate-200 pt-8">
        <legend className="text-lg font-semibold text-brand-navy">
          Datos del paciente
        </legend>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="pacienteNombre" className={labelClass}>
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
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacienteCalle" className={labelClass}>
              Calle
            </label>
            <input
              id="pacienteCalle"
              name="pacienteCalle"
              type="text"
              value={formData.pacienteCalle}
              onChange={handleChange}
              autoComplete="address-line1"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacienteCiudad" className={labelClass}>
              Ciudad
            </label>
            <input
              id="pacienteCiudad"
              name="pacienteCiudad"
              type="text"
              value={formData.pacienteCiudad}
              onChange={handleChange}
              autoComplete="address-level2"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacientePais" className={labelClass}>
              País
            </label>
            <input
              id="pacientePais"
              name="pacientePais"
              type="text"
              value={formData.pacientePais}
              onChange={handleChange}
              autoComplete="country-name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacienteTelefono" className={labelClass}>
              Teléfono
            </label>
            <input
              id="pacienteTelefono"
              name="pacienteTelefono"
              type="tel"
              value={formData.pacienteTelefono}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacienteEmail" className={labelClass}>
              Email
            </label>
            <input
              id="pacienteEmail"
              name="pacienteEmail"
              type="email"
              value={formData.pacienteEmail}
              onChange={handleChange}
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pacienteVinculo" className={labelClass}>
              Vínculo respecto al paciente
            </label>
            <input
              id="pacienteVinculo"
              name="pacienteVinculo"
              type="text"
              placeholder="Ej: hijo/a, cónyuge, sobrino/a"
              value={formData.pacienteVinculo}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2 border-t border-slate-100 pt-5">
            <p className="text-sm font-medium text-brand-navy">
              Familiar responsable en el país del paciente
            </p>
          </div>

          <div>
            <label htmlFor="familiarTelefono" className={labelClass}>
              Teléfono del familiar responsable en su país
            </label>
            <input
              id="familiarTelefono"
              name="familiarTelefono"
              type="tel"
              value={formData.familiarTelefono}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="familiarDireccion" className={labelClass}>
              Dirección del familiar responsable en su país
            </label>
            <input
              id="familiarDireccion"
              name="familiarDireccion"
              type="text"
              value={formData.familiarDireccion}
              onChange={handleChange}
              autoComplete="street-address"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="comentarios" className={labelClass}>
              Comentarios adicionales
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows={4}
              value={formData.comentarios}
              onChange={handleChange}
              className={inputClass}
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
