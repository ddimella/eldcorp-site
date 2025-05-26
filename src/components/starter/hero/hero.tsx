import { $, QRL, QwikIntrinsicElements, component$, useSignal } from '@builder.io/qwik';
import { TitleComponent } from '~/routes';

interface StepsProps {
  selectedStep: number;
  onClickStep: QRL<(step: number) => void>;
}

const HeroSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center">
      <div onClick$={() => { onClickStep(0); }} class={`border-b cursor-pointer tex-[18px] ${selectedStep === 0 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white"} pb-10 w-[60px] text-center font-bold`}>Start</div>
      <div onClick$={() => { onClickStep(1); }} class={`border-b cursor-pointer tex-[18px] ${selectedStep === 1 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white"} pb-10 w-[60px] text-center font-bold`}>01</div>
      <div onClick$={() => { onClickStep(2); }} class={`border-b cursor-pointer tex-[18px] ${selectedStep === 2 ? "border-b-[#E29D21] text-[#E29D21] pb-10" : "border-b-white text-white"} pb-10 w-[60px] text-center font-bold`}>02</div>
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
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo" src='public/vid2.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div class={`absolute ${homeStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 w-full h-[100vh]`}>
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo2" src='public/vid1.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div class={`absolute ${homeStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-1000 w-full h-[100vh]`}>
        <video muted autoplay loop class="w-full h-[100vh] object-cover blur" id="myVideo3" src='public/samplevid3.mp4'></video>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div class={`absolute top-[30%] pl-[70px] transition-init ${homeStep.value === 0 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-500`}>
        <TitleComponent name='MÁS ALLÁ DE LOS LÍMITES' isLong={false} />
        <div class="mt-8 mb-[180px]">
          <p class="font-bold text-[88px] transition-init playfair">Horizontes Industriales</p>
          <p class="font-bold text-[88px] transition-init playfair">Desbloqueados</p>
          <button class="bg-[#E29D21] w-[232px] h-[65px] mt-10 text-black font-bold rounded-md">Ponerse en Contacto</button>
        </div>
        <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
      </div>
      <div class={`absolute top-[30%] pl-[70px] transition-init ${homeStep.value === 1 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duración-500`}>
        <TitleComponent name='MAESTRÍA MECÁNICA' isLong={false} />
        <div class="mt-8 mb-[180px]">
          <p class="font-bold text-[88px] transition-init playfair">Empoderando Industrias,</p>
          <p class="font-bold text-[88px] transition-init playfair">Forjando Alianzas</p>
          <button class="bg-[#E29D21] w-[232px] h-[65px] mt-10 text-black font-bold rounded-md">Ponerse en Contacto</button>
        </div>
        <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
      </div>
      <div class={`absolute top-[30%] pl-[70px] transition-init ${homeStep.value === 2 ? " opacity-1" : "opacity-0"} transition-opacity ease-in-out duración-500`}>
        <TitleComponent name='PROYECTOS INDUSTRIALES' isLong={false} />
        <div class="mt-8 mb-[180px]">
          <p class="font-bold text-[88px] transition-init playfair">Elevando Resultados de Proyectos</p>
          <p class="font-bold text-[88px] transition-init playfair text-transparent">_</p>
          <button class="bg-[#E29D21] w-[232px] h-[65px] mt-10 text-black font-bold rounded-md">Ponerse en Contacto</button>
        </div>
        <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
      </div>
      <div class="absolute right-[70px] top-[400px] space-y-2">
        <MdiInstagram />
        <MdiTwitter />
      </div>
    </div>
  );
});
