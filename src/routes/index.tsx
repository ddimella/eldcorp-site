import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';
import { t } from '~/i18n';

interface StepsProps {
  selectedStep: number;
  onClickStep: QRL<(step: number) => void>;
}

const MobileSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center md:hidden">
      <div
        onClick$={() => {
          onClickStep(1);
        }}
        class={`border-b cursor-pointer text-[18px] md:text-[18px] ${
          selectedStep === 1 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white'
        }  pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        01
      </div>
      <div
        onClick$={() => {
          onClickStep(2);
        }}
        class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${
          selectedStep === 2 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white '
        } pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        02
      </div>
      <div
        onClick$={() => {
          onClickStep(3);
        }}
        class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${
          selectedStep === 3 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white '
        } pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        03
      </div>
    </div>
  );
});

const DesktopSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="hidden md:flex items-center">
      <div
        onClick$={() => {
          onClickStep(1);
        }}
        class={`border-b cursor-pointer text-[18px] ${
          selectedStep === 1 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white'
        }  pb-10 w-[60px] text-center font-bold`}
      >
        01
      </div>
      <div
        onClick$={() => {
          onClickStep(2);
        }}
        class={`border-b cursor-pointer  text-[18px] ${
          selectedStep === 2 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white '
        } pb-10 w-[60px] text-center font-bold`}
      >
        02
      </div>
      <div
        onClick$={() => {
          onClickStep(3);
        }}
        class={`border-b cursor-pointer  text-[18px] ${
          selectedStep === 3 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white '
        } pb-10 w-[60px] text-center font-bold`}
      >
        03
      </div>
    </div>
  );
});

const MobileServiceSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center md:hidden">
      <div
        onClick$={() => {
          onClickStep(1);
        }}
        class={`border-b cursor-pointer text-[18px] md:text-[18px] ${
          selectedStep === 1 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white'
        }  pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        01
      </div>
      <div
        onClick$={() => {
          onClickStep(2);
        }}
        class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${
          selectedStep === 2 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white '
        } pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        02
      </div>
      <div
        onClick$={() => {
          onClickStep(3);
        }}
        class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${
          selectedStep === 3 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white '
        } pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        03
      </div>
      <div
        onClick$={() => {
          onClickStep(4);
        }}
        class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${
          selectedStep === 4 ? 'border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10' : 'border-b-white text-white '
        } pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}
      >
        04
      </div>
    </div>
  );
});

const DesktopServiceSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="hidden md:flex items-center">
      <div
        onClick$={() => {
          onClickStep(1);
        }}
        class={`border-b cursor-pointer text-[18px] ${
          selectedStep === 1 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white'
        }  pb-10 w-[60px] text-center font-bold`}
      >
        01
      </div>
      <div
        onClick$={() => {
          onClickStep(2);
        }}
        class={`border-b cursor-pointer  text-[18px] ${
          selectedStep === 2 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white '
        } pb-10 w-[60px] text-center font-bold`}
      >
        02
      </div>
      <div
        onClick$={() => {
          onClickStep(3);
        }}
        class={`border-b cursor-pointer  text-[18px] ${
          selectedStep === 3 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white '
        } pb-10 w-[60px] text-center font-bold`}
      >
        03
      </div>
      <div
        onClick$={() => {
          onClickStep(4);
        }}
        class={`border-b cursor-pointer  text-[18px] ${
          selectedStep === 4 ? 'border-b-[#E29D21] text-[#E29D21] pb-10' : 'border-b-white text-white '
        } pb-10 w-[60px] text-center font-bold`}
      >
        04
      </div>
    </div>
  );
});

const MobileCounters = component$(() => {
  return (
    <div class="flex flex-col items-center justify-center space-y-8 py-8 px-8 md:hidden">
      <div class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in">
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold">106120</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.items.label1')}</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.items.label2')}</p>
        </div>
      </div>
      <div
        class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in"
        style="transition-delay: 0.1s"
      >
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold">129258,25</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.weight.label1')}</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.weight.label2')}</p>
        </div>
      </div>
      <div
        class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in"
        style="transition-delay: 0.2s"
      >
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold">9650,73</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.volume.label1')}</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.volume.label2')}</p>
        </div>
      </div>
      <div
        class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in"
        style="transition-delay: 0.3s"
      >
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold">130+</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.clients.label1')}</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">{t('counters.clients.label2')}</p>
        </div>
      </div>
    </div>
  );
});

export const TitleComponent = component$(
  ({ name, isLong, class: customClass }: { name: string; isLong: boolean; class?: string }) => {
    return (
      <>
        {/* Mobile View */}
        <div class="flex flex-col items-center md:items-start md:hidden">
          <p
            class={`uppercase text-[#E29D21] text-[18px] font-bold tracking-[3px] mb-2 mt-16 ${
              customClass || ''
            } inter-bold`}
          >
            {name}
          </p>
          <div
            class={`h-[3px] mt-2 !bg-[#E29D21] ${
              isLong ? ' w-[150px] sm:w-[250px]' : ' w-[50px] sm:w-[60px]'
            }`}
          ></div>
        </div>

        {/* Desktop View */}
        <div class="hidden md:flex items-center mt-16">
          <div
            class={`h-[3px] mr-6 !bg-[#E29D21] ${
              isLong ? ' w-[305px]' : ' w-[72px]'
            }`}
          ></div>
          <p
            class={`uppercase text-[#E29D21] text-[18px] font-bold tracking-[6px] ${
              customClass || ''
            } inter-bold`}
          >
            {name}
          </p>
        </div>
      </>
    );
  },
);

export function PhoneIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="black"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
      ></path>
    </svg>
  );
}

export function EmailIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="black"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}

export function IcBaselineLocationOn(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="black"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
      ></path>
    </svg>
  );
}

export function MdiTools(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90px"
      height="90px"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"
      ></path>
    </svg>
  );
}

export function Globe(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90px"
      height="90px"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="m11.8 20.025l.15-4.225l3.05-3h1.95v1.85l2.275.35q.275-.7.438-1.45t.162-1.55q0-2.225-1.112-4.062T15.8 5.05V8h-3v3h-2v3H8.775L6.8 11h-1v1l-1.775 1.975q.65 2.6 2.813 4.325t4.962 1.725m4-6.025h-3v-2h3zm0-6h2.025l-1 3h-2.05zm-4 14q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T1.8 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T11.8 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T21.8 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T11.8 22"
      ></path>
    </svg>
  );
}

export function Handshake(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90px"
      height="90px"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M11 6h3l3.29-3.3a1 1 0 0 1 1.42 0l2.58 2.59a1 1 0 0 1 0 1.41L19 9h-8v2a1 1 0 0 1-1 1a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2m-6 5v4l-2.29 2.29a1 1 0 0 0 0 1.41l2.58 2.59a1 1 0 0 0 1.42 0L11 17h4a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h-7v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"
      ></path>
    </svg>
  );
}

export default component$(() => {
  const workStep = useSignal(1);
  const serviceStep = useSignal(1);

  const productIndex = useSignal(0);
  const productLogos = [
    '/productLogo1.png',
    '/productLogo2.png',
    '/productLogo3.png',
    '/productLogo4.png',
    '/productLogo5.png',
    '/productLogo6.png',
    '/productLogo7.png',
    '/productLogo8.png',
    '/productLogo9.png',
    '/productLogo10.png',
    '/productLogo11.png',
  ];

  const onClickStepWork = $((step: number) => {
    workStep.value = step;
  });

  const onClickStepService = $((step: number) => {
    serviceStep.value = step;
  });

  // Mobile fade-in animation observer + automatic product carousel
  useVisibleTask$(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    // Observe all elements with mobile-fade-in class
    const elements = document.querySelectorAll('.mobile-fade-in');
    elements.forEach((el) => observer.observe(el));

    // Automatic horizontal carousel: advance one logo at a time
    const interval = window.setInterval(() => {
      productIndex.value = (productIndex.value + 1) % productLogos.length;
    }, 4000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.clearInterval(interval);
    };
  });

  return (
    <div>
      <Hero />
      <div class="pt-[800px] md:pt-[100vh]">
        <div class="hidden md:flex flex-col sm:flex-row items-center justify-around counters min-h-[225px] w-full bg-white py-8 md:rounded-none shadow-lg md:px-[90px] mx-auto">
          <div class="border-l-4 pl-5 border-l-[#E29D21] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-3xl sm:text-4xl lg:text-[48px] font-bold inter-bold">106120</p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[24px] font-bold inter-semibold">
                  {t('counters.items.label1')}
                </p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[24px] font-bold inter-semibold">
                  {t('counters.items.label2')}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">129258,25</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.weight.label1')}
                </p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.weight.label2')}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">9650,73</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.volume.label1')}
                </p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.volume.label2')}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">130+</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.clients.label1')}
                </p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">
                  {t('counters.clients.label2')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MobileCounters />

        <div class="md:container mx-auto md:mt-12 px-4 md:px-[90px] flex flex-col items-center">
          <div
            id="about"
            class="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10 mt-16 px-4 sm:px-0 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            <div class="w-full lg:w-auto">
              <TitleComponent name={t('about.ribbon')} isLong={true} />
              <div class="leading-6 mt-10 text-[16px] text-black p-8 sm:p-10 md:p-14 pt-10 bg-[#E29D21] shadow-lg max-w-full lg:max-w-[370px] mx-auto ml-0 text-justify opensans-regular">
                {t('about.text')}
              </div>
            </div>
            <div class="w-full lg:w-auto">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair">
                {t('why.title')}
              </p>
              <ul class="leading-6 mt-6 text-white text-left max-w-full lg:max-w-[800px] mx-auto lg:mx-0 opensans-regular list-disc pl-5 space-y-2">
                <li>{t('why.point1')}</li>
                <li>{t('why.point2')}</li>
                <li>{t('why.point3')}</li>
                <li>{t('why.point4')}</li>
              </ul>
              <div class="flex flex-col md:flex md:flex-row mt-12 gap-8 justify-items-center">
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold text-center shadow-lg mx-auto">
                  <div class="flex justify-center">
                    <Globe class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">{t('why.card1.title')}</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold flex-col text-center shadow-lg mx-auto">
                  <div class="flex justify-center">
                    <MdiTools class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">{t('why.card2.title')}</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold text-center shadow-lg mx-auto md:mx-0">
                  <div class="flex justify-center">
                    <Handshake class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">{t('why.card3.title')}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="work"
            class="w-full mt-16 px-4 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name={t('work.ribbon.mobile')} isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name={t('work.ribbon.desktop')} isLong={true} />
            </div>
            <div class="mt-10 text-center lg:text-left">
              <p class="md:block text-white font-bold text-[52px] md:text-[64px] playfair">
                {t('work.title')}
              </p>
              <p class="text-[16px] text-white mt-5 leading-6 max-w-full lg:max-w-[1171px] mx-auto lg:mx-0 text-justify opensans-regular">
                {t('work.intro')}
              </p>
            </div>
            <div class="flex flex-col lg:flex-row mt-16 items-center lg:items-start">
              {/* Mobile View for Nuestro Trabajo */}
              <div class="flex flex-col items-center lg:hidden mt-8 space-y-8 w-full">
                <div class="relative w-full max-w-[405px] h-[300px]">
                  <div class="absolute inset-0 w-full h-[300px]"></div>
                  <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 w-full max-w-[405px] h-[300px]">
                    <div class="w-full h-full max-w-16xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
                  </div>
                  <div class="relative">
                    {workStep.value === 1 ? (
                      <img src="/ourwork1.jpeg" class="w-full h-[300px] object-cover" alt="" />
                    ) : workStep.value === 2 ? (
                      <img src="/ourwork3.jpeg" class="w-full h-[300px] object-cover " alt="" />
                    ) : (
                      <img src="/work3.jpg" class="w-full h-[300px] object-cover " alt="" />
                    )}
                  </div>
                </div>
                <div class="mt-8 mb-8 flex justify-center md:hidden">
                  <MobileSteps selectedStep={workStep.value} onClickStep={onClickStepWork} />
                </div>
                <div class="mt-8 w-full max-w-[416px] text-center">
                  {workStep.value === 1 ? (
                    <div
                      class={`relative ${
                        workStep.value === 1 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                    >
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                        {t('work.step1.title')}
                      </p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[200px]`}></div>
                      <p class="mt-5 text-white leading-6 text-justify opensans-regular">{t('work.step1.text')}</p>
                    </div>
                  ) : workStep.value === 2 ? (
                    <div
                      class={`relative ${
                        workStep.value === 2 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                    >
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                        {t('work.step2.title')}
                      </p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[180px]`}></div>
                      <p class="mt-5 text-white leading-6 text-justify opensans-regular">{t('work.step2.text')}</p>
                    </div>
                  ) : (
                    <div
                      class={`relative ${
                        workStep.value === 3 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                    >
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                        {t('work.step3.title')}
                      </p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[190px]`}></div>
                      <p class="mt-5 text-white leading-6 text-justify opensans-regular">{t('work.step3.text')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop View for Nuestro Trabajo */}
              <div class="hidden md:flex mt-16">
                <div class=" w-[900px] h-[480px] flex">
                  <div class="">
                    <p
                      class={`absolute ${
                        workStep.value === 1 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}
                    >
                      01
                    </p>
                    <p
                      class={`absolute ${
                        workStep.value === 2 ? ' opacity-1' : 'opacity-0'
                      }  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}
                    >
                      02
                    </p>
                    <p
                      class={`absolute ${
                        workStep.value === 3 ? ' opacity-1' : 'opacity-0'
                      }  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}
                    >
                      03
                    </p>
                    <p
                      class={` ${
                        workStep.value === 4 ? ' visible opacity-1' : 'opacity-0'
                      }  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}
                    >
                      1
                    </p>
                    <div>
                      <img
                        src="public/ourwork1.jpeg"
                        class={`absolute ${
                          workStep.value === 1 ? ' opacity-1' : 'opacity-0'
                        } transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`}
                      />
                      <img
                        src="public/ourwork3.jpeg"
                        class={`absolute ${
                          workStep.value === 2 ? ' opacity-1' : 'opacity-0'
                        } transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`}
                      />
                      <img
                        src="public/work3.jpg"
                        class={`absolute ${
                          workStep.value === 3 ? ' opacity-1' : 'opacity-0'
                        } transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`}
                      />
                    </div>
                  </div>
                  <div class="ml-20">
                    {/* Work Image 2  */}
                    <img
                      src="public/ourwork2.jpeg"
                      class={`absolute h-[385px] w-[570px] ${
                        workStep.value === 1 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                      alt=""
                    />
                    <img
                      src="public/work22.jpg"
                      class={`absolute h-[385px] w-[570px] ${
                        workStep.value === 2 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                      alt=""
                    />
                    <img
                      src="public/work33.jpeg"
                      class={`absolute h-[385px] w-[570px] ${
                        workStep.value === 3 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                      alt=""
                    />
                  </div>
                </div>
                <div class="ml-5 h-[350px] ">
                  <div>
                    <div
                      class={`absolute ${
                        workStep.value === 1 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                    >
                      <p class="text-[48px] font-bold playfair">{t('work.step1.title')}</p>
                      <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[305px]`}></div>
                      <p class="mt-5 w-[416px] h-[144px]  leading-6">{t('work.step1.text')}</p>
                    </div>
                    <div
                      class={`absolute ${
                        workStep.value === 2 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                    >
                      <p class="text-[48px] font-bold playfair">{t('work.step2.title')}</p>
                      <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[240px]`}></div>
                      <p class="mt-5 w-[416px] h-[144px] leading-6">{t('work.step2.text')}</p>
                    </div>
                    <div
                      class={`absolute ${
                        workStep.value === 3 ? ' opacity-1' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                    >
                      <p class="text-[48px] font-bold playfair">{t('work.step3.title')}</p>
                      <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[250px]`}></div>
                      <p class="mt-5 w-[416px] h-[144px]  leading-6">{t('work.step3.text')}</p>
                    </div>
                  </div>
                  <div class="mt-[330px]">
                    <DesktopSteps selectedStep={workStep.value} onClickStep={onClickStepWork} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS SECTION */}
          <div
            id="products"
            class="w-full mt-16 px-4 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name={t('products.ribbon.mobile')} isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name={t('products.ribbon.desktop')} isLong={true} />
            </div>
            <div class="services mt-10">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair text-center md:text-left">
                {t('products.title')}
              </p>
              <p class="text-[16px] text-white w-full max-w-[1171px] mt-5 leading-6 text-center md:text-left mx-auto md:mx-0">
                {t('products.intro')}
              </p>
              <div class="mt-10 w-full overflow-hidden">
                <div
                  class="flex transition-transform duration-700 ease-out"
                  style={`transform: translateX(-${productIndex.value * 25}%);`}
                >
                  {[...productLogos, ...productLogos].map((logo, idx) => (
                    <div key={idx} class="flex-shrink-0 flex-grow-0 basis-1/4 flex justify-center">
                      <img
                        src={logo}
                        alt={`Product logo ${idx + 1}`}
                        class="h-16 sm:h-20 object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div
            id="services"
            class="mt-6 md:px-[90px] mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name={t('services.ribbon.mobile')} isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name={t('services.ribbon.desktop')} isLong={true} />
            </div>
            <div class="mt-10 text-center lg:text-left">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair">
                {t('services.title')}
              </p>
            </div>
            <div class="services mt-10">
              <p class="text-white mt-8 leading-6 text-center md:text-left max-w-full lg:max-w-[800px] mx-auto md:mx-0 text-justify opensans-regular">
                {t('services.intro')}
              </p>
              {/* Mobile View for Services */}
              <div class="flex flex-col items-center md:hidden mt-12 space-y-8">
                <div class="relative w-full max-w-[780px] h-auto">
                  {serviceStep.value === 1 ? (
                    <img src="/serviceproducts.jpeg" class="w-full h-auto shadow-lg" alt="" />
                  ) : serviceStep.value === 2 ? (
                    <img src="/serviceconsolidation.jpeg" class="w-full h-auto shadow-lg" alt="" />
                  ) : serviceStep.value === 3 ? (
                    <img src="/servicealmacen.jpeg" class="w-full h-auto shadow-lg" alt="" />
                  ) : (
                    <img src="/serviceproducts.jpeg" class="w-full h-auto shadow-lg" alt="" />
                  )}
                </div>
                <div class="flex justify-center mt-8 md:hidden">
                  <MobileServiceSteps selectedStep={serviceStep.value} onClickStep={onClickStepService} />
                </div>
                {serviceStep.value === 1 ? (
                  <div
                    class={`w-full max-w-[444px] text-center ${
                      serviceStep.value === 1 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                      {t('services.1.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[200px]`}></div>
                    <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                      {t('services.1.text')}
                    </p>
                  </div>
                ) : serviceStep.value === 2 ? (
                  <div
                    class={`w-full max-w-[444px] text-center ${
                      serviceStep.value === 2 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                      {t('services.2.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[220px]`}></div>
                    <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                      {t('services.2.text')}
                    </p>
                  </div>
                ) : serviceStep.value === 3 ? (
                  <div
                    class={`w-full max-w-[444px] text-center ${
                      serviceStep.value === 3 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                      {t('services.3.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[260px]`}></div>
                    <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                      {t('services.3.text')}
                    </p>
                  </div>
                ) : (
                  <div
                    class={`w-full max-w-[444px] text-center ${
                      serviceStep.value === 4 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">
                      {t('services.4.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[260px]`}></div>
                    <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                      {t('services.4.text')}
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop View for Services */}
              <div class="hidden md:flex mt-12 space-x-12">
                <div class="relative w-[780px] h-[340px]">
                  {serviceStep.value === 1 ? (
                    <img
                      src="/serviceproducts.jpeg"
                      class="w-full h-full object-cover shadow-lg"
                      alt=""
                    />
                  ) : serviceStep.value === 2 ? (
                    <img
                      src="/serviceconsolidation.jpeg"
                      class="w-full h-full object-cover shadow-lg"
                      alt=""
                    />
                  ) : serviceStep.value === 3 ? (
                    <img
                      src="/servicealmacen.jpeg"
                      class="w-full h-full object-cover shadow-lg"
                      alt=""
                    />
                  ) : (
                    <img
                      src="/serviceproducts.jpeg"
                      class="w-full h-full object-cover shadow-lg"
                      alt=""
                    />
                  )}
                  <div class="absolute bottom-12 left-8 hidden md:block">
                    <DesktopServiceSteps
                      selectedStep={serviceStep.value}
                      onClickStep={onClickStepService}
                    />
                  </div>
                </div>
                {serviceStep.value === 1 ? (
                  <div
                    class={`w-[444px] ${
                      serviceStep.value === 1 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-[42px] font-bold playfair-regular text-white">
                      {t('services.1.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[260px]`}></div>
                    <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                      {t('services.1.text')}
                    </p>
                  </div>
                ) : serviceStep.value === 2 ? (
                  <div
                    class={`w-[444px] ${
                      serviceStep.value === 2 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-[42px] font-bold playfair-regular text-white">
                      {t('services.2.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[290px]`}></div>
                    <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                      {t('services.2.text')}
                    </p>
                  </div>
                ) : serviceStep.value === 3 ? (
                  <div
                    class={`w-[444px] ${
                      serviceStep.value === 3 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-[42px] font-bold playfair-regular text-white">
                      {t('services.3.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[320px]`}></div>
                    <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                      {t('services.3.text')}
                    </p>
                  </div>
                ) : (
                  <div
                    class={`w-[444px] ${
                      serviceStep.value === 4 ? ' opacity-1' : 'opacity-0'
                    } transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}
                  >
                    <p class="text-[42px] font-bold playfair-regular text-white">
                      {t('services.4.title')}
                    </p>
                    <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[290px]`}></div>
                    <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                      {t('services.4.text')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            class="form mt-16 px-4 sm:px-0 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
            id="contact"
          >
            <div>
              <div class="md:hidden">
                <TitleComponent name={t('contact.ribbon')} isLong={true} />
              </div>
              <div class="hidden md:block">
                <TitleComponent name={t('contact.ribbon')} isLong={true} />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row mt-12 space-y-8 lg:space-y-0 lg:space-x-4 items-center lg:items-start">
              <div class="w-full lg:w-auto lg:mr-8">
                <img
                  width={590}
                  height={450}
                  src="/sampleformimg.jpg"
                  class="shadow-lg w-full h-auto max-w-[590px] mx-auto"
                ></img>
              </div>
              <div class="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
                <p class="text-4xl sm:text-5xl lg:text-[64px] font-bold playfair-bold text-white">
                  {t('contact.title')}
                </p>
                <p class="text-white mt-8 leading-6 max-w-full lg:max-w-[800px] mx-auto lg:mx-0 text-justify opensans-regular">
                  {t('contact.description')}
                </p>

                {/* Quick contact actions */}
                <div class="mt-10 w-full max-w-[590px] mx-auto space-y-3">
                  {/* Solicitar información */}
                  <a
                    href="#"
                    class="flex items-center justify-between bg-white text-black px-4 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2
                               2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0
                               4l-8 5l-8-5V6l8 5l8-5z"
                          />
                        </svg>
                      </div>
                      <span class="text-sm sm:text-base font-semibold">
                        {t('contact.actions.requestInfo')}
                      </span>
                    </div>
                    <span class="text-gray-400">...</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    class="flex items-center justify-between bg-white text-black px-4 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757
                               2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm0
                               2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654
                               1.346-3 3-3m10 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7m0
                               2a3 3 0 1 1 0 6a3 3 0 0 1 0-6"
                          />
                        </svg>
                      </div>
                      <span class="text-sm sm:text-base font-semibold">
                        {t('contact.actions.instagram')}
                      </span>
                    </div>
                    <span class="text-gray-400">...</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    class="flex items-center justify-between bg-white text-black px-4 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88
                               0 3.5S1.12 1 2.5 1S4.98 2.12 4.98 3.5M.25 8.25h4.5V23h-4.5zM8.5
                               8.25h4.31v2.01h.06c.6-1.14 2.06-2.34 4.24-2.34C21.75 7.92 23 10.1
                               23 13.43V23h-4.5v-8.27c0-1.97-.04-4.5-2.74-4.5c-2.74 0-3.16 2.14-3.16
                               4.36V23H8.5z"
                          />
                        </svg>
                      </div>
                      <span class="text-sm sm:text-base font-semibold">
                        {t('contact.actions.linkedin')}
                      </span>
                    </div>
                    <span class="text-gray-400">...</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    class="flex items-center justify-between bg-white text-black px-4 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M13 3h4a1 1 0 0 1 1 1v3h-3a2 2 0 0 0-2
                               2v3h4l-1 4h-3v6h-4v-6H7v-4h3v-3a5 5 0 0 1 5-5"
                          />
                        </svg>
                      </div>
                      <span class="text-sm sm:text-base font-semibold">
                        {t('contact.actions.facebook')}
                      </span>
                    </div>
                    <span class="text-gray-400">...</span>
                  </a>
                </div>

                {/* Contact info blocks below quick actions */}
                <div class="mt-10 flex flex-col items-center lg:items-start space-y-8">
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <PhoneIcon></PhoneIcon>
                    </div>
                    <div class="text-left mt-1">
                      <p class="text-white text-[14px] opensans-regular">
                        {t('contact.question')}
                      </p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">{t('contact.phone')}</p>
                    </div>
                  </div>
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <EmailIcon></EmailIcon>
                    </div>
                    <div class="text-left mt-1">
                      <p class="text-white text-[14px] opensans-regular">{t('contact.email.label')}</p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">{t('contact.email.value')}</p>
                    </div>
                  </div>
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <IcBaselineLocationOn></IcBaselineLocationOn>
                    </div>
                    <div class="text-left mt-1 w-full">
                      <p class="text-white text-[14px] opensans-regular">{t('contact.visit.label')}</p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">
                        {t('contact.visit.value')}
                      </p>
                      <div class="mt-4 w-full h-[200px] sm:h-[220px] rounded-md overflow-hidden shadow-lg">
                        <iframe
                          title="ELDCorp Location"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.787282229339!2d-80.3317026239619!3d25.83604810504361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ba7b1a6c4f3b%3A0x3b4c9f4a3e41a4f1!2s6613%20NW%2084th%20Ave%2C%20Miami%2C%20FL%2033166%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                          width="100%"
                          height="100%"
                          style="border:0;"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-20 h-[80px]"></div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'ELD',
};
