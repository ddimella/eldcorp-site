import { $, createContextId, useContext, type QRL, type Signal } from '@builder.io/qwik';
import i18next, { type i18n as I18nInstance } from 'i18next';

export type Language = 'es' | 'en';

export const LangContext = createContextId<Signal<Language>>('eldcorp.lang');

/**
 * Diccionario completo de traducciones ES / EN.
 * Se usa como base de recursos para i18next.
 */
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navegación
    'nav.about': 'Sobre nosotros',
    'nav.work': 'Nuestro trabajo',
    'nav.services': 'Servicios',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',

    // Hero principal (slide 0)
    'hero.ribbon': 'MÁS QUE UN PROVEEDOR',
    'hero.title.line1': 'EL MEJOR ALIADO',
    'hero.title.line2': 'PARA TU OPERACIÓN',
    'hero.cta': 'CONTACTO',
    'hero.cta.long': 'Ponerse en contacto',
    'hero.steps.start': 'Inicio',

    // Hero slide 1
    'hero.slide1.ribbon': 'MAESTRÍA MECÁNICA',
    'hero.slide1.title1': 'EXPERIENCIA',
    'hero.slide1.title2': 'A TU DISPOSICIÓN',

    // Hero slide 2
    'hero.slide2.ribbon': 'PROYECTOS INDUSTRIALES',
    'hero.slide2.title1': 'NUESTRA INFRAESTRUCTURA',
    'hero.slide2.title2': 'TU FORTALEZA',

    // Contadores
    'counters.items.label1': 'Ítems',
    'counters.items.label2': 'suministrados',
    'counters.weight.label1': 'Libras',
    'counters.weight.label2': 'despachadas',
    'counters.volume.label1': 'Pies cúbicos',
    'counters.volume.label2': 'despachados',
    'counters.clients.label1': 'Clientes',
    'counters.clients.label2': 'registrados',

    // Sobre nosotros / Why us
    'about.ribbon': 'SOBRE NOSOTROS',
    'about.text':
      'Somos Profesionales, con un legado de más de 20 años de experiencia que disfruta de servir a sus clientes forjando a través de ello relaciones y conexiones duraderas, rentables e innovadoras.',

    'why.title': '¿Por qué Nosotros?',
    'why.point1':
      'Eld Corp, es una empresa Americana ubicada estratégicamente en el corazón del comercio Internacional en Miami, Florida, EEUU.',
    'why.point2':
      'Vinculaciones, Aliados y proveedores alrededor del mundo que permiten desarrollar negociaciones factibles y rentables, diseñadas a la medida del requerimiento, de la operación y visión planteada por los clientes.',
    'why.point3':
      'Infraestructura de oficinas y almacenes para la atención personalizada y online.',
    'why.point4':
      'Contamos con gente comprometida y enfocada en dar lo mejor en cada una de las funciones que ejecutamos.',

    'why.card1.title': 'Alcance Global',
    'why.card2.title': 'Experiencia',
    'why.card3.title': 'Asociaciones de Confianza',

    // Nuestro trabajo
    'work.ribbon.mobile': 'NUESTRO TRABAJO',
    'work.ribbon.desktop': 'TRABAJOS SELECCIONADOS',
    'work.title': 'Nuestro Trabajo',
    'work.intro':
      'Nuestro trabajo es facilitarle y permitir que ud se dedique al suyo. Para ello contamos con:',

    'work.step1.title': 'Personal especializado',
    'work.step1.text':
      'Personal con un alto nivel de conocimiento y motivación que puede brindarle un servicio diferenciado y que supere las expectativas de nuestros clientes.',

    'work.step2.title': 'Experiencia y conocimiento',
    'work.step2.text':
      'Experiencia y conocimiento certificado para la atención y manejo de sus requerimientos de compras de repuestos, de componentes mayores nuevos y/o usados para Maquinarias Pesadas desde la identificación apropiada de los números de partes y piezas requeridas para la elaboración detallada de ofertas en la cual podemos presentarles opciones por disponibilidad, precio y demás detalles o información necesaria de las marcas reconocidas por su excelencia y calidad en el mercado con las que ud pueda decidir su compra. Asesoramiento para la elaboración de stock sugeridos de partes según su Flota, operación y lugar de trabajo.',

    'work.step3.title': 'Logística y soluciones integrales',
    'work.step3.text':
      'Con nuestros aliados logísticos, diseñar y proponer la mejor cadena o red logística requerida que considere además del manejo apropiado su costo y tiempo de entrega de la carga. Mantener oportunamente informado a nuestros clientes de su carga o compra evitándose la incomodidad de trabajar y comunicarse con dos o más proveedores, todo ello hasta el cierre completo de cada proceso. Valoración de inventarios de clientes. Ser de los que le ofrecen una solución Integral a su necesidad.',

    // Productos
    'products.ribbon.mobile': 'PRODUCTOS',
    'products.ribbon.desktop': 'PRODUCTS',
    'products.title': 'Productos',
    'products.intro':
      'Próximamente encontrarás aquí las marcas y productos que ELD CORP ofrece al mercado. Esta sección mostrará los logos de nuestros aliados y fabricantes.',
    'products.logoPlaceholder': 'LOGO',

    // Servicios
    'services.ribbon.mobile': 'NUESTROS SERVICIOS',
    'services.ribbon.desktop': 'WHAT WE OFFER',
    'services.title': 'Nuestros servicios',
    'services.intro':
      'Descubre nuestra gama de servicios diseñados para satisfacer las necesidades de tu negocio. Con una combinación de experiencia tradicional y soluciones innovadoras, estamos dedicados a ofrecer excelencia y generar un impacto significativo en diferentes industrias.',

    'services.1.title': 'Procura nacional e internacional',
    'services.1.text':
      'Procura nacional e internacional para la adquisición de insumos, partes y equipos de diversos sectores (Construcción, Energía, Industrial, Minería entre otros).',

    'services.2.title': 'Comercialización y representación',
    'services.2.text':
      'Comercialización/Representación de sus productos en el mercado local o internacional.',

    'services.3.title': 'Almacenamiento y consolidación',
    'services.3.text':
      'Almacenamiento/ Consolidación de carga incluyendo su despacho a cualquier parte del mundo.',

    'services.4.title': 'Agenciamiento de compras',
    'services.4.text': 'Agenciamiento de Compras.',

    // Contacto
    'contact.ribbon': 'CONTACT US',
    'contact.title': 'Ponte en contacto con nosotros',
    'contact.description':
      'Sinergiza completamente las relaciones de recursos gravosas a través de un nicho premier innovando dinámicamente en el estado del arte del servicio al cliente.',
    'contact.question': '¿Tienes alguna pregunta?',
    'contact.phone': '+01 569  896 654',
    'contact.email.label': 'Escribir correo electrónico',
    'contact.email.value': 'sales@eldparts.com',
    'contact.visit.label': 'Visita en cualquier momento',
    'contact.visit.value': '6613 NW 84Th Ave, Miami FL 33166',
    'contact.callToAction': '¡Solicita una llamada!',

    'contact.form.company': 'Nombre de la compañía',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Número de teléfono',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar',

    // Acciones rápidas de contacto
    'contact.actions.requestInfo': 'Solicitar información',
    'contact.actions.instagram': 'Instagram',
    'contact.actions.linkedin': 'LinkedIn',
    'contact.actions.facebook': 'Facebook',

    // Selector de idioma
    'lang.es': 'ES',
    'lang.en': 'EN',
  },

  en: {
    // Navigation
    'nav.about': 'About us',
    'nav.work': 'Our work',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact',

    // Main hero (slide 0)
    'hero.ribbon': 'MORE THAN A SUPPLIER, YOUR BEST PARTNER FOR YOUR OPERATIONS',
    'hero.title.line1': 'BEYOND',
    'hero.title.line2': 'LIMITS',
    'hero.cta': 'CONTACT',
    'hero.cta.long': 'Get in touch',
    'hero.steps.start': 'Start',

    // Hero slide 1
    'hero.slide1.ribbon': 'MECHANICAL MASTERY',
    'hero.slide1.title1': 'Empowering Industries,',
    'hero.slide1.title2': 'Forging Alliances',

    // Hero slide 2
    'hero.slide2.ribbon': 'INDUSTRIAL PROJECTS',
    'hero.slide2.title1': 'Elevating Project Outcomes',
    'hero.slide2.title2': '_',

    // Counters
    'counters.items.label1': 'Items',
    'counters.items.label2': 'supplied',
    'counters.weight.label1': 'Weight',
    'counters.weight.label2': 'shipped',
    'counters.volume.label1': 'Cubic feet',
    'counters.volume.label2': 'shipped',
    'counters.clients.label1': 'Clients',
    'counters.clients.label2': 'registered',

    // About / Why us
    'about.ribbon': 'ABOUT US',
    'about.text':
      'We are professionals with a legacy of more than 20 years of experience, serving our clients and building long-lasting, profitable and innovative relationships.',

    'why.title': 'Why us?',
    'why.point1':
      'ELD CORP is an American company strategically located in the heart of international trade in Miami, Florida, USA.',
    'why.point2':
      'Connections, partners and suppliers around the world allow us to develop feasible and profitable negotiations tailored to the requirements, operations and vision of our clients.',
    'why.point3':
      'Office and warehouse infrastructure for both personalized and online service.',
    'why.point4':
      'We have committed people focused on giving their best in every function we perform.',

    'why.card1.title': 'Global Reach',
    'why.card2.title': 'Experience',
    'why.card3.title': 'Trusted Partnerships',

    // Our work
    'work.ribbon.mobile': 'OUR WORK',
    'work.ribbon.desktop': 'SELECTED PROJECTS',
    'work.title': 'Our Work',
    'work.intro':
      'Our job is to make your job easier so you can focus on your core business. To achieve this, we offer:',

    'work.step1.title': 'Specialized Staff',
    'work.step1.text':
      'Staff with a high level of knowledge and motivation, able to deliver differentiated service that exceeds our clients’ expectations.',

    'work.step2.title': 'Experience and Know-How',
    'work.step2.text':
      'Certified experience and know-how to handle your purchasing requirements for spare parts and major components, new and/or used, for heavy machinery. From the correct identification of part numbers to the detailed preparation of offers, we can present options based on availability, price and other details or information you need about market-leading brands so you can make the best purchasing decision. We also advise you on recommended stock levels according to your fleet, operation and work location.',

    'work.step3.title': 'Logistics and Integral Solutions',
    'work.step3.text':
      'Together with our logistics partners, we design and propose the best logistics network or chain, considering not only proper handling but also the cost and delivery time of the cargo. We keep our clients informed in a timely manner about their cargo or purchase, avoiding the need to deal with multiple suppliers, up to the full closure of each process. We also provide inventory valuation services and offer integral solutions to your needs.',

    // Products
    'products.ribbon.mobile': 'PRODUCTS',
    'products.ribbon.desktop': 'PRODUCTS',
    'products.title': 'Products',
    'products.intro':
      'Soon you will find here the brands and products that ELD CORP offers to the market. This section will showcase the logos of our partners and manufacturers.',
    'products.logoPlaceholder': 'LOGO',

    // Services
    'services.ribbon.mobile': 'OUR SERVICES',
    'services.ribbon.desktop': 'WHAT WE OFFER',
    'services.title': 'Our Services',
    'services.intro':
      'Discover our range of services designed to meet your business needs. Combining traditional experience with innovative solutions, we are committed to excellence and to generating a meaningful impact across different industries.',

    'services.1.title': 'National and international procurement',
    'services.1.text':
      'National and international procurement for the acquisition of supplies, parts and equipment in various sectors (Construction, Energy, Industrial, Mining, among others).',

    'services.2.title': 'Commercialization and representation',
    'services.2.text':
      'Commercialization and representation of your products in local or international markets.',

    'services.3.title': 'Warehousing and consolidation',
    'services.3.text':
      'Warehousing and cargo consolidation, including shipment to any part of the world.',

    'services.4.title': 'Purchasing agency',
    'services.4.text': 'Purchasing agency services.',

    // Contact
    'contact.ribbon': 'CONTACT US',
    'contact.title': 'Get in touch with us',
    'contact.description':
      'Fully synergize complex resource relationships through a premier niche, dynamically innovating at the state of the art of customer service.',
    'contact.question': 'Do you have any questions?',
    'contact.phone': '+01 569  896 654',
    'contact.email.label': 'Write an email',
    'contact.email.value': 'sales@eldparts.com',
    'contact.visit.label': 'Visit us anytime',
    'contact.visit.value': '6613 NW 84Th Ave, Miami FL 33166',
    'contact.callToAction': 'Request a call!',

    'contact.form.company': 'Company name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',

    // Quick contact actions
    'contact.actions.requestInfo': 'Request information',
    'contact.actions.instagram': 'Instagram',
    'contact.actions.linkedin': 'LinkedIn',
    'contact.actions.facebook': 'Facebook',

    // Language selector
    'lang.es': 'ES',
    'lang.en': 'EN',
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
      lng: 'es',
      fallbackLng: 'es',
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