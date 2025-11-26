import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';
import { t } from '~/i18n';

export default component$(() => {

  return (
    <header class={styles.header + ' relative z-[999999] '}>
      <div class={['container', styles.wrapper] + '  absolute flex items-center w-full justify-between !px-[70px] md:!px-[70px]'}>
        <div class={styles.logo + ' mx-auto md:mx-0'}>
          <a href="/" title="ELD Corp">
            <img height={50} width={170} src="logo.png" />
          </a>
        </div>
        <ul class="flex items-center gap-6">
          <li>
            <a class="text-[14px] font-bold hover:!text-[#111827] inter-bold uppercase" href="#about">
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#111827] inter-bold uppercase" href="#work">
              {t('nav.work')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#111827] inter-bold uppercase" href="#services">
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a class="text-[14px] font-bold hover:!text-[#111827] inter-bold uppercase" href="#contact">
              {t('nav.contact')}
            </a>
          </li>
          <li class="relative group">
            <a class="text-[14px] font-bold hover:!text-[#111827] inter-bold uppercase" href="#products">
              {t('nav.products')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
