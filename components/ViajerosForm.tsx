"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  destino: string;
  fecha: string;
  mensaje: string;
};

const INITIAL_STATE: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  destino: "",
  fecha: "",
  mensaje: "",
};

const inputClass =
  "mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";
const labelClass = "block text-sm font-medium text-brand-navy";

export default function ViajerosForm() {
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
          ¡Gracias! Recibimos tu solicitud.
        </h3>
        <p className="text-sm text-slate-600">
          Nos pondremos en contacto para coordinar tu consulta.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-blue hover:text-brand-navy"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10"
    >
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre completo *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={handleChange}
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono *
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="destino" className={labelClass}>
            País / destino de viaje
          </label>
          <input
            id="destino"
            name="destino"
            type="text"
            value={formData.destino}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="fecha" className={labelClass}>
            Fecha estimada del viaje
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={formData.fecha}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Motivo de la consulta
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
      >
        Solicitar consulta
      </button>
    </form>
  );
}
