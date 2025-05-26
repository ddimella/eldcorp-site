import { $, QRL, QwikIntrinsicElements, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';


interface StepsProps {
  selectedStep: number
  onClickStep: QRL<(step: number) => void>;
}

const Steps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center">
      <div onClick$={() => { onClickStep(1) }} class={`border-b cursor-pointer tex-[18px] ${selectedStep === 1 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white"}  pb-10 w-[60px] text-center font-bold`}>01</div>
      <div onClick$={() => { onClickStep(2) }} class={`border-b cursor-pointer  tex-[18px] ${selectedStep === 2 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white "} pb-10 w-[60px] text-center font-bold`}>02</div>
      <div onClick$={() => { onClickStep(3) }} class={`border-b cursor-pointer  tex-[18px] ${selectedStep === 3 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white "} pb-10 w-[60px] text-center font-bold`}>03</div>
    </div>
  )
})

export const TitleComponent = component$(({ name, isLong }: { name: string, isLong: boolean }) => {
  return (
    <div class="flex items-center">
      <div class={`h-[3px] mr-6 !bg-[#E29D21] ${isLong ? " w-[305px]" : " w-[72px]"}`}></div>
      <p class="uppercase text-[#E29D21] text-[18px] font-bold tracking-[6px]">{name}</p>
    </div>
  )
})

export function PhoneIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
  )
}

export function EmailIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
  )
}

export function IcBaselineLocationOn(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props} key={key}><path fill="black" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path></svg>
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

  return (
    <>
      <Hero />

      <div class="pt-[910px]">
        <div class="flex items-center justify-around px-[250px] counters h-[225px] w-full bg-white">
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">8k</p>
            <p class="text-[#111827] text-[24px] font-bold">Ítems</p>
            <p class="text-[#111827] text-[24px] font-bold">suministrados</p>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">12k+</p>
            <p class="text-[#111827] text-[24px] font-bold">Libras </p>
            <p class="text-[#111827] text-[24px] font-bold"> despachadas</p>
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">16</p>
            <p class="text-[#111827] text-[24px] font-bold">Pies cúbicos</p>
            <p class="text-[#111827] text-[24px] font-bold">despachados</p>
            {/* <p class="text-[#111827] text-[24px] font-bold">despachados</p> */}
          </div>
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">21+</p>
            <p class="text-[#111827] text-[24px] font-bold">Clientes confían</p>
            <p class="text-[#111827] text-[24px] font-bold">en nosotros</p>
          </div>
        </div>

        <div class="container h-[420px]">

          <div id="about" class="flex space-x-10 mt-24 px-[90px]">
            <div>
              <TitleComponent name='SOBRE NOSOTROS' isLong={false} />
              <div class="leading-6 mt-20 text-[16px] text-black font-bold p-14 pt-10 h-[297px] w-[370px] bg-[#E29D21]">
                Desarrollo pionero y comercio global desde Puerto Ordaz, Venezuela. Mezclamos herencia con innovación, forjando conexiones duraderas y redefiniendo los estándares de la industria para un futuro más brillante.
              </div>
            </div>
            <div>
              <p class="text-[64px] font-bold playfair">¿Por qué Nosotros?</p>
              <p class="leading-6 w-[800px] mt-6">
                En ELD, no somos solo una empresa; somos un legado de innovación y confianza. Con más de 19 años de experiencia en Desarrollo, Evaluación de Proyectos y Comercio Internacional, somos su socio ideal para la excelencia. Desde nuestras raíces en Puerto Ordaz, Venezuela, hemos crecido para convertirnos en representantes exclusivos de empresas estadounidenses, sirviendo a todo el territorio venezolano y expandiéndonos internacionalmente con ELD CORP.
              </p>
              <p class="mt-5 font-bold text-[#E29D21]">
                Elija nuestra experiencia incomparable y compromiso inquebrantable.
              </p>
              <div class="flex mt-12 space-x-14 justify-around">
                <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold text-center rounded-md">
                  <div class="flex justify-center">
                    <Globe />
                  </div>
                  <p class="mt-4">Alcance Global</p>
                </div>
                <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold flex-col text-center rounded-md">
                  <div class="flex justify-center">
                    <MdiTools />
                  </div>
                  <p class="mt-4">Experiencia</p>
                </div>
                <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold text-center rounded-md">
                  <div class="flex justify-center">
                    <Handshake />
                  </div>
                  <p class="mt-4">Asociaciones de Confianza</p>
                </div>
              </div>
            </div>
          </div>

          <div id="work" class="mt-24 px-[90px]">
            <TitleComponent name='TRABAJOS SELECCIONADOS' isLong={true} />
            <div class="mt-10">
              <p class="text-white font-bold text-[64px] playfair">Nuestro Trabajo</p>
              <p class="text-[16px] text-white w-[1171px] mt-5 leading-6">
                Explora una muestra de nuestros esfuerzos pasados. A través de una combinación de tradición e innovación, cada proyecto ejemplifica nuestra dedicación a la excelencia, dejando una marca duradera en industrias de todo el mundo.
              </p>
            </div>
            <div class="flex mt-16">
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
                  <Steps selectedStep={workStep.value} onClickStep={onClickStepWork} />
                </div>
              </div>
            </div>
          </div>


          {/* EXPERTS SECTION */}
          <div class="experts px-[90px] mt-24">
            <div>
              <TitleComponent name='Testimonials' isLong={false} />
            </div>
            <div class="services px-[90px] mt-10">
              <p class="text-white font-bold text-[64px] text-center playfair">Testimoniales</p>
              <section class="py-10">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div class="flex flex-col items-center">
                    <div class="text-center">
                      <h2 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">Nuestros clientes de confianza dicen sobre nosotros</h2>
                    </div>

                    <div class="relative mt-10 md:mt-24 md:order-2">
                      <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                        <div class="w-full h-full max-w-16xl mx-auto rounded-3xl opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #E29D21 -0.55%, #E29D21 22.86%, #E29D21 48.36%, #E29D21 73.33%, #E29D21 99.34%)"></div>
                      </div>

                      <div class="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
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
                                <p class="text-lg leading-relaxed text-gray-900 font-pj">“
                                  ELDCorp realmente transformó nuestras operaciones logísticas. Su experiencia y dedicación nos ayudaron a optimizar procesos, ahorrando tiempo y recursos.
                                </p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj">CEO</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600">Chevron, U.S.A</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
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
                                <p class="text-lg leading-relaxed text-gray-900 font-pj">“
                                  Trabajar con ELDCorp fue un cambio de juego para nuestra expansión internacional. Sus soluciones a medida y enfoque proactivo superaron nuestras expectativas
                                  ”</p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj">Head of Management</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600">TechCrunch, Germany</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col overflow-hidden shadow-xl">
                          <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
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
                                <p class="text-lg leading-relaxed text-gray-900 font-pj">“
                                  El compromiso de ELDCorp con la excelencia es incomparable. Entregaron soluciones innovadoras con profesionalismo y eficiencia, impulsando nuestro negocio hacia adelante.
                                  ”</p>
                              </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                              <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                              <div class="ml-4">
                                <p class="text-base font-bold text-gray-900 font-pj">Human Resources Manager</p>
                                <p class="mt-0.5 text-sm font-pj text-gray-600">STAR, Argentina</p>
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

          {/* EXPERTS SECTION */}
          <div id="services" class="px-[90px] mt-24">
            <div>
              <TitleComponent name='WHAT WE OFFER' isLong={true} />
            </div>
            <div class="services  mt-10">
              <p class="text-left text-white font-bold text-[64px] playfair">Nuestros servicios</p>
              <p class="text-white mt-8 leading-6">
                Descubre nuestra gama de servicios diseñados para satisfacer las necesidades de tu negocio. Con una combinación de experiencia tradicional y soluciones innovadoras, estamos dedicados a ofrecer excelencia y generar un impacto significativo en diferentes industrias.
              </p>
              <div class="flex mt-12 space-x-12">
                <div class="relative w-[780px] h-[340px]">
                  {serviceStep.value === 1 ?
                    <img src="public/serviceproducts.png" class={``} alt="" />
                    :
                    serviceStep.value === 2 ?
                      <img src="public/serviceconsolidation.png" class={``} alt="" />
                      :
                      <img src="public/servicealmacen.png" class={``} alt="" />
                  }
                  <div class="absolute bottom-12 left-8">
                    <Steps selectedStep={serviceStep.value} onClickStep={onClickStepService} />
                  </div>
                </div>
                {serviceStep.value === 1 ?
                  <div class="w-[444px]">
                    <p class="text-[42px] font-bold playfair">Productos</p>
                    <p class="text-white mt-8 leading-6">
                      En ELDCorp, ofrecemos una amplia gama de piezas de maquinaria de alta calidad para satisfacer todas tus necesidades industriales. Nuestros productos están diseñados para garantizar el máximo rendimiento y durabilidad, ayudando a optimizar la eficiencia de tus operaciones.

                    </p>
                    <button class="bg-[#E29D21] w-[232px] h-[65px] mt-16 text-black font-bold rounded-md"> Ponte en contacto</button>
                  </div>
                  :
                  serviceStep.value === 2 ?
                    <div class="w-[444px]">
                      <p class="text-[42px] font-bold playfair">Consolidación</p>
                      <p class="text-white mt-8 leading-6">
                        En ELDCorp, ofrecemos servicios de consolidación para optimizar tu cadena de suministro. Nuestro equipo se encarga de reunir y combinar tus envíos de piezas de maquinaria, reduciendo costos y mejorando la eficiencia logística.
                      </p>
                      <button class="bg-[#E29D21] w-[232px] h-[65px] mt-16 text-black font-bold rounded-md">Ponte en contacto</button>
                    </div>
                    :
                    <div class="w-[444px]">
                      <p class="text-[42px] font-bold playfair">Almacén</p>
                      <p class="text-white mt-8 leading-6">
                        ELDCorp ofrece servicios de almacenamiento seguros y eficientes para tus piezas de maquinaria. Nuestras instalaciones están equipadas con la última tecnología en gestión de inventarios, asegurando que tus productos estén protegidos y disponibles cuando los necesites.
                      </p>
                      <button class="bg-[#E29D21] w-[232px] h-[65px] mt-16 text-black font-bold rounded-md">Ponte en contacto</button>
                    </div>
                }
              </div>
            </div>
          </div>

          <div class="form px-[90px] mt-24" id="contact">
            <div>
              <TitleComponent name='CONTACT US' isLong={true} />
            </div>
            <div class="flex mt-12 space-x-4">
              <div class="mr-8">
                <img width={590} height={450} src="public/sampleformimg.jpg" class=""></img>
              </div>
              <div class="flex-col w-1/2">
                <p class="text-left text-white font-bold text-[64px] playfair">Ponte en contacto con nosotros</p>
                <p class="text-white mt-8 leading-6">
                  Sinergiza completamente las relaciones de recursos gravosas a través de un nicho premier innovando dinámicamente en el estado del arte del servicio al cliente.
                </p>
                <div class="mt-10">
                  <div class="w-[350px] flex justify-start mt-8">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 px-2 py-2">
                      <PhoneIcon></PhoneIcon>
                    </div>
                    <div class="mt-2">
                      <p class="text-left text-white text-[14px]">¿Tienes alguna pregunta?</p>
                      <p class="text-[#E29D21] leading-6">
                        +01 569  896 654
                      </p>
                    </div>
                  </div>
                  <div class="w-[350px] flex justify-start mt-8">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 px-2 py-2">
                      <EmailIcon></EmailIcon>
                    </div>
                    <div class="mt-2">
                      <p class="text-left text-white text-[14px]">Escribir correo electrónico</p>
                      <p class="text-[#E29D21] leading-6">
                        Info@whitecollar.com
                      </p>
                    </div>
                  </div>
                  <div class="w-[350px] flex justify-start mt-8">
                    <div class="bg-white rounded-full mr-4 h-12 w-12 px-2 py-2">
                      <IcBaselineLocationOn></IcBaselineLocationOn>
                    </div>
                    <div class="mt-2">
                      <p class="text-left text-white text-[14px]">Visita en cualquier momento</p>
                      <p class="text-[#E29D21] leading-6">
                        King Street,
                        Prior Lake, New York
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="mt-14 text-center text-white font-bold text-[64px] playfair">¡Solicita una devolución de llamada!</p>
            <div class="mt-10">
              <div class="flex w-full space-x-10">
                <div class="w-6/12">
                  <input type="text" class="pl-4 rounded-md w-full h-[50px]" placeholder='Company Name' />
                </div>
                <div class="w-6/12">
                  <input type="text" class="pl-4 rounded-md w-full h-[50px]" placeholder='Email' />
                </div>
              </div>
              <div class="flex w-full space-x-10 mt-8">
                <div class="w-6/12">
                  <input type="text" class="pl-4 rounded-md w-full h-[50px]" placeholder='Phone Number' />
                </div>
                <div class="w-6/12">
                  <input type="text" class="pl-4 rounded-md w-full h-[50px]" placeholder='Subject' />
                </div>
              </div>
              <div class="mt-8 w-full">
                <textarea class="rounded-md w-full pl-4 pt-4" rows={10} placeholder='Message' />
              </div>
            </div>
            <button class="bg-[#E29D21] w-[232px] h-[65px] mt-8 text-black font-bold rounded-md">Enviar</button>
          </div>

          <div class="mb-20 h-[80px]"></div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'ELD',
};
