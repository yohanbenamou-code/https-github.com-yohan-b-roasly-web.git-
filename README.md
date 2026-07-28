# Roasly — Web Internacional (FR / ES / HE)

Proyecto Next.js 15 (App Router, TypeScript, Tailwind) con la home trilingüe de Roasly,
construida sobre el documento de posicionamiento y copy ya cerrado.

## Arranque local

Requiere Node.js 18.18+ (recomendado 20 LTS).

```bash
npm install
npm run dev
```

Abre http://localhost:3000 — redirige automáticamente a `/fr`, `/es` o `/he` según el
idioma del navegador (con `/fr` como idioma por defecto si no detecta ninguno de los tres).

## Estructura

```
app/
  [locale]/
    layout.tsx     → fuentes, <html lang/dir>, metadata + hreflang por idioma
    page.tsx        → ensambla todas las secciones de la home
  sitemap.ts        → sitemap.xml con alternates hreflang
  robots.ts         → robots.txt
  globals.css
middleware.ts        → detecta idioma del navegador y redirige "/" → "/fr|/es|/he"
lib/
  i18n.ts            → locales, RTL, dominio del sitio
  content/
    types.ts         → forma del contenido
    fr.ts / es.ts / he.ts → todo el copy, ya traducido (del doc de posicionamiento)
    index.ts         → selector de contenido por idioma + datos de contacto
components/          → Header, Hero, ValueProps, HowItWorks, DashboardShowcase,
                        ComparisonTable, Trust, AntiPositioning, FinalCta, Footer,
                        LiveTicker (panel "en vivo" del hero, único componente cliente)
```

## Decisiones de diseño

- **Tipografía:** Heebo (display + body, soporta latín y hebreo nativamente, así no
  hace falta una fuente distinta por idioma) + JetBrains Mono para kickers, cifras y
  la tabla comparativa — refuerza visualmente el discurso de "datos reales, no PDF".
- **Hebreo / RTL:** `dir="rtl"` se aplica a nivel de `<html>` según el idioma; el layout
  usa flexbox/grid (que se invierten solos en RTL) y utilidades lógicas de Tailwind
  (`ps-`, `pe-`, `start-`, `end-`) en vez de `pl-`/`pr-`/`left-`/`right-`, para que nada
  quede "al revés" en hebreo. Los números (precios, métricas) se fuerzan a LTR con la
  clase `.ltr-nums` aunque el resto de la página esté en RTL — así no se leen invertidos.
- **El panel "en vivo" del hero** es el único elemento con boldness/animación: tickea
  leads por plataforma cada pocos segundos. Respeta `prefers-reduced-motion`.
- **Cómo funciona** es la única sección numerada (01/02/03) porque es la única que es
  realmente una secuencia.

## SEO

- Cada idioma tiene su propio `<title>`/`<meta description>` (los del documento de
  keyword research) y `hreflang` cruzado entre los tres + `x-default`.
- `sitemap.xml` y `robots.txt` se generan dinámicamente vía las metadata APIs de Next.
- Antes de publicar: verificar el dominio en Google Search Console para cada variante
  de idioma y enviar el sitemap.

## Pendiente antes de producción

- Sustituir `https://roasly.com` en `lib/i18n.ts` (`siteUrl`) por el dominio real una
  vez decidido.
- Sección de confianza: cambiar el track record europeo por logos/testimonios reales
  en cuanto haya primeros casos en Israel (ver nota en el doc de copy, sección 2.6).
- Subpáginas de servicio por plataforma (`/google-ads`, `/meta-ads`, etc.) quedaron
  para fase 2, según lo acordado.
- Aviso legal y política de privacidad están como placeholders de texto en el footer,
  sin página propia todavía.
- `npm audit` señala 2 vulnerabilidades moderadas de una copia interna de PostCSS que
  Next.js empaqueta para su propio build (no es una dependencia del proyecto en sí).
  No afecta al sitio en producción; revisar si Next publica un patch más adelante.

## Desplegar en Vercel y conectar el dominio

1. Sube este proyecto a un repositorio de GitHub.
2. En Vercel: **Add New Project** → conecta el repo → Vercel detecta Next.js solo → Deploy.
3. En el proyecto: **Settings → Domains → Add**, escribe tu dominio.
4. Vercel te da los registros DNS:
   - Dominio raíz: registro **A** → `76.76.21.21`
   - `www`: **CNAME** → `cname.vercel-dns.com`
5. Añade esos registros en el panel DNS de tu registrador. Vercel detecta la
   verificación solo y emite el certificado SSL automáticamente.
