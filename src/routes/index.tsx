import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';


interface StepsProps {
  selectedStep: number
  onClickStep: QRL<(step: number) => void>;
}

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter = component$<CounterProps>(({ target, suffix = "", duration = 2000 }) => {
  const count = useSignal(0);

  useVisibleTask$(() => {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        count.value = target;
        clearInterval(timer);
      } else {
        count.value = Math.floor(current);
      }
    }, 16);

    return () => clearInterval(timer);
  });

  return (
    <span class="transition-all duration-300 ease-in-out">{count.value}{suffix}</span>
  );
});

const MobileSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center md:hidden">
      <div onClick$={() => { onClickStep(1) }} class={`border-b cursor-pointer text-[18px] md:text-[18px] ${selectedStep === 1 ? "border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10" : "border-b-white text-white"}  pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>01</div>
      <div onClick$={() => { onClickStep(2) }} class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${selectedStep === 2 ? "border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10" : "border-b-white text-white "} pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>02</div>
      <div onClick$={() => { onClickStep(3) }} class={`border-b cursor-pointer  text-[18px] md:text-[18px] ${selectedStep === 3 ? "border-b-[#E29D21] text-[#E29D21] pb-10 md:pb-10" : "border-b-white text-white "} pb-10 md:pb-10 w-[80px] md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>03</div>
    </div>
  )
})

const DesktopSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="hidden md:flex items-center">
      <div onClick$={() => { onClickStep(1) }} class={`border-b cursor-pointer text-[18px] ${selectedStep === 1 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white"}  pb-10 w-[60px] text-center font-bold`}>01</div>
      <div onClick$={() => { onClickStep(2) }} class={`border-b cursor-pointer  text-[18px] ${selectedStep === 2 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white "} pb-10 w-[60px] text-center font-bold`}>02</div>
      <div onClick$={() => { onClickStep(3) }} class={`border-b cursor-pointer  text-[18px] ${selectedStep === 3 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white "} pb-10 w-[60px] text-center font-bold`}>03</div>
    </div>
  )
})

const MobileCounters = component$(() => {
  return (
    <div class="flex flex-col items-center justify-center space-y-8 py-8 px-8 md:hidden">
      <div class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in">
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold"><Counter target={8000} /></p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">Ítems</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">suministrados</p>
        </div>
      </div>
      <div class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in" style="transition-delay: 0.1s">
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold"><Counter target={12000} suffix="+" /></p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">Libras </p>
          <p class="text-[#111827] text-xl font-bold inter-semibold"> despachadas</p>
        </div>
      </div>
      <div class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in" style="transition-delay: 0.2s">
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold"><Counter target={16} /></p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">Pies cúbicos</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">despachados</p>
        </div>
      </div>
      <div class="bg-white shadow-lg p-6 w-full max-w-[250px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in" style="transition-delay: 0.3s">
        <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
        <div class="text-left">
          <p class="text-[#111827] text-4xl font-bold inter-bold"><Counter target={21} suffix="+" /></p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">Clientes confían</p>
          <p class="text-[#111827] text-xl font-bold inter-semibold">en nosotros</p>
        </div>
      </div>
    </div>
  )
})

export const TitleComponent = component$(({ name, isLong, class: customClass }: { name: string, isLong: boolean, class?: string }) => {
  return (
    <>
      {/* Mobile View */}
      <div class="flex flex-col items-center md:items-start md:hidden">
        <p class={`uppercase text-[#E29D21] text-[18px] font-bold tracking-[3px] mb-2 mt-16 ${customClass || ''} inter-bold`}>{name}</p>
        <div class={`h-[3px] mt-2 !bg-[#E29D21] ${isLong ? " w-[150px] sm:w-[250px]" : " w-[50px] sm:w-[60px]"}`}></div>
      </div>

      {/* Desktop View */}
      <div class="hidden md:flex items-center mt-16">
        <div class={`h-[3px] mr-6 !bg-[#E29D21] ${isLong ? " w-[305px]" : " w-[72px]"}`}></div>
        <p class={`uppercase text-[#E29D21] text-[18px] font-bold tracking-[6px] ${customClass || ''} inter-bold`}>{name}</p>
      </div>
    </>
  )
})

export function PhoneIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
  )
}

export function EmailIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
  )
}

export function IcBaselineLocationOn(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path></svg>
  )
}

export function MdiTools(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"></path></svg>
  )
}

export function Globe(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="m11.8 20.025l.15-4.225l3.05-3h1.95v1.85l2.275.35q.275-.7.438-1.45t.162-1.55q0-2.225-1.112-4.062T15.8 5.05V8h-3v3h-2v3H8.775L6.8 11h-1v1l-1.775 1.975q.65 2.6 2.813 4.325t4.962 1.725m4-6.025h-3v-2h3zm0-6h2.025l-1 3h-2.05zm-4 14q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T1.8 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T11.8 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T21.8 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T11.8 22"></path></svg>
  )
}

export function Handshake(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M11 6h3l3.29-3.3a1 1 0 0 1 1.42 0l2.58 2.59a1 1 0 0 1 0 1.41L19 9h-8v2a1 1 0 0 1-1 1a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2m-6 5v4l-2.29 2.29a1 1 0 0 0 0 1.41l2.58 2.59a1 1 0 0 0 1.42 0L11 17h4a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h-7v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"></path></svg>
  )
}

export default component$(() => {
  const workStep = useSignal(1)
  const serviceStep = useSignal(1)

  const onClickStepWork = $((step: number) => {
    workStep.value = step;
  });

  const onClickStepService = $((step: number) => {
    serviceStep.value = step;
  });

  // Mobile fade-in animation observer
  useVisibleTask$(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with mobile-fade-in class
    const elements = document.querySelectorAll('.mobile-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
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
                <p class="text-[#111827] text-3xl sm:text-4xl lg:text-[48px] font-bold inter-bold">8k</p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[24px] font-bold inter-semibold">Ítems</p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[24px] font-bold inter-semibold">suministrados</p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">12k+</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">Libras </p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold"> despachadas</p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">16</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">Pies cúbicos</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">despachados</p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21] text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#E29D21] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[48px] font-bold inter-bold">21+</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">Clientes confían</p>
                <p class="text-[#111827] text-[24px] font-bold inter-semibold">en nosotros</p>
              </div>
            </div>
          </div>
        </div>
        <MobileCounters />

        <div class="md:container mx-auto md:mt-12 px-4 md:px-[90px] flex flex-col items-center">

          <div id="about" class="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10 mt-16 px-4 sm:px-0 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0">
            <div class="w-full lg:w-auto">
              <TitleComponent name='SOBRE NOSOTROS' isLong={true} />
              <div class="leading-6 mt-10 text-[16px] text-black p-8 sm:p-10 md:p-14 pt-10 bg-[#E29D21] shadow-lg max-w-full lg:max-w-[370px] mx-auto ml-0 text-justify opensans-regular">
                Desarrollo pionero y comercio global desde Puerto Ordaz, Venezuela. Mezclamos herencia con innovación, forjando conexiones duraderas y redefiniendo los estándares de la industria para un futuro más brillante.
              </div>
            </div>
            <div class="w-full lg:w-auto">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair">¿Por qué Nosotros?</p>
              <p class="leading-6 mt-6 text-white text-center lg:text-left max-w-full lg:max-w-[800px] mx-auto lg:mx-0 text-justify opensans-regular">
                En ELD, no somos solo una empresa; somos un legado de innovación y confianza. Con más de 19 años de experiencia en Desarrollo, Evaluación de Proyectos y Comercio Internacional, somos su socio ideal para la excelencia. Desde nuestras raíces en Puerto Ordaz, Venezuela, hemos crecido para convertirnos en representantes exclusivos de empresas estadounidenses, sirviendo a todo el territorio venezolano y expandiéndonos internacionalmente con ELD CORP.
              </p>
              <p class="mt-5 font-bold inter-bold text-[#E29D21] text-center lg:text-left">
                Elija nuestra experiencia incomparable y compromiso inquebrantable.
              </p>
              <div class="flex flex-col md:flex md:flex-row mt-12 gap-8 justify-items-center">
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold text-center shadow-lg mx-auto">
                  <div class="flex justify-center">
                    <Globe class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">Alcance Global</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold flex-col text-center shadow-lg mx-auto">
                  <div class="flex justify-center">
                    <MdiTools class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">Experiencia</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] inter-semibold text-center shadow-lg mx-auto md:mx-0">
                  <div class="flex justify-center">
                    <Handshake class="w-[70px] h-[70px]" />
                  </div>
                  <p class="mt-4 inter-semibold">Asociaciones de Confianza</p>
                </div>
              </div>
            </div>
          </div>

          <div id="work" class="mt-16 px-4 md:px-[90px] mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0">
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name='NUESTRO TRABAJO' isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name='TRABAJOS SELECCIONADOS' isLong={true} />
            </div>
            <div class="mt-10 text-center lg:text-left">
              <p class="md:block text-white font-bold text-[52px] md:text-[64px] playfair">Nuestro Trabajo</p>
              <p class="text-[16px] text-white mt-5 leading-6 max-w-full lg:max-w-[1171px] mx-auto lg:mx-0 text-justify opensans-regular">
                Explora una muestra de nuestros esfuerzos pasados. A través de una combinación de tradición e innovación, cada proyecto ejemplifica nuestra dedicación a la excelencia, dejando una marca duradera en industrias de todo el mundo.
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
                    {workStep.value === 1 ?
                      <img src="public/ourwork1.png" class="w-full h-[300px] object-cover" alt="" />
                        :
                        workStep.value === 2 ?
                          <img src="public/ourwork3.png" class="w-full h-[300px] object-cover " alt="" />
                          :
                          <img src="public/work3.jpg" class="w-full h-[300px] object-cover " alt="" />
                    }
                  </div>
                </div>
                <div class="mt-8 mb-8 flex justify-center md:hidden">
                  <MobileSteps selectedStep={workStep.value} onClickStep={onClickStepWork} />
                </div>
                <div class="mt-8 w-full max-w-[416px] text-center">
                  {workStep.value === 1 ?
                    <div class={`relative ${workStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">Pandiani Corp</p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[200px]`}></div>
                      <p class="mt-5 text-white leading-6 text-justify opensans-regular">Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis</p>
                    </div>
                    :
                    workStep.value === 2 ?
                      <div class={`relative ${workStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                        <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">Caterpillar</p>
                        <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[180px]`}></div>
                        <p class="mt-5 text-white leading-6 text-justify opensans-regular">
                          Nos asociamos con Caterpillar Inc. para optimizar sus operaciones de cadena de suministro, implementando soluciones logísticas innovadoras que mejoraron la eficiencia y redujeron los costos. Nuestra colaboración aseguró la distribución sin problemas de partes de maquinaria pesada, fortaleciendo la presencia en el mercado de Caterpillar y la satisfacción del cliente.
                        </p>
                      </div>
                      :
                      <div class={`relative ${workStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                        <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">John Deere</p>
                        <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[190px]`}></div>
                        <p class="mt-5 text-white leading-6 text-justify opensans-regular">
                          John Deere & Company nos confió la optimización de sus procesos de producción, implementando soluciones avanzadas de automatización y principios de fabricación esbelta. Nuestros esfuerzos resultaron en ganancias significativas de productividad y ahorro de costos, posicionando a John Deere para un crecimiento sostenido y competitividad en el mercado de maquinaria agrícola.
                        </p>
                      </div>
                  }
                </div>
              </div>

              {/* Desktop View for Nuestro Trabajo */}
              <div class="hidden md:flex mt-16">
                <div class=" w-[900px] h-[480px] flex">
                <div class="">
                  <p class={`absolute ${workStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}>01</p>
                  <p class={`absolute ${workStep.value === 2 ? " opacity-1" : "opacity-0"}  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}>02</p>
                  <p class={`absolute ${workStep.value === 3 ? " opacity-1" : "opacity-0"}  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}>03</p>
                  <p class={` ${workStep.value === 4 ? " visible opacity-1" : "opacity-0"}  transition-opacity ease-in-out duration-1000 text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]`}>1</p>
                  <div>
                    <img src="public/ourwork1.png" class={`absolute ${workStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`} />
                    <img src="public/ourwork3.png" class={`absolute ${workStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`} />
                    <img src="public/work3.jpg" class={`absolute ${workStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 mt-10 h-[319px] w-[405px]`} />
                  </div>
                </div>
                <div class="ml-20">
                  {/* Work Image 2  */}
                  <img src="public/ourwork2.png" class={`absolute h-[385px] w-[570px] ${workStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`} alt="" />
                  <img src="public/work22.jpg" class={`absolute h-[385px] w-[570px] ${workStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`} alt="" />
                  <img src="public/work33.jpg" class={`absolute h-[385px] w-[570px] ${workStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`} alt="" />
                </div>
              </div>
              <div class="ml-5 h-[350px] ">
                <div>
                  <div class={`absolute ${workStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`}>
                    <p class="text-[48px] font-bold playfair">Pandiani Corp</p>
                    <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[305px]`}></div>
                    <p class="mt-5 w-[416px] h-[144px]  leading-6">Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis</p>
                  </div>
                  <div class={`absolute ${workStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`}>
                    <p class="text-[48px] font-bold playfair">Caterpillar</p>
                    <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[240px]`}></div>
                    <p class="mt-5 w-[416px] h-[144px] leading-6">
                      Nos asociamos con Caterpillar Inc. para optimizar sus operaciones de cadena de suministro, implementando soluciones logísticas innovadoras que mejoraron la eficiencia y redujeron los costos. Nuestra colaboración aseguró la distribución sin problemas de partes de maquinaria pesada, fortaleciendo la presencia en el mercado de Caterpillar y la satisfacción del cliente.
                    </p>
                  </div>
                  <div class={`absolute ${workStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000`}>
                    <p class="text-[48px] font-bold playfair">John Deere</p>
                    <div class={`mt-1 h-[3px] mr-6 !bg-[#E29D21] w-[250px]`}></div>
                    <p class="mt-5 w-[416px] h-[144px]  leading-6">
                      John Deere & Company nos confió la optimización de sus procesos de producción, implementando soluciones avanzadas de automatización y principios de fabricación esbelta. Nuestros esfuerzos resultaron en ganancias significativas de productividad y ahorro de costos, posicionando a John Deere para un crecimiento sostenido y competitividad en el mercado de maquinaria agrícola.
                    </p>
                  </div>
                </div>
                <div class="mt-[330px]">
                  <DesktopSteps selectedStep={workStep.value} onClickStep={onClickStepWork} />
                </div>
              </div>
              </div>

            </div>
          </div>


          {/* EXPERTS SECTION */}
          <div class="experts mt-16 px-4 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0">
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name='TESTIMONIALES' isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name='TESTIMONIALS' isLong={true} />
            </div>
            <div class="services mt-10">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair text-center md:text-left">Testimoniales</p>
              <p class="text-[16px] text-white w-full max-w-[1171px] mt-5 leading-6 text-center md:text-left mx-auto md:mx-0">
                Explora una muestra de nuestros esfuerzos pasados. A través de una combinación de tradición e innovación, cada proyecto ejemplifica nuestra dedicación a la excelencia, dejando una marca duradera en industrias de todo el mundo.
              </p>
              <section class="py-10">
                <div class="px-4 sm:px-0 mx-auto max-w-7xl">
                  <div class="flex flex-col items-center">

                    <div class="relative mt-10 md:mt-24 md:order-2">
                      <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                        <div class="w-full h-full max-w-16xl mx-auto rounded-3xl opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #E29D21 -0.55%, #E29D21 22.86%, #E29D21 48.36%, #E29D21 73.33%, #E29D21 99.34%)"></div>
                      </div>

                      <div class="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div class="flex-1">
                              <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                              </div>

                              <blockquote class="flex-1 mt-8">
                                <p class="text-lg leading-relaxed text-gray-900 font-pj opensans-regular">"
                                  ELDCorp realmente transformó nuestras operaciones logísticas. Su experiencia y dedicación nos ayudaron a optimizar procesos, ahorrando tiempo y recursos.
                                </p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj inter-semibold">CEO</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600 opensans-regular">Chevron, U.S.A</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div class="flex-1">
                              <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                              </div>

                              <blockquote class="flex-1 mt-8">
                                <p class="text-lg leading-relaxed text-gray-900 font-pj opensans-regular">"
                                  Trabajar con ELDCorp fue un cambio de juego para nuestra expansión internacional. Sus soluciones a medida y enfoque proactivo superaron nuestras expectativas
                                  "</p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj inter-semibold">Head of Management</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600 opensans-regular">TechCrunch, Germany</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div class="flex-1">
                              <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                                <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                                </svg>
                              </div>

                              <blockquote class="flex-1 mt-8">
                                <p class="text-lg leading-relaxed text-gray-900 font-pj opensans-regular">"
                                  El compromiso de ELDCorp con la excelencia es incomparable. Entregaron soluciones innovadoras con profesionalismo y eficiencia, impulsando nuestro negocio hacia adelante.
                                  "</p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj inter-semibold">Human Resources Manager</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600 opensans-regular">STAR, Argentina</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div class="flex mt-12 space-x-10 justify-center w-full">
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div id="services" class="mt-6 md:px-[90px] mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0">
            {/* Mobile title - hidden on desktop */}
            <div class="md:hidden">
              <TitleComponent name='NUESTROS SERVICIOS' isLong={true} />
            </div>
            {/* Desktop title - hidden on mobile */}
            <div class="hidden md:block">
              <TitleComponent name='WHAT WE OFFER' isLong={true} />
            </div>
            <div class="mt-10 text-center lg:text-left">
              <p class="text-white font-bold text-[52px] md:text-[64px] playfair">Nuestros servicios</p>
            </div>
            <div class="services mt-10">
              <p class="text-white mt-8 leading-6 text-center md:text-left max-w-full lg:max-w-[800px] mx-auto md:mx-0 text-justify opensans-regular">
                Descubre nuestra gama de servicios diseñados para satisfacer las necesidades de tu negocio. Con una combinación de experiencia tradicional y soluciones innovadoras, estamos dedicados a ofrecer excelencia y generar un impacto significativo en diferentes industrias.
              </p>
              {/* Mobile View for Services */}
              <div class="flex flex-col items-center md:hidden mt-12 space-y-8">
                <div class="relative w-full max-w-[780px] h-auto">
                  {serviceStep.value === 1 ?
                    <img src="/serviceproducts.png" class="w-full h-auto shadow-lg" alt="" />
                    :
                    serviceStep.value === 2 ?
                      <img src="/serviceconsolidation.png" class="w-full h-auto shadow-lg" alt="" />
                      :
                      <img src="/servicealmacen.png" class="w-full h-auto shadow-lg" alt="" />
                  }
                </div>
                <div class="flex justify-center mt-8 md:hidden">
                  <MobileSteps selectedStep={serviceStep.value} onClickStep={onClickStepService} />
                </div>
                {serviceStep.value === 1 ?
                  <div class={`w-full max-w-[444px] text-center ${serviceStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                    <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">Productos</p>
                    <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[200px]`}></div>
                    <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                      En ELDCorp, ofrecemos una amplia gama de piezas de maquinaria de alta calidad para satisfacer todas tus necesidades industriales. Nuestros productos están diseñados para garantizar el máximo rendimiento y durabilidad, ayudando a optimizar la eficiencia de tus operaciones.
                    </p>
                  </div>
                  :
                  serviceStep.value === 2 ?
                    <div class={`w-full max-w-[444px] text-center ${serviceStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">Consolidación</p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[180px]`}></div>
                      <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                        En ELDCorp, ofrecemos servicios de consolidación para optimizar tu cadena de suministro. Nuestro equipo se encarga de reunir y combinar tus envíos de piezas de maquinaria, reduciendo costos y mejorando la eficiencia logística.
                      </p>
                    </div>
                    :
                    <div class={`w-full max-w-[444px] text-center ${serviceStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                      <p class="text-3xl sm:text-4xl font-bold playfair-regular text-white">Almacén</p>
                      <div class={`mt-1 h-[3px] mx-auto !bg-[#E29D21] w-[120px]`}></div>
                      <p class="text-white mt-4 leading-6 text-justify opensans-regular">
                        ELDCorp ofrece servicios de almacenamiento seguros y eficientes para tus piezas de maquinaria. Nuestras instalaciones están equipadas con la última tecnología en gestión de inventarios, asegurando que tus productos estén protegidos y disponibles cuando los necesites.
                      </p>
                    </div>
                }
              </div>

              {/* Desktop View for Services */}
              <div class="hidden md:flex mt-12 space-x-12">
                <div class="relative w-[780px] h-[340px]">
                  {serviceStep.value === 1 ?
                    <img src="/serviceproducts.png" class="w-full h-full object-cover shadow-lg" alt="" />
                    :
                    serviceStep.value === 2 ?
                      <img src="/serviceconsolidation.png" class="w-full h-full object-cover shadow-lg" alt="" />
                      :
                      <img src="/servicealmacen.png" class="w-full h-full object-cover shadow-lg" alt="" />
                  }
                  <div class="absolute bottom-12 left-8 hidden md:block">
                    <DesktopSteps selectedStep={serviceStep.value} onClickStep={onClickStepService} />
                  </div>
                </div>
                {serviceStep.value === 1 ?
                  <div class={`w-[444px] ${serviceStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                    <p class="text-[42px] font-bold playfair-regular text-white">Productos</p>
                    <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[200px]`}></div>
                    <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                      En ELDCorp, ofrecemos una amplia gama de piezas de maquinaria de alta calidad para satisfacer todas tus necesidades industriales. Nuestros productos están diseñados para garantizar el máximo rendimiento y durabilidad, ayudando a optimizar la eficiencia de tus operaciones.
                    </p>
                  </div>
                  :
                  serviceStep.value === 2 ?
                    <div class={`w-[444px] ${serviceStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                      <p class="text-[42px] font-bold playfair-regular text-white">Consolidación</p>
                      <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[180px]`}></div>
                      <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                        En ELDCorp, ofrecemos servicios de consolidación para optimizar tu cadena de suministro. Nuestro equipo se encarga de reunir y combinar tus envíos de piezas de maquinaria, reduciendo costos y mejorando la eficiencia logística.
                      </p>
                    </div>
                    :
                    <div class={`w-[444px] ${serviceStep.value === 3 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 transform translate-y-0 transition-transform duration-1000`}>
                      <p class="text-[42px] font-bold playfair-regular text-white">Almacén</p>
                      <div class={`mt-1 h-[3px] mx-auto lg:mx-0 !bg-[#E29D21] w-[120px]`}></div>
                      <p class="text-white mt-8 leading-6 text-justify opensans-regular">
                        ELDCorp ofrece servicios de almacenamiento seguros y eficientes para tus piezas de maquinaria. Nuestras instalaciones están equipadas con la última tecnología en gestión de inventarios, asegurando que tus productos estén protegidos y disponibles cuando los necesites.
                      </p>
                    </div>
                }
              </div>
            </div>
          </div>

          <div class="form mt-16 px-4 sm:px-0 md:px-[90px] opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0" id="contact">
            <div>
              <div class="md:hidden">
                <TitleComponent name='CONTACT US' isLong={true} />
              </div>
              <div class="hidden md:block">
                <TitleComponent name='CONTACT US' isLong={true} />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row mt-12 space-y-8 lg:space-y-0 lg:space-x-4 items-center lg:items-start">
              <div class="w-full lg:w-auto lg:mr-8">
                <img width={590} height={450} src="/sampleformimg.jpg" class="shadow-lg w-full h-auto max-w-[590px] mx-auto"></img>
              </div>
              <div class="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
                <p class="text-4xl sm:text-5xl lg:text-[64px] font-bold playfair-bold text-white">Ponte en contacto con nosotros</p>
                <p class="text-white mt-8 leading-6 max-w-full lg:max-w-[800px] mx-auto lg:mx-0 text-justify opensans-regular">
                  Sinergiza completamente las relaciones de recursos gravosas a través de un nicho premier innovando dinámicamente en el estado del arte del servicio al cliente.
                </p>
                <div class="mt-10 flex flex-col items-center lg:items-start space-y-8">
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <PhoneIcon></PhoneIcon>
                    </div>
                    <div class="text-left mt-1">
                      <p class="text-white text-[14px] opensans-regular">¿Tienes alguna pregunta?</p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">
                        +01 569  896 654
                      </p>
                    </div>
                  </div>
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <EmailIcon></EmailIcon>
                    </div>
                    <div class="text-left mt-1">
                      <p class="text-white text-[14px] opensans-regular">Escribir correo electrónico</p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">
                        Info@whitecollar.com
                      </p>
                    </div>
                  </div>
                  <div class="w-full sm:w-[350px] flex justify-start sm:justify-start items-start mt-4">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 flex items-center justify-center">
                      <IcBaselineLocationOn></IcBaselineLocationOn>
                    </div>
                    <div class="text-left mt-1">
                      <p class="text-white text-[14px] opensans-regular">Visita en cualquier momento</p>
                      <p class="text-[#E29D21] leading-6 inter-semibold">
                        King Street,
                        Prior Lake, New York
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="mt-14 text-center text-white font-bold  text-[52px] md:text-[64px] playfair">¡Solicita una llamada!</p>
            <div class="mt-10 w-full max-w-4xl mx-auto">
              <div class="flex flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-10">
                <div class="w-full sm:w-6/12">
                  <input type="text" class="pl-4 w-full h-[50px]" placeholder='Company Name' />
                </div>
                <div class="w-full sm:w-6/12">
                  <input type="text" class="pl-4 w-full h-[50px]" placeholder='Email' />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-10 mt-8">
                <div class="w-full sm:w-6/12">
                  <input type="text" class="pl-4 w-full h-[50px]" placeholder='Phone Number' />
                </div>
                <div class="w-full sm:w-6/12">
                  <input type="text" class="pl-4 w-full h-[50px]" placeholder='Subject' />
                </div>
              </div>
              <div class="mt-8 w-full">
                <textarea class="w-full pl-4 pt-4" rows={10} placeholder='Message' />
              </div>
            </div>
            <button class="bg-[#E29D21] w-full sm:w-[232px] h-[65px] mt-8 text-black font-bold text-base sm:text-lg rounded-none mx-auto block inter-semibold hover:bg-[#d18c1a] transition-colors duration-300">Enviar</button>
          </div>

          <div class="mb-20 h-[80px]"></div>
        </div>
      </div>
    </div>
  );
})

export const head: DocumentHead = {
  title: 'ELD',
};
