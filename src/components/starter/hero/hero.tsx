import { $, QRL, QwikIntrinsicElements, component$, useSignal } from '@builder.io/qwik';
import { TitleComponent } from '~/routes';

interface StepsProps {
  selectedStep: number;
  onClickStep: QRL<(step: number) => void>;
}

const HeroSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center text-base sm:text-sm md:text-base">
      <div onClick$={() => { onClickStep(0); }} class={`border-b cursor-pointer ${selectedStep === 0 ? "border-b-[#E29D21] text-[#E29D21] pb-6 sm:pb-4 md:pb-10" : "border-b-white text-white"} pb-6 sm:pb-4 md:pb-10 w-20 sm:w-12 md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>Start</div>
      <div onClick$={() => { onClickStep(1); }} class={`border-b cursor-pointer ${selectedStep === 1 ? "border-b-[#E29D21] text-[#E29D21] pb-6 sm:pb-4 md:pb-10" : "border-b-white text-white"} pb-6 sm:pb-4 md:pb-10 w-20 sm:w-12 md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>01</div>
      <div onClick$={() => { onClickStep(2); }} class={`border-b cursor-pointer ${selectedStep === 2 ? "border-b-[#E29D21] text-[#E29D21] pb-6 sm:pb-4 md:pb-10" : "border-b-white text-white"} pb-6 sm:pb-4 md:pb-10 w-20 sm:w-12 md:w-[60px] text-center font-bold inter-semibold hover:text-[#E29D21] transition-colors duration-300`}>02</div>
    </div>
  );
});

export function MdiTwitter(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 40 40" {...props} key={key}><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path></svg>
  );
}

export function MdiInstagram(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 40 40" {...props} key={key}><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
  );
}

export default component$(() => {
  const homeStep = useSignal(0);

  const onClickStep = $((step: number) => {
    homeStep.value = step;
  });

  return (
    <div class="">
      <div class={`absolute ${homeStep.value === 0 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 w-full h-[100vh]`}>
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo" src='/vid2.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
      </div>
      <div class={`absolute ${homeStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 w-full h-[100vh]`}>
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo2" src='/vid1.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
      </div>
      <div class={`absolute ${homeStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 w-full h-[100vh]`}>
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo3" src='/samplevid3.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
      </div>
      <div class={`absolute inset-0 flex flex-col justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 xl:pl-[70px] transition-init ${homeStep.value === 0 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-500`}>
        <div class="flex flex-col items-center md:items-start w-full max-w-md mx-auto md:mx-0">
          <TitleComponent name='MÁS ALLÁ DE LOS LÍMITES' isLong={false} class="text-4xl md:text-[32px] inter-bold max-w-[240px] text-center mx-auto md:mx-0 md:max-w-full" />
          <div class="mt-8 sm:mt-12 mb-8 sm:mb-12 md:mb-24 text-center md:text-left">
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular">Horizontes Industriales</p>
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular mt-4">Desbloqueados</p>
            <button class="bg-[#E29D21] w-[160px] sm:w-[200px] md:w-[232px] h-[40px] sm:h-[50px] md:h-[65px] mt-8 sm:mt-12 mb-24 text-black font-semibold text-sm sm:text-base md:text-lg inter-semibold">CONTACTO</button>
          </div>
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>
      <div class={`absolute inset-0 flex flex-col justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 xl:pl-[70px] transition-init ${homeStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-500`}>
        <div class="flex flex-col items-center md:items-start w-full max-w-md mx-auto md:mx-0">
          <TitleComponent name='MAESTRÍA MECÁNICA' isLong={false} class="text-4xl md:text-[32px] inter-bold  max-w-[240px] text-center mx-auto md:mx-0 md:max-w-full" />
          <div class="mt-8 sm:mt-12 mb-8 sm:mb-12 md:mb-24 text-center md:text-left">
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular">Empoderando Industrias,</p>
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular mt-4">Forjando Alianzas</p>
            <button class="bg-[#E29D21] w-[160px] sm:w-[200px] md:w-[232px] h-[40px] sm:h-[50px] md:h-[65px] mt-8 sm:mt-12 mb-24 text-black font-semibold text-sm sm:text-base md:text-lg inter-semibold">CONTACTO</button>
          </div>
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>
      <div class={`absolute inset-0 flex flex-col justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 xl:pl-[70px] transition-init ${homeStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-500`}>
        <div class="flex flex-col items-center md:items-start w-full max-w-md mx-auto md:mx-0">
          <TitleComponent name='PROYECTOS INDUSTRIALES' isLong={false} class="text-4xl md:text-[32px] inter-bold max-w-[240px] text-center mx-auto md:mx-0 md:max-w-full" />
          <div class="mt-8 sm:mt-12 mb-8 sm:mb-12 md:mb-24 text-center md:text-left">
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular">Elevando Resultados de Proyectos</p>
            <p class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] transition-init playfair-regular mt-4 text-transparent">_</p>
            <button class="bg-[#E29D21] w-[160px] sm:w-[200px] md:w-[232px] h-[40px] sm:h-[50px] md:h-[65px] mt-8 sm:mt-12 mb-24 text-black font-semibold text-sm sm:text-base md:text-lg inter-semibold">CONTACTO</button>
          </div>
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>
      <div class="absolute right-4 sm:right-8 md:right-16 lg:right-[70px] top-1/2 -translate-y-1/2 space-y-1 sm:space-y-2 hidden md:block">
        <MdiInstagram class="w-6 h-6 sm:w-12 sm:h-12" />
        <MdiTwitter class="w-6 h-6 sm:w-12 sm:h-12" />
      </div>
      <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-6 md:hidden">
        <MdiInstagram class="w-10 h-10" />
        <MdiTwitter class="w-10 h-10" />
      </div>
    </div>
  );
});
