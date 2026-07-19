import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';
import { t } from '~/i18n';

export default component$(() => {

  return (
    <header class={styles.header + ' relative z-[999999] '}>
      <div class={['container', styles.wrapper] + '  absolute flex items-center w-full justify-between !px-[24px] md:!px-[40px]'}>
        <div class={styles.logo + ' mx-auto md:mx-0'}>
          <a href="/" title="ELD CORP" class="block" style="filter: drop-shadow(0 3px 8px rgba(0,0,0,0.85)) drop-shadow(0 1px 2px rgba(0,0,0,0.6));">
            <img height={50} width={170} src="logo.png" alt="ELD CORP" />
          </a>
        </div>
        <ul class="flex items-center gap-4 md:gap-6">
          <li>
            <a class="text-[14px] font-bold hover:!text-[#F5B324] inter-bold uppercase transition-colors" href="#about">
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#F5B324] inter-bold uppercase transition-colors" href="#services">
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#F5B324] inter-bold uppercase transition-colors" href="#products">
              {t('nav.products')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#F5B324] inter-bold uppercase transition-colors" href="#contact">
              {t('nav.contact')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
