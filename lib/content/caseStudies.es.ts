import type { CaseStudiesContent } from "./types";

export const caseStudiesEs: CaseStudiesContent = {
  metaTitle: "Casos de clientes | Resultados de nuestras campañas | Roasly",
  metaDescription:
    "Seis campañas reales gestionadas por Roasly: residencias de mayores, inmobiliaria, derecho, e-commerce de salud, energía y clínica dental. En cada caso: presupuesto, volumen de leads, coste por lead y lo que cambiamos para lograrlo.",
  eyebrow: "Casos de clientes",
  headline: "Campañas reales, con sus cifras reales",
  intro:
    "Presupuesto invertido, leads obtenidos y coste por lead: en cada caso mostramos lo que produjo la campaña, qué problema había y qué ajustamos.",
  disclaimer:
    "Resultados de campañas reales gestionadas por nuestro equipo. Cifras redondeadas, nombres de clientes omitidos o publicados con su acuerdo. Las divisas son las de las cuentas publicitarias correspondientes.",
  overview: [
    { value: "6", label: "sectores de actividad" },
    { value: "8.300+", label: "leads generados en estos seis casos" },
    { value: "25 K€", label: "invertidos en la cuenta más grande, en 90 días" },
  ],
  indexLabel: "Ir al caso",
  challengeLabel: "El punto de partida",
  actionsLabel: "Lo que hicimos",
  resultsLabel: "Las cifras",
  items: [
    {
      id: "residencias-de-mayores",
      sector: "Residencias de mayores",
      client: "Red de residencias para personas mayores",
      market: "España",
      timeframe: "90 días",
      platforms: ["Google Ads"],
      headline:
        "4.076 solicitudes de familias en 90 días, a 6,17 € por lead, con un coste que baja cada semana.",
      metrics: [
        { value: "4.076", label: "leads generados, unos 45 al día" },
        { value: "25.152 €", label: "invertidos en 90 días" },
        { value: "6,17 €", label: "coste medio por lead" },
        { value: "9,25 %", label: "CTR medio, CPC de 0,79 €" },
      ],
      challenge:
        "Una familia que busca plaza para un ser querido decide rápido, cerca de casa y bajo presión. La misma palabra clave cuesta 1,81 € por lead en una ciudad y más de 10 € en otra. Con 18 grupos de anuncios activos en todo el país, el riesgo es que el presupuesto vaya donde menos rinde.",
      actions: [
        "Campañas Search organizadas por tipo de búsqueda (residencias, geriátricas, ancianos) y por zona, con una familia de campañas «volumen» y otra «base».",
        "Auditoría del reparto: el 91 % del gasto iba a campañas con 6,70 € por lead, mientras las campañas base rendían a 3,10 €. Reequilibrio del presupuesto y CPA objetivo en las campañas más caras.",
        "Gestión ciudad por ciudad: se refuerzan las zonas por debajo de 5 € por lead (Tenerife, Alicante, Palma, Oviedo) y se revisan o reducen las que superan 8 €.",
        "Plan de optimización a 3 semanas: 15 titulares nuevos, extensiones que faltaban incluido el formulario de leads móvil (80 % del tráfico) y 9 búsquedas de alta conversión añadidas en concordancia exacta.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coste por lead según la zona",
          caption: "Google Ads, últimos 30 días",
          lowerIsBetter: true,
          points: [
            { label: "Tenerife", value: 1.81, display: "1,81 €", good: true },
            { label: "Alicante", value: 2.98, display: "2,98 €", good: true },
            { label: "Oviedo", value: 4.15, display: "4,15 €", good: true },
            { label: "Palma", value: 4.82, display: "4,82 €", good: true },
            { label: "Madrid", value: 6.83, display: "6,83 €", note: "mayor volumen" },
            { label: "Galapagar", value: 8.19, display: "8,19 €", good: false },
            { label: "Navalcarnero", value: 10.16, display: "10,16 €", good: false },
          ],
        },
        {
          kind: "trend",
          title: "Coste medio por lead, semana a semana",
          caption: "Objetivo: 4,80 €",
          lowerIsBetter: true,
          points: [
            { label: "13–19 abr.", value: 7.04, display: "7,04 €" },
            { label: "20–26 abr.", value: 6.7, display: "6,70 €" },
            { label: "27 abr.–3 may.", value: 6.36, display: "6,36 €" },
            { label: "4–12 may.", value: 6.32, display: "6,32 €" },
          ],
        },
      ],
      takeaway:
        "El coste por lead pasó de 7,04 € a 6,32 € en tres semanas (−10 %), sin aumentar el presupuesto.",
    },
    {
      id: "inmobiliaria",
      sector: "Inmobiliaria, promoción nueva",
      client: "Uplife",
      market: "Israel",
      timeframe: "Unas semanas",
      platforms: ["Meta Ads"],
      headline:
        "Unos 200 compradores cualificados para una promoción nueva, a menos de 9 ₪ por lead.",
      metrics: [
        { value: "≈ 200", label: "leads de compradores cualificados" },
        { value: "1.717 ₪", label: "invertidos en 4 campañas" },
        { value: "8,76 ₪", label: "coste medio por lead" },
        { value: "4,6 %", label: "CTR" },
      ],
      challenge:
        "Vender las viviendas de una promoción nueva sin depender del boca a boca ni inflar el presupuesto. En inmobiliaria, un lead mal cualificado le cuesta media jornada al equipo comercial.",
      actions: [
        "Landing page dedicada a la promoción (planos, precio por m², disponibilidad) conectada a un formulario de cualificación y al CRM.",
        "Campañas de Meta separadas por intención de compra: inversores, primera vivienda, familias que buscan más espacio y retargeting de visitantes.",
        "Cualificación automática (presupuesto, plazo, financiación): solo llegan al equipo las solicitudes listas para visitar, el resto entra en una secuencia de seguimiento.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coste por lead según la campaña",
          caption: "Administrador de anuncios de Meta",
          lowerIsBetter: true,
          points: [
            { label: "Retargeting de visitantes", value: 6.2, display: "6,20 ₪", note: "126 ₪ invertidos", good: true },
            { label: "Inversores", value: 8.1, display: "8,10 ₪", note: "612 ₪ invertidos" },
            { label: "Primera vivienda", value: 9.4, display: "9,40 ₪", note: "548 ₪ invertidos" },
            { label: "Familias, 4 habitaciones", value: 9.8, display: "9,80 ₪", note: "431 ₪ invertidos" },
          ],
        },
      ],
    },
    {
      id: "derecho",
      sector: "Derecho, despacho de abogados",
      client: "",
      market: "",
      timeframe: "Durante la campaña",
      platforms: ["Google Ads"],
      headline:
        "836 solicitudes de consulta cualificadas, a 7,30 € cada una, en palabras clave donde todos los despachos pujan.",
      metrics: [
        { value: "836", label: "solicitudes de consulta" },
        { value: "≈ 6.100 €", label: "invertidos en 4 campañas" },
        { value: "7,30 €", label: "coste medio por solicitud" },
        { value: "hasta 10 %", label: "CTR en Search" },
      ],
      challenge:
        "Captar a particulares que buscan activamente un abogado en temas de mucho calado, sin dejar que se dispare el coste por solicitud en palabras clave muy disputadas.",
      actions: [
        "Campañas Search estructuradas por tipo de caso, con anuncios que retoman la pregunta exacta que escribe la persona.",
        "Palabras clave negativas revisadas cada semana para descartar búsquedas de información gratuita y concentrar el presupuesto en solicitudes de encargo.",
        "Formulario de precualificación (situación, urgencia, elegibilidad) y remarketing ligero sobre los visitantes que no convirtieron.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coste por solicitud según la campaña",
          caption: "Google Ads, por campaña",
          lowerIsBetter: true,
          points: [
            { label: "Búsqueda, pregunta concreta", value: 5.4, display: "5,40 €", note: "261 solicitudes", good: true },
            { label: "Búsqueda, comparación", value: 6.4, display: "6,40 €", note: "151 solicitudes" },
            { label: "Remarketing", value: 7.3, display: "7,30 €", note: "79 solicitudes" },
            { label: "Búsqueda, solicitud directa", value: 9.1, display: "9,10 €", note: "345 solicitudes", good: false },
          ],
        },
      ],
      takeaway:
        "La campaña más cara por clic es también la que aporta más volumen: la mantenemos, pero ya no recibe el presupuesto de las demás.",
    },
    {
      id: "ecommerce-salud",
      sector: "E-commerce de salud, ortesis antironquidos",
      client: "Noctalis",
      market: "Israel",
      timeframe: "30 días",
      platforms: ["Meta Ads"],
      headline:
        "305 leads en 30 días a 20 ₪ cada uno, y un volumen multiplicado por 2,5 tras las primeras iteraciones creativas.",
      metrics: [
        { value: "305", label: "leads en 30 días" },
        { value: "≈ 6.080 ₪", label: "invertidos en 4 formatos" },
        { value: "20 ₪", label: "coste medio por lead" },
        { value: "×2,5", label: "volumen de leads tras la iteración creativa" },
      ],
      challenge:
        "Vender un producto de salud de consumo en un mercado escéptico, con una promesa creíble, y donde el coste del lead decide por sí solo la rentabilidad.",
      actions: [
        "Varios ángulos creativos probados en paralelo: testimonio de una pareja, noche de sueño filmada y comparativa con las soluciones incómodas.",
        "Formulario corto y llamada en menos de 2 horas con un guion de cualificación (frecuencia de los ronquidos, soluciones ya probadas).",
        "Ciclo semanal: se cortan los creativos por encima del coste objetivo y se multiplican las variantes de los ganadores para evitar el desgaste.",
      ],
      charts: [
        {
          kind: "bars",
          title: "Coste por lead según el creativo",
          caption: "Administrador de anuncios de Meta",
          lowerIsBetter: true,
          points: [
            { label: "Testimonio de pareja", value: 17, display: "17 ₪", note: "112 leads", good: true },
            { label: "Noche de sueño, vídeo", value: 20, display: "20 ₪", note: "94 leads" },
            { label: "Comparativa de soluciones", value: 22, display: "22 ₪", note: "61 leads" },
            { label: "Carrusel de producto", value: 25, display: "25 ₪", note: "38 leads", good: false },
          ],
        },
      ],
    },
    {
      id: "energia-reformas",
      sector: "Energía y reformas del hogar",
      client: "",
      market: "",
      timeframe: "Continuo, en varias cuentas",
      platforms: ["Meta Ads", "Google Ads"],
      headline:
        "Más de 2.500 solicitudes de presupuesto, con un coste por lead dividido por cuatro desde el inicio.",
      metrics: [
        { value: "2.500+", label: "solicitudes de presupuesto en el vertical" },
        { value: "÷ 4", label: "coste por lead desde el inicio" },
        { value: "14 €", label: "coste por solicitud en la última semana" },
        { value: "1,5 M+", label: "personas alcanzadas" },
      ],
      challenge:
        "Alimentar a varias marcas con solicitudes de presupuesto en un mercado donde decenas de anunciantes difunden la misma oferta y donde el coste por lead se duplica en cuanto un creativo se desgasta.",
      actions: [
        "Test creativo permanente: ángulos de ahorro, confort y ayudas a la financiación, en formatos cortos, con un presupuesto que cada semana se desplaza hacia lo que funciona.",
        "Doble canal: Meta para crear demanda y Google Search para captar las búsquedas activas («subvención reforma», «presupuesto aerotermia»).",
        "Llamadas y presupuestos firmados llevados al dashboard: se optimiza sobre el coste de la cita cualificada, no sobre el clic.",
      ],
      charts: [
        {
          kind: "compare",
          title: "Última semana frente a la anterior",
          caption: "Google Ads, 2.940 € invertidos en el periodo",
          points: [
            { label: "Clics", value: 6800, display: "6.800", prev: 5760, prevDisplay: "5.760", delta: "+18 %", good: true },
            { label: "Solicitudes de presupuesto", value: 214, display: "214", prev: 163, prevDisplay: "163", delta: "+31 %", good: true },
            { label: "Coste por solicitud", value: 14, display: "14 €", prev: 18, prevDisplay: "18 €", delta: "−22 %", good: true },
            { label: "Tasa de conversión", value: 3.1, display: "3,1 %", prev: 2.5, prevDisplay: "2,5 %", delta: "+0,6 pt", good: true },
          ],
        },
      ],
    },
    {
      id: "clinica-dental",
      sector: "Salud, clínica dental",
      client: "",
      market: "Israel",
      timeframe: "Unos 10 meses",
      platforms: ["Meta Ads"],
      headline:
        "Más de 400 solicitudes de cita en 10 meses, desde 30 ₪ por solicitud en las mejores campañas.",
      metrics: [
        { value: "400+", label: "solicitudes de cita" },
        { value: "desde 30 ₪", label: "coste por solicitud, mejores campañas" },
        { value: "3,4 %", label: "CTR" },
        { value: "10 meses", label: "de campaña continua" },
      ],
      challenge:
        "Llenar la agenda con tratamientos de alto valor (implantes, carillas) cuando el coste por contacto sube rápido y una parte de las solicitudes nunca llega a la clínica.",
      actions: [
        "Rotación creativa continua: vídeos de pacientes, antes y después conformes con las normas de la plataforma, un mensaje por tipo de tratamiento.",
        "Campañas duplicadas por idioma (hebreo y francés) y un formulario que filtra desde el principio las solicitudes fuera de zona o de presupuesto.",
        "Llamada rápida y confirmación la víspera de la cita para reducir las ausencias, con seguimiento en el CRM conectado al dashboard.",
      ],
      charts: [
        {
          kind: "agenda",
          title: "Un día típico tras el lanzamiento",
          caption: "Agenda anonimizada",
          points: [
            { label: "09:00", value: 0, display: "Consulta de implante", note: "Confirmada", good: true },
            { label: "10:30", value: 0, display: "Revisión estética", note: "Confirmada", good: true },
            { label: "11:15", value: 0, display: "Presupuesto de carillas", note: "Nueva" },
            { label: "14:00", value: 0, display: "Consulta de implante", note: "Confirmada", good: true },
            { label: "16:30", value: 0, display: "Seguimiento postoperatorio", note: "Confirmada", good: true },
          ],
        },
      ],
      takeaway: "7 citas ese día, 4 de ellas pacientes nuevos.",
    },
  ],
};
