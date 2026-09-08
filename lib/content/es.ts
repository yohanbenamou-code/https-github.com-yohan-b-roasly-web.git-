import type { SiteContent } from "./types";

export const es: SiteContent = {
  meta: {
    title: "Agencia de marketing digital en Israel | Google Ads y Meta Ads | Roasly",
    description:
      "Agencia de marketing digital en Israel: campañas de marketing digital de Google Ads, Meta Ads, Bing Ads y TikTok Ads reunidas en un sistema de captación completo, con dashboard en tiempo real. Para empresas y autónomos de habla hispana, francesa y hebrea, de Tel Aviv a Jerusalén. Diagnóstico gratuito.",
  },
  nav: {
    links: [
      { label: "Inicio", href: "#home" },
      { label: "Qué hacemos", href: "#services" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Estimador", href: "#estimator" },
      { label: "Equipo", href: "#team" },
      { label: "Por qué Roasly", href: "#why-roasly" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Reserva tu diagnóstico",
  },
  hero: {
    kicker: "Roasly — Agencia de marketing digital en Israel",
    h1: "Agencia de marketing digital en Israel",
    headline: "Más clientes. En Israel y más allá.",
    subheadline:
      "Construimos un sistema de captación completo para tu mercado en Israel, no promesas de marketing. Landing page, campañas, tracking, CRM y un dashboard conectado: ves cada shekel invertido, cada lead generado. Sin sorpresas.",
    cta: "Reservar un diagnóstico gratuito",
  },
  platforms: ["Google Ads", "Meta Ads", "Bing Ads", "TikTok Ads"],
  valuePropsEyebrow: "Qué hacemos",
  valuePropsHeadline: "Campañas de marketing digital en Israel, gestionadas como un sistema completo",
  valueProps: [
    {
      title: "Un sistema completo, con las creatividades incluidas",
      description:
        "Landing, tracking, CRM, campañas y creatividades publicitarias (textos, visuales, vídeos): todo pensado en conjunto en un solo sistema que convierte.",
    },
    {
      title: "Cada euro rastreado, cada resultado visible",
      description:
        "Se acabaron los informes confusos. Sabes exactamente cuánto cuesta un lead, cuánto genera, y dónde reinvertir para escalar.",
    },
    {
      title: "Optimización continua, no estática",
      description:
        "Tus campañas se ajustan cada semana con datos reales: lo que no rinde se corta, lo que funciona se refuerza.",
    },
    {
      title: "Un solo interlocutor, cero fricción",
      description:
        "Trabajas directamente con nuestro equipo desde la primera llamada hasta la optimización mensual, sin account manager junior de por medio.",
    },
  ],
  stats: {
    eyebrow: "Resultados, no promesas",
    headline: "Lo que Roasly ya ha generado para sus clientes",
    items: [
      { value: 35, suffix: "+", label: "Proyectos acompañados" },
      { value: 850, suffix: "K₪+", label: "Presupuesto publicitario gestionado hasta hoy" },
      { value: 3.8, suffix: "x", label: "ROAS medio generado para nuestros clientes" },
    ],
    sectorsLabel: "Sectores con los que trabajamos",
    sectors: [
      "Salud & dental",
      "Inmobiliario",
      "Abogados",
      "Servicios profesionales",
      "Belleza & bienestar",
      "Formación & coaching",
      "Artesanos & servicios locales",
    ],
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    headline: "De la primera conversación al crecimiento, en 4 pasos precisos",
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Auditamos tu negocio, tu competencia y tus canales de captación actuales para identificar dónde estás perdiendo clientes y el potencial real de cada plataforma.",
        details: ["Auditoría de competencia", "Análisis de canales actuales", "Estimación del potencial por plataforma"],
      },
      {
        title: "Construcción del sistema",
        description:
          "Montamos la landing page, el tracking, el CRM y la estructura completa de campañas: cuentas, grupos de anuncios, audiencias y palabras clave.",
        details: ["Landing orientada a conversión", "Tracking y CRM conectados", "Estructura de campañas por plataforma"],
      },
      {
        title: "Creación de las creatividades",
        description:
          "Redactamos los textos publicitarios y producimos los visuales y vídeos adaptados a cada plataforma y cada audiencia, sin plantillas genéricas recicladas.",
        details: ["Textos publicitarios a medida", "Visuales y vídeos por audiencia", "Adaptaciones por plataforma"],
      },
      {
        title: "Lanzamiento y optimización continua",
        description:
          "Seguimos el rendimiento cada semana, testeamos creatividades y audiencias de forma continua, y ajustamos pujas y presupuestos según datos reales.",
        details: ["Seguimiento semanal", "Tests A/B de creatividades", "Ajuste de pujas y presupuestos"],
      },
    ],
  },
  dashboard: {
    eyebrow: "Transparencia total",
    headline: "Tu negocio, en un dashboard claro y siempre actualizado",
    description:
      "Olvídate de los informes en PDF que llegan tarde. Tienes acceso a un dashboard en tiempo real conectado directamente a Google Ads, Meta Ads y tu CRM: leads, coste por lead y resultados, siempre a la vista.",
    metrics: [
      { label: "Leads hoy", value: "24" },
      { label: "Coste por lead", value: "₪38" },
      { label: "Gasto del mes", value: "₪6.420" },
      { label: "Estado", value: "En vivo" },
    ],
  },
  comparison: {
    eyebrow: "La comparación honesta",
    headline: "Todas las agencias prometen lo mismo. Pocas lo cumplen.",
    note: "El resto es solo vocabulario de marketing. Esto es lo que realmente cambia tu día a día.",
    columns: ["Roasly", "Agencia tradicional", "Freelance"],
    rows: [
      {
        label: "Sistema o solo anuncios",
        values: [
          "Landing page, tracking, CRM y campañas conectados",
          "Solo gestiona los anuncios",
          "Centrado en los ads, rara vez en todo el sistema",
        ],
      },
      {
        label: "Propietario de tus datos",
        values: [
          "Lo eres, siempre",
          "A menudo alojados en la agencia",
          "Tú, pero sin estructura de seguimiento",
        ],
      },
      {
        label: "Ritmo de optimización",
        values: [
          "Cada semana, con datos reales",
          "Cada trimestre, si todo va bien",
          "Cuando el tiempo lo permite",
        ],
      },
      {
        label: "Compromiso contractual",
        values: ["Ninguno", "6 a 12 meses", "Ninguno, pero tampoco seguimiento"],
      },
    ],
  },
  seoLinks: {
    eyebrow: "Marketing digital en Israel",
    headline: "Roasly, tu agencia de marketing digital en toda Israel",
    body: "Gestionamos campañas de marketing digital en toda Israel — Tel Aviv, Jerusalén, Netanya, Haifa, Ashdod, Ra'anana — para empresas y autónomos de habla hispana, francesa y hebrea. Google Ads, Meta Ads, Bing Ads y TikTok Ads: un solo sistema, un solo dashboard, estés donde estés en el país.",
  },
  estimator: {
    eyebrow: "Estima tu potencial",
    headline: "Lo que tu presupuesto puede generar de verdad",
    description:
      "Mueve el control sobre tu presupuesto publicitario mensual. Obtienes al instante una horquilla realista de leads, coste por lead y facturación, calculada sobre la media de las cuentas que gestionamos hoy en Israel.",
    budgetLabel: "Presupuesto publicitario mensual",
    perMonth: "/ mes",
    results: {
      leads: "Leads estimados / mes",
      cpl: "Coste por lead",
      revenue: "Facturación potencial / mes",
    },
    roasCaption: "Sobre la base de un ROAS de 3 a 5x, la media observada en nuestras cuentas.",
    disclaimer:
      "Estimación orientativa, no una promesa. Tus resultados reales dependen de tu sector, tu oferta y tu mercado. El diagnóstico gratuito te da cifras precisas para tu negocio.",
    note: "Diagnóstico gratuito · Respuesta en 24h · Sin compromiso",
    cta: "Recibir mi plan con cifras",
  },
  trust: {
    eyebrow: "Nuestros compromisos",
    headline: "Lo que te garantizamos, sin excepciones",
    body:
      "No te pedimos que confíes en nuestra palabra. Esto es exactamente lo que obtienes desde el primer día, pase lo que pase.",
    bullets: [
      "Acceso completo a tus cuentas publicitarias y tus datos: nada se queda con nosotros si te vas",
      "Dashboard en tiempo real desde el diagnóstico, no semanas después",
      "Respuesta en menos de 24h a cada duda, directo con nuestro equipo",
      "Sin permanencia a largo plazo: te quedas porque funciona, no porque un contrato te obligue",
    ],
  },
  reviews: {
    eyebrow: "Lo que dicen nuestros clientes",
    headline: "Lo que dicen nuestros clientes sobre nosotros",
    items: [
      {
        name: "David Cohen",
        role: "Despacho de abogados, Tel Aviv",
        initial: "D",
        text: "Por fin una agencia que explica en qué se invierte mi presupuesto. El dashboard en tiempo real lo cambió todo, veo los leads llegar en vez de esperar un informe mensual.",
        timeAgo: "hace 2 meses",
      },
      {
        name: "Sarah Lévy-Azoulay",
        role: "Clínica dental, Netanya",
        initial: "S",
        text: "Ya habíamos trabajado con dos agencias antes. Aquí tenemos un sistema real: landing, CRM, campañas, todo conectado. El coste por lead bajó a la mitad en dos meses.",
        timeAgo: "hace 1 mes",
      },
      {
        name: "Yossi Ben David",
        role: "Agencia inmobiliaria, Jerusalén",
        initial: "Y",
        text: "Comunicación directa, sin account manager que cambia cada tres meses. Las campañas se ajustan cada semana y se nota en los resultados.",
        timeAgo: "hace 3 semanas",
      },
      {
        name: "Émilie Attia",
        role: "Centro de estética, Ashdod",
        initial: "É",
        text: "Rápidos para arrancar, honestos sobre qué funciona y qué no. Probamos varias creatividades la primera semana y nos quedamos con las que realmente convertían.",
        timeAgo: "hace 2 meses",
      },
      {
        name: "Michael Dahan",
        role: "Coach de negocios, Herzliya",
        initial: "M",
        text: "El no tener permanencia me convenció de probar. Me he quedado porque el ROAS está ahí, no porque un contrato me obligue.",
        timeAgo: "hace 1 mes",
      },
      {
        name: "Laura Malka",
        role: "Asesoría contable, Ra'anana",
        initial: "L",
        text: "Diagnóstico claro desde la primera llamada, sin jerga innecesaria. El sistema de captación funciona solo ahora, con ajustes constantes.",
        timeAgo: "hace 3 meses",
      },
    ],
  },
  team: {
    eyebrow: "Nuestro equipo",
    headline: "Un solo interlocutor, del diagnóstico a la optimización",
    intro:
      "Sin account manager junior, sin subcontratación opaca. Hablas directamente con la persona que construye y pilota tu sistema de captación.",
    members: [
      {
        name: "Yohan Benamou",
        role: "Fundador",
        location: "Israel",
        bio: "Acompaño a empresas y autónomos de habla hispana, francesa y hebrea en Israel que quieren un sistema de captación claro, no promesas. Landing page, campañas de Google Ads y Meta Ads, tracking, CRM y dashboard en tiempo real: construyo todo el sistema contigo y lo optimizo cada semana con datos reales. Cuando llamas, hablas con la persona que gestiona de verdad tus campañas.",
        tags: ["Google Ads", "Meta Ads", "Tracking y CRM", "FR · ES · HE"],
      },
    ],
  },
  antiPositioning: {
    headline: "No somos una agencia más",
    body:
      "La mayoría de agencias compiten por tener la mayor cartera de clientes posible. Nosotros hacemos lo contrario: trabajamos con un número limitado de cuentas a la vez, para darte la atención que mereces. Sin account managers júnior, sin plantillas recicladas de un cliente a otro, sin 20 cuentas corriendo en paralelo. Y si no encajamos, te lo decimos directamente: no te vendemos lo que no necesitas.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    headline: "Todo lo que nos preguntan los negocios hispanohablantes en Israel",
    items: [
      {
        question: "¿Trabajáis con empresas y autónomos hispanohablantes en Israel?",
        answer:
          "Sí, es nuestra especialidad. Acompañamos a emprendedores, autónomos y pymes de habla hispana instalados en Israel que quieren captar clientes localmente, y también a empresas en España o Latinoamérica que quieren llegar a la comunidad hispana de Israel.",
      },
      {
        question: "¿Cuánto cuesta una agencia de publicidad online en Israel?",
        answer:
          "El presupuesto depende de tu sector y tus objetivos. Lo que no cambia: ves exactamente en qué se invierte cada shekel, con acceso a tu dashboard en tiempo real desde el primer día del diagnóstico gratuito.",
      },
      {
        question: "¿Gestionáis Google Ads y Meta Ads para autónomos y pequeños negocios?",
        answer:
          "Sí. Ya seas autónomo, clínica, despacho de servicios o pequeña empresa, construimos un sistema de captación adaptado a tu presupuesto: landing, tracking, CRM y campañas en Google Ads, Meta Ads, Bing Ads o TikTok Ads.",
      },
      {
        question: "¿En qué se diferencia Roasly de una agencia de marketing digital tradicional?",
        answer:
          "Una agencia tradicional suele gestionar solo tus anuncios. Roasly construye todo el sistema alrededor: landing, tracking, CRM y campañas conectados, con acceso directo a nuestro equipo, no a un account manager junior que no conoce tu negocio.",
      },
      {
        question: "¿El diagnóstico inicial es realmente gratuito?",
        answer:
          "Sí, sin compromiso. Analizamos tu negocio, tu mercado y tus canales de captación actuales, y te decimos con honestidad si un sistema publicitario tiene sentido para ti ahora mismo.",
      },
      {
        question: "¿Habláis solo español, o también hebreo y francés?",
        answer:
          "Los tres idiomas. Adaptamos el mensaje publicitario a cada comunidad (hispanohablante, francófona y hebrea) en lugar de traducir literalmente una sola campaña.",
      },
      {
        question: "¿En cuánto tiempo se ven los primeros resultados?",
        answer:
          "Los primeros leads suelen llegar en las dos primeras semanas tras lanzar las campañas. La fase de optimización (la que realmente baja el coste por lead) se juega en las primeras 4 a 8 semanas, el tiempo necesario para recopilar datos reales y ajustar pujas, audiencias y creatividades.",
      },
      {
        question: "¿Qué sectores acompañáis?",
        answer:
          "Principalmente clínicas y profesiones de salud, despachos de abogados y contables, agencias inmobiliarias, centros de estética, coaches y formadores, y autónomos o negocios locales de servicios. El sistema se adapta a tu sector, no al revés.",
      },
      {
        question: "¿Puedo dejarlo en cualquier momento si no funciona?",
        answer:
          "Sí. No hay contrato de 6 o 12 meses que te ate. Si te vas, tus cuentas publicitarias, tus datos y tu tracking siguen siendo tuyos, tal cual.",
      },
      {
        question: "¿Cómo sé en qué se invierte mi presupuesto publicitario cada día?",
        answer:
          "A través de tu dashboard en tiempo real, conectado directamente a tus cuentas de Google Ads, Meta Ads y a tu CRM. Ves el coste por lead, el gasto del día y el ROAS, sin esperar a un informe mensual por email.",
      },
      {
        question: "¿Trabajáis también con negocios que aún no tienen web?",
        answer:
          "Sí. Si todavía no tienes una landing page o una web orientada a conversión, la construimos como parte del sistema, conectada al tracking y a las campañas desde el principio.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Pasemos a la acción",
    headline: "¿Listo para dejar de improvisar tu marketing?",
    body: "Déjanos tus datos. Te respondemos en menos de 24h con un diagnóstico gratuito de tu captación, sin compromiso.",
    button: "Hablemos",
    form: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Tu proyecto",
      messagePlaceholder: "Cuéntanos sobre tu negocio y tus objetivos...",
      submit: "Reservar mi diagnóstico gratuito",
      sending: "Enviando...",
      success: "¡Gracias! Tu mensaje se ha enviado, nuestro equipo te contacta en menos de 24h.",
      error: "Hubo un problema. Escríbenos directamente al email de abajo.",
    },
  },
  footer: {
    tagline:
      "Roasly, agencia de marketing digital con base en Tel Aviv, especializada en Google Ads, Meta Ads, Bing Ads y TikTok Ads para negocios en Israel.",
    legal: ["Aviso legal", "Política de privacidad"],
    copyright: "© 2026 Roasly. Todos los derechos reservados.",
    contactLabel: { email: "Email", whatsapp: "WhatsApp" },
  },
};
