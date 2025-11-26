import { component$, Slot, useStyles$, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
import { LangContext, type Language, setI18nLanguage } from '~/i18n';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);

  // Idioma global (ES por defecto)
  const langSignal = useSignal<Language>('es');
  useContextProvider(LangContext, langSignal);

  // Detectar idioma del navegador en el cliente y configurar i18n automáticamente
  useVisibleTask$(() => {
    if (typeof navigator === 'undefined') return;

    const browserLang =
      navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]) || 'es';

    const lang: Language = browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';

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
