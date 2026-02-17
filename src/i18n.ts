import {
  $,
  createContextId,
  useContext,
  type QRL,
  type Signal,
} from "@builder.io/qwik";
import i18next, { type i18n as I18nInstance } from "i18next";

export type Language = "es" | "en";

export const LangContext = createContextId<Signal<Language>>("eldcorp.lang");

/**
 * Diccionario completo de traducciones ES / EN.
 * Se usa como base de recursos para i18next.
 */
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navegación
    "nav.about": "Sobre nosotros",
    "nav.work": "Nuestro trabajo",
    "nav.services": "Servicios",
    "nav.products": "Productos",
    "nav.contact": "Contacto",

    // Hero principal (slide 0)
    "hero.ribbon": "INICIO",
    "hero.title.line1": "Suministros y repuestos",
    "hero.title.line2": "para maquinaria pesada",
    "hero.subtitle":
      "Soluciones rápidas y confiables desde Miami a toda Latinoamérica.",
    "hero.experience":
      "20+ años de experiencia en procura internacional y logística.",
    "hero.cta": "Solicitar cotización",
    "hero.cta.long": "Solicitar cotización",
    "hero.cta.secondary": "Hable con un asesor",
    "hero.steps.start": "Inicio",

    // Hero slide 1
    "hero.slide1.ribbon": "MAESTRÍA MECÁNICA",
    "hero.slide1.title1": "EXPERIENCIA",
    "hero.slide1.title2": "A TU DISPOSICIÓN",

    // Hero slide 2
    "hero.slide2.ribbon": "PROYECTOS INDUSTRIALES",
    "hero.slide2.title1": "NUESTRA INFRAESTRUCTURA",
    "hero.slide2.title2": "TU FORTALEZA",

    // Contadores
    "counters.items.label1": "Ítems",
    "counters.items.label2": "suministrados",
    "counters.weight.label1": "Libras",
    "counters.weight.label2": "despachadas",
    "counters.volume.label1": "Pies cúbicos",
    "counters.volume.label2": "despachados",
    "counters.clients.label1": "Clientes",
    "counters.clients.label2": "registrados",

    // Sobre nosotros / Why us
    "about.ribbon": "SOBRE NOSOTROS",
    "about.text":
      "En ELD Corp somos especialistas en el abastecimiento de repuestos, componentes y equipos para maquinaria pesada e industrias de alto rendimiento. Operamos desde Miami, Florida, con una red global de proveedores y aliados que nos permite entregar soluciones rápidas, seguras y a precios competitivos. Nuestro enfoque es simple: nos encargamos de todo — desde la búsqueda del componente hasta la entrega final en tu país.",

    "why.title": "Por qué elegirnos",
    "why.point1":
      "Más de 20 años de experiencia en sourcing y logística internacional",
    "why.point2": "Atención personalizada y soporte técnico",
    "why.point3": "Amplia red de fabricantes y distribuidores",
    "why.point4": "Procesos eficientes que reducen tiempos y costos",
    "why.point5": "Envíos a toda Latinoamérica",

    "why.card1.title": "Alcance Global",
    "why.card2.title": "Experiencia",
    "why.card3.title": "Asociaciones de Confianza",

    // Nuestro trabajo
    "work.ribbon.mobile": "NUESTRO TRABAJO",
    "work.ribbon.desktop": "TRABAJOS SELECCIONADOS",
    "work.title": "Nuestro Trabajo",
    "work.intro":
      "Nuestro trabajo es facilitarle y permitir que ud se dedique al suyo. Para ello contamos con:",

    "work.step1.title": "Personal especializado",
    "work.step1.text":
      "Personal con un alto nivel de conocimiento y motivación que puede brindarle un servicio diferenciado y que supere las expectativas de nuestros clientes.",

    "work.step2.title": "Experiencia y conocimiento",
    "work.step2.text":
      "Experiencia y conocimiento certificado para la atención y manejo de sus requerimientos de compras de repuestos, de componentes mayores nuevos y/o usados para Maquinarias Pesadas desde la identificación apropiada de los números de partes y piezas requeridas para la elaboración detallada de ofertas en la cual podemos presentarles opciones por disponibilidad, precio y demás detalles o información necesaria de las marcas reconocidas por su excelencia y calidad en el mercado con las que ud pueda decidir su compra. Asesoramiento para la elaboración de stock sugeridos de partes según su Flota, operación y lugar de trabajo.",

    "work.step3.title": "Logística y soluciones integrales",
    "work.step3.text":
      "Con nuestros aliados logísticos, diseñar y proponer la mejor cadena o red logística requerida que considere además del manejo apropiado su costo y tiempo de entrega de la carga. Mantener oportunamente informado a nuestros clientes de su carga o compra evitándose la incomodidad de trabajar y comunicarse con dos o más proveedores, todo ello hasta el cierre completo de cada proceso. Valoración de inventarios de clientes. Ser de los que le ofrecen una solución Integral a su necesidad.",

    // Productos
    "products.ribbon.mobile": "PRODUCTOS",
    "products.ribbon.desktop": "PRODUCTS",
    "products.title": "Productos",
    "products.intro":
      "Estamos preparando nuestro catálogo digital. Mientras tanto, trabajamos con una amplia gama de repuestos y componentes, incluyendo:",
    "products.item1": "Motores y partes de motor",
    "products.item2": "Transmisiones",
    "products.item3": "Componentes hidráulicos",
    "products.item4": "Sistemas eléctricos y electrónicos",
    "products.item5": "Filtros, sellos y consumibles",
    "products.item6": "Tren de rodaje",
    "products.item7": "Equipos y accesorios industriales",
    "products.cta": "Solicita un repuesto específico",
    "products.brands":
      "Marcas que manejamos: Caterpillar · Komatsu · John Deere · Volvo · Cummins · Case · Hitachi · entre otras.",

    // Servicios
    "services.ribbon.mobile": "NUESTROS SERVICIOS",
    "services.ribbon.desktop": "WHAT WE OFFER",
    "services.title": "Nuestros servicios",
    "services.intro":
      "Descubre nuestra gama de servicios diseñados para satisfacer las necesidades de tu negocio.",

    "services.1.title": "Procura de repuestos y componentes",
    "services.1.text":
      "Localizamos y suministramos piezas para maquinaria pesada de las principales marcas del mercado. Si existe, la conseguimos.",

    "services.2.title": "Logística internacional",
    "services.2.text":
      "Coordinamos consolidación, embarque, transporte y entrega final. Tú recibes tu pedido sin complicaciones.",

    "services.3.title": "Abastecimiento para proyectos",
    "services.3.text":
      "Brindamos soporte integral a empresas de construcción, minería, industria y energía con insumos y equipos especializados.",

    "services.4.title": "Partes difíciles de conseguir",
    "services.4.text":
      "Contamos con acceso a proveedores globales para encontrar repuestos escasos o descontinuados.",

    "services.5.title": "Asesoría técnica",
    "services.5.text":
      "Te ayudamos a identificar la pieza correcta, evitar errores de compatibilidad y optimizar tus operaciones.",

    // Contacto
    "contact.ribbon": "CONTACTO",
    "contact.title": "Contáctanos",
    "contact.description":
      "Estamos disponibles para ayudarte con cotizaciones, consultas técnicas y requerimientos urgentes.",
    "contact.question": "¿Busca un repuesto específico? Escríbanos",
    "contact.phone": "+1 XXX XXX XXXX",
    "contact.whatsapp": "Chatear ahora",
    "contact.email.label": "Correo electrónico",
    "contact.email.value": "sales@eldparts.com",
    "contact.visit.label": "Dirección",
    "contact.visit.value": "6613 NW 84th Ave, Miami FL 33166",
    "contact.callToAction": "¡Solicita una llamada!",

    "contact.form.company": "Nombre de la compañía",
    "contact.form.email": "Correo electrónico",
    "contact.form.phone": "Número de teléfono",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar",

    // Acciones rápidas de contacto
    "contact.actions.requestInfo": "Solicitar información",
    "contact.actions.instagram": "Instagram",
    "contact.actions.linkedin": "LinkedIn",
    "contact.actions.facebook": "Facebook",

    // Selector de idioma
    "lang.es": "ES",
    "lang.en": "EN",

    // Footer
    "footer.copyright": "© 2025 ELD Corp. Todos los derechos reservados.",
    "footer.tagline":
      "Soluciones integrales para maquinaria pesada y proyectos industriales.",
  },

  en: {
    // Navigation
    "nav.about": "About us",
    "nav.work": "Our work",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.contact": "Contact",

    // Main hero (slide 0)
    "hero.ribbon": "HERO",
    "hero.title.line1": "Spare parts and supplies",
    "hero.title.line2": "for heavy machinery",
    "hero.subtitle":
      "Fast and reliable solutions from Miami to all of Latin America.",
    "hero.experience":
      "20+ years of experience in international procurement, logistics and industrial supply.",
    "hero.cta": "Request a quote",
    "hero.cta.long": "Request a quote",
    "hero.cta.secondary": "Talk to an advisor",
    "hero.steps.start": "Start",

    // Hero slide 1
    "hero.slide1.ribbon": "MECHANICAL MASTERY",
    "hero.slide1.title1": "Empowering Industries,",
    "hero.slide1.title2": "Forging Alliances",

    // Hero slide 2
    "hero.slide2.ribbon": "INDUSTRIAL PROJECTS",
    "hero.slide2.title1": "Elevating Project Outcomes",
    "hero.slide2.title2": "_",

    // Counters
    "counters.items.label1": "Items",
    "counters.items.label2": "supplied",
    "counters.weight.label1": "Weight",
    "counters.weight.label2": "shipped",
    "counters.volume.label1": "Cubic feet",
    "counters.volume.label2": "shipped",
    "counters.clients.label1": "Clients",
    "counters.clients.label2": "registered",

    // About / Why us
    "about.ribbon": "ABOUT US",
    "about.text":
      "At ELD Corp, we specialize in supplying spare parts, components, and equipment for heavy machinery and high-performance industries. We operate from Miami, Florida, with a global network of suppliers and partners that allows us to deliver fast, secure solutions at competitive prices. Our approach is simple: we handle everything — from finding the component to final delivery in your country.",

    "why.title": "Why choose us",
    "why.point1":
      "Over 20 years of experience in sourcing and international logistics",
    "why.point2": "Personalized attention and technical support",
    "why.point3": "Wide network of manufacturers and distributors",
    "why.point4": "Efficient processes that reduce time and costs",
    "why.point5": "Shipments throughout Latin America",

    "why.card1.title": "Global Reach",
    "why.card2.title": "Experience",
    "why.card3.title": "Trusted Partnerships",

    // Our work
    "work.ribbon.mobile": "OUR WORK",
    "work.ribbon.desktop": "SELECTED PROJECTS",
    "work.title": "Our Work",
    "work.intro":
      "Our job is to make your job easier so you can focus on your core business. To achieve this, we offer:",

    "work.step1.title": "Specialized Staff",
    "work.step1.text":
      "Staff with a high level of knowledge and motivation, able to deliver differentiated service that exceeds our clients’ expectations.",

    "work.step2.title": "Experience and Know-How",
    "work.step2.text":
      "Certified experience and know-how to handle your purchasing requirements for spare parts and major components, new and/or used, for heavy machinery. From the correct identification of part numbers to the detailed preparation of offers, we can present options based on availability, price and other details or information you need about market-leading brands so you can make the best purchasing decision. We also advise you on recommended stock levels according to your fleet, operation and work location.",

    "work.step3.title": "Logistics and Integral Solutions",
    "work.step3.text":
      "Together with our logistics partners, we design and propose the best logistics network or chain, considering not only proper handling but also the cost and delivery time of the cargo. We keep our clients informed in a timely manner about their cargo or purchase, avoiding the need to deal with multiple suppliers, up to the full closure of each process. We also provide inventory valuation services and offer integral solutions to your needs.",

    // Products
    "products.ribbon.mobile": "PRODUCTS",
    "products.ribbon.desktop": "PRODUCTS",
    "products.title": "Products",
    "products.intro":
      "We are preparing our digital catalog. Meanwhile, we work with a wide range of spare parts and components, including:",
    "products.item1": "Engines and engine parts",
    "products.item2": "Transmissions",
    "products.item3": "Hydraulic components",
    "products.item4": "Electrical and electronic systems",
    "products.item5": "Filters, seals and consumables",
    "products.item6": "Undercarriage",
    "products.item7": "Industrial equipment and accessories",
    "products.cta": "Request a specific part",
    "products.brands":
      "Brands we handle: Caterpillar · Komatsu · John Deere · Volvo · Cummins · Case · Hitachi · among others.",

    // Services
    "services.ribbon.mobile": "OUR SERVICES",
    "services.ribbon.desktop": "WHAT WE OFFER",
    "services.title": "Our Services",
    "services.intro":
      "Discover our range of services designed to meet your business needs.",

    "services.1.title": "Spare parts and components sourcing",
    "services.1.text":
      "We locate and supply parts for heavy machinery from the market's leading brands. If it exists, we find it.",

    "services.2.title": "International logistics",
    "services.2.text":
      "We coordinate consolidation, shipment, transportation, and final delivery. You receive your order without complications.",

    "services.3.title": "Project supplies",
    "services.3.text":
      "We provide comprehensive support to construction, mining, industrial, and energy companies with specialized supplies and equipment.",

    "services.4.title": "Hard-to-find parts",
    "services.4.text":
      "We have access to global suppliers to find scarce or discontinued parts.",

    "services.5.title": "Technical advisory",
    "services.5.text":
      "We help you identify the correct part, avoid compatibility errors, and optimize your operations.",

    // Contact
    "contact.ribbon": "CONTACT",
    "contact.title": "Contact Us",
    "contact.description":
      "We are available to help you with quotes, technical inquiries, and urgent requirements.",
    "contact.question": "Looking for a specific part? Write to us",
    "contact.phone": "+1 XXX XXX XXXX",
    "contact.whatsapp": "Chat now",
    "contact.email.label": "Email",
    "contact.email.value": "sales@eldparts.com",
    "contact.visit.label": "Address",
    "contact.visit.value": "6613 NW 84th Ave, Miami FL 33166",
    "contact.callToAction": "Request a call!",

    "contact.form.company": "Company name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send",

    // Quick contact actions
    "contact.actions.requestInfo": "Request information",
    "contact.actions.instagram": "Instagram",
    "contact.actions.linkedin": "LinkedIn",
    "contact.actions.facebook": "Facebook",

    // Language selector
    "lang.es": "ES",
    "lang.en": "EN",

    // Footer
    "footer.copyright": "© 2025 ELD Corp. All rights reserved.",
    "footer.tagline":
      "Comprehensive solutions for heavy machinery and industrial projects.",
  },
};

/**
 * Recursos para i18next a partir de nuestro diccionario plano.
 */
const resources = {
  es: { translation: translations.es },
  en: { translation: translations.en },
};

let i18nInstance: I18nInstance | null = null;

/**
 * Inicializa i18next una sola vez (lazy) y lo reutiliza.
 */
const initI18n = () => {
  if (!i18nInstance) {
    i18nInstance = i18next.createInstance();
    i18nInstance.init({
      resources,
      lng: "es",
      fallbackLng: "es",
      interpolation: {
        escapeValue: false,
      },
    });
  }
  return i18nInstance;
};

export const setI18nLanguage = (lang: Language) => {
  const i18n = initI18n();
  i18n.changeLanguage(lang);
};

export interface I18nApi {
  lang: Language;
  setLang$: QRL<(lang: Language) => void>;
}

/**
 * Función global de traducción basada en i18next.
 * Se puede usar directamente en cualquier componente: t('clave').
 * No se almacena dentro de ningún store de Qwik, evitando problemas de serialización.
 */
export const t = (key: string): string => {
  const i18n = initI18n();
  return i18n.t(key);
};

/**
 * Hook de i18n: solo gestiona el idioma (state) y el cambio de idioma.
 * - lang: idioma actual
 * - setLang$(lang): cambia idioma en el contexto y en i18next
 *
 * Los componentes llaman a `t('...')` importándolo directamente de este módulo.
 */
export const useI18n = (): I18nApi => {
  const langSignal = useContext(LangContext);

  const setLang$ = $((lang: Language) => {
    langSignal.value = lang;
    initI18n().changeLanguage(lang);
  });

  return {
    lang: langSignal.value,
    setLang$,
  };
};
