import { component$, Slot, useStyles$, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
import { LangContext, setI18nLanguage, type Language } from '~/i18n';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);

  // Idioma global (ES por defecto). Se provee vía contexto para que
  // useTranslate() pueda SUSCRIBIRSE y re-renderizar toda la página de forma
  // consistente al detectar el idioma del navegador (fix del bug de
  // traducción parcial es/en).
  const langSignal = useSignal<Language>('es');
  useContextProvider(LangContext, langSignal);

  // Detectar idioma del navegador en el cliente y sincronizar signal + i18next.
  useVisibleTask$(() => {
    if (typeof navigator === 'undefined') return;

    const browserLang =
      navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]) || 'es';

    const lang: Language = browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';

    // El cambio del signal re-renderiza los componentes que usan useTranslate();
    // setI18nLanguage() además actualiza el singleton de i18next.
    langSignal.value = lang;
    setI18nLanguage(lang);
  });

  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
