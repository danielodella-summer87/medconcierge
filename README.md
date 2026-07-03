# MedConcierge

Reconstrucción del sitio web de MedConcierge (anteriormente en Wix) como
proyecto de código propio, listo para desplegar en Vercel.

> El sitio anterior (Wix) se usó únicamente como referencia visual, de
> estructura y de contenido. Este proyecto no reutiliza ni exporta código,
> HTML/CSS ni assets propietarios de Wix. Las imágenes y logos en
> `public/images/` son assets propios de MedConcierge, descargados
> directamente del sitio original y reutilizados como material propio de
> la marca (ver `referencias-wix/`, no versionado).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Componentes React separados por sección
- Sin CMS, sin base de datos
- Formulario de Contacto y de Familias: solo visuales/controlados, sin
  envío real todavía

## Páginas

- `/` — Home (Hero, Nosotros, Servicios, Familias, Viajeros, Cobertura,
  Contacto)
- `/uruguay` — Programa MedConcierge Familias en Uruguay
- `/familias` — Formulario de solicitud del Plan MedConcierge Familias
- `/viajeros` — Landing de MedConcierge Viajeros

## Estructura

```
app/
  layout.tsx           Layout raíz (Header + Footer + metadata)
  page.tsx              Home, compone todas las secciones
  globals.css           Paleta de marca y estilos base (Tailwind)
  uruguay/page.tsx       Página /uruguay
  familias/page.tsx      Página /familias (landing + formulario)
  viajeros/page.tsx      Página /viajeros
components/
  Header.tsx
  Hero.tsx
  AboutSection.tsx
  ServicesSection.tsx
  FamiliesSection.tsx
  TravelersSection.tsx    (acepta prop `ctaHref` para reutilizarse en /viajeros)
  CountriesSection.tsx
  ContactSection.tsx
  FamiliasForm.tsx        Formulario de /familias (client component)
  Footer.tsx
  icons.tsx               Set de íconos SVG propios (sin librerías externas)
public/
  images/               Logos y fotos reales de MedConcierge
    flags/               Banderas de los países de cobertura
referencias-wix/         Assets originales descargados de Wix (no
                          versionado, ver .gitignore). Fuente de la que se
                          curaron los archivos en public/images/.
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Pendientes conocidos

- Conectar el formulario de Contacto (`components/ContactSection.tsx`) y el
  formulario de Familias (`components/FamiliasForm.tsx`) a un servicio de
  envío de email o API cuando se defina.
- Revisar copy institucional con el equipo de MedConcierge antes de
  publicar en producción.
- Evaluar si corresponde sumar una sección de sponsors/partners (logos
  disponibles en `referencias-wix/assets-originales/descomprimidos/LOGOS
  sponsors/`, aún no integrados).

## Deploy

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com)
sin configuración adicional (framework Next.js detectado automáticamente).
El deploy y la configuración de dominio se realizan en un paso posterior,
fuera del alcance de esta primera versión.
