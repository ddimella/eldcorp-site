import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { QRL, QwikIntrinsicElements } from "@builder.io/qwik";
import { TitleComponent } from "~/routes";
import { t } from "~/i18n";

interface StepsProps {
  selectedStep: number;
  onClickStep: QRL<(step: number) => void>;
}

const HeroSteps = component$<StepsProps>(({ selectedStep, onClickStep }) => {
  return (
    <div class="flex items-center">
      <div
        onClick$={() => {
          onClickStep(0);
        }}
        class={`border-b cursor-pointer text-[16px] md:text-[18px] ${
          selectedStep === 0
            ? "border-b-[#F5B324] text-[#F5B324] pb-2 md:pb-3"
            : "border-b-white/40 text-white/70 pb-2 md:pb-3"
        } w-[60px] text-center font-bold inter-semibold hover:text-[#F5B324] hover:border-b-[#F5B324] transition-colors duration-300`}
      >
        {t("hero.steps.start")}
      </div>
      <div
        onClick$={() => {
          onClickStep(1);
        }}
        class={`border-b cursor-pointer text-[16px] md:text-[18px] ${
          selectedStep === 1
            ? "border-b-[#F5B324] text-[#F5B324] pb-2 md:pb-3"
            : "border-b-white/40 text-white/70 pb-2 md:pb-3"
        } w-[60px] text-center font-bold inter-semibold hover:text-[#F5B324] hover:border-b-[#F5B324] transition-colors duration-300`}
      >
        01
      </div>
      <div
        onClick$={() => {
          onClickStep(2);
        }}
        class={`border-b cursor-pointer text-[16px] md:text-[18px] ${
          selectedStep === 2
            ? "border-b-[#F5B324] text-[#F5B324] pb-2 md:pb-3"
            : "border-b-white/40 text-white/70 pb-2 md:pb-3"
        } w-[60px] text-center font-bold inter-semibold hover:text-[#F5B324] hover:border-b-[#F5B324] transition-colors duration-300`}
      >
        02
      </div>
    </div>
  );
});

export function MdiInstagram(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      height="36px"
      viewBox="2 2 20 20"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      ></path>
    </svg>
  );
}

export function MdiWhatsapp(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      height="36px"
      viewBox="1 1 22 22"
      fill="none"
      {...props}
      key={key}
    >
      <path
        d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
        fill="currentColor"
      />
    </svg>
  );
}

// WhatsApp number placeholder — replace with the client's real number (international format, no +).
const WHATSAPP_LINK = "https://wa.me/13055555555";
const INSTAGRAM_LINK = "https://instagram.com/eldcorp";
const CONTACT_EMAIL = "eldcorp@gmail.com";
const ADVISOR_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hablar con un asesor - ELD Corp")}&body=${encodeURIComponent("Hola, me gustaría hablar con un asesor para recibir más información.")}`;

export default component$(() => {
  const homeStep = useSignal(0);
  // pause autoplay on user interaction (e.g. when they manually click a step)
  const paused = useSignal(false);

  const onClickStep = $((step: number) => {
    homeStep.value = step;
    // brief pause after manual interaction so the user can read
    paused.value = true;
    window.setTimeout(() => {
      paused.value = false;
    }, 8000);
  });

  // Auto-advance the hero carousel every 6 seconds
  useVisibleTask$(() => {
    if (typeof window === "undefined") return;
    const interval = window.setInterval(() => {
      if (paused.value) return;
      homeStep.value = (homeStep.value + 1) % 3;
    }, 6000);
    return () => window.clearInterval(interval);
  });

  const slides = [
    {
      image: "/banner1.png",
      active: homeStep.value === 0,
    },
    {
      image: "/banner3.png",
      active: homeStep.value === 1,
    },
    {
      image: "/banner2.png",
      active: homeStep.value === 2,
    },
  ];

  return (
    <div class="absolute top-0 left-0 w-full h-[100vh] overflow-hidden">
      {/* Background hero images (composite banners) */}
      {slides.map((slide, idx) => (
        <div
          key={`bg-${idx}`}
          class={`absolute inset-0 w-full h-full transition-opacity ease-in-out duration-1000 ${
            slide.active ? "opacity-1" : "opacity-0"
          }`}
          aria-hidden={!slide.active}
        >
          <img
            src={slide.image}
            alt=""
            class="w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          {/* Vertical overlay — keeps bottom/top legibility */}
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/75"></div>
          {/* Lateral overlay — darkens left side where the copy lives */}
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* === Slide 0 — Mobile === */}
      <div
        class={`absolute inset-0 flex flex-col justify-center items-center md:hidden transition-init px-6 ${
          homeStep.value === 0 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="flex flex-col items-center w-full max-w-md mx-auto text-center pb-16">
          <TitleComponent
            name={t("hero.ribbon")}
            isLong={true}
            class="text-2xl inter-bold max-w-[280px] text-center mx-auto"
          />
          <p class="mt-6 text-4xl sm:text-5xl inter-extrabold leading-tight">
            {t("hero.title.line1")}
          </p>
          <p class="mt-1 text-4xl sm:text-5xl inter-extrabold leading-tight">
            {t("hero.title.line2")}
          </p>
          <p class="mt-4 text-sm sm:text-base text-white/85 leading-relaxed inter-semibold">
            {t("hero.subtitle.list")}
          </p>
          <div class="mt-6 flex flex-col gap-3 items-center w-full">
            <a
              href="#contact"
              class="bg-[#F5B324] w-full max-w-[260px] h-[50px] flex items-center justify-center text-black font-bold text-base inter-bold rounded-md hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta")}
            </a>
            <a
              href={ADVISOR_MAILTO}
              class="border-2 border-[#F5B324] w-full max-w-[260px] h-[50px] flex items-center justify-center text-[#F5B324] font-bold text-base inter-bold rounded-md hover:bg-[#F5B324] hover:text-black hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.35)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </a>
          </div>
          <div class="mt-12">
            <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
          </div>
        </div>
      </div>

      {/* === Slide 0 — Desktop === */}
      <div
        class={`absolute top-[26vh] left-0 right-0 hidden md:block transition-init pl-[40px] pr-[40px] ${
          homeStep.value === 0 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="max-w-[1100px]">
          <TitleComponent name={t("hero.ribbon")} isLong={true} />
          <p class="mt-6 text-[58px] lg:text-[72px] xl:text-[84px] inter-extrabold leading-[1.05] transition-init">
            {t("hero.title.line1")}
          </p>
          <p class="text-[58px] lg:text-[72px] xl:text-[84px] inter-extrabold leading-[1.05] transition-init">
            {t("hero.title.line2")}
          </p>
          <p class="mt-5 max-w-[760px] text-[15px] lg:text-[16px] xl:text-[18px] text-white/85 leading-relaxed inter-semibold">
            {t("hero.subtitle.list")}
          </p>
          <div class="mt-7 flex gap-4">
            <a
              href="#contact"
              class="bg-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-black font-bold rounded-md inter-bold hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.long")}
            </a>
            <a
              href={ADVISOR_MAILTO}
              class="border-2 border-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-[#F5B324] font-bold rounded-md inter-bold hover:bg-[#F5B324] hover:text-black hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.35)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>
        <div class="mt-16">
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>

      {/* === Slide 1 — Mobile === */}
      <div
        class={`absolute inset-0 flex flex-col justify-center items-center md:hidden transition-init px-6 ${
          homeStep.value === 1 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="flex flex-col items-center w-full max-w-md mx-auto text-center pb-16">
          <TitleComponent
            name={t("hero.slide1.ribbon")}
            isLong={false}
            class="text-2xl inter-bold max-w-[280px] text-center mx-auto"
          />
          <p class="mt-6 text-3xl sm:text-4xl inter-extrabold leading-tight">
            {t("hero.subtitle")}
          </p>
          <a
            href="#contact"
            class="mt-8 bg-[#F5B324] w-full max-w-[260px] h-[50px] flex items-center justify-center text-black font-bold inter-bold rounded-md hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
          >
            {t("hero.cta")}
          </a>
          <div class="mt-8">
            <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
          </div>
        </div>
      </div>

      {/* === Slide 1 — Desktop === */}
      <div
        class={`absolute top-[28vh] left-0 right-0 hidden md:block transition-init pl-[40px] pr-[40px] ${
          homeStep.value === 1 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="max-w-[1100px]">
          <TitleComponent name={t("hero.slide1.ribbon")} isLong={false} />
          <p class="mt-6 text-[58px] lg:text-[72px] xl:text-[84px] font-bold inter-extrabold leading-[1.05]">
            {t("hero.subtitle")}
          </p>
          <div class="mt-7 flex gap-4">
            <a
              href="#contact"
              class="bg-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-black font-bold rounded-md inter-bold hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.long")}
            </a>
            <a
              href={ADVISOR_MAILTO}
              class="border-2 border-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-[#F5B324] font-bold rounded-md inter-bold hover:bg-[#F5B324] hover:text-black hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.35)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>
        <div class="mt-16">
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>

      {/* === Slide 2 — Mobile === */}
      <div
        class={`absolute inset-0 flex flex-col justify-center items-center md:hidden transition-init px-6 ${
          homeStep.value === 2 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="flex flex-col items-center w-full max-w-md mx-auto text-center pb-16">
          <TitleComponent
            name={t("hero.slide2.ribbon")}
            isLong={false}
            class="text-2xl inter-bold max-w-[280px] text-center mx-auto"
          />
          <p class="mt-6 text-3xl sm:text-4xl inter-extrabold leading-tight">
            {t("hero.experience")}
          </p>
          <a
            href="#contact"
            class="mt-8 bg-[#F5B324] w-full max-w-[260px] h-[50px] flex items-center justify-center text-black font-bold inter-bold rounded-md hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
          >
            {t("hero.cta")}
          </a>
          <div class="mt-8">
            <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
          </div>
        </div>
      </div>

      {/* === Slide 2 — Desktop === */}
      <div
        class={`absolute top-[28vh] left-0 right-0 hidden md:block transition-init pl-[40px] pr-[40px] ${
          homeStep.value === 2 ? "opacity-1" : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-500`}
      >
        <div class="max-w-[1100px]">
          <TitleComponent name={t("hero.slide2.ribbon")} isLong={false} />
          <p class="mt-6 text-[58px] lg:text-[72px] xl:text-[84px] font-bold inter-extrabold leading-[1.05]">
            {t("hero.experience")}
          </p>
          <div class="mt-7 flex gap-4">
            <a
              href="#contact"
              class="bg-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-black font-bold rounded-md inter-bold hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.long")}
            </a>
            <a
              href={ADVISOR_MAILTO}
              class="border-2 border-[#F5B324] w-[220px] h-[58px] flex items-center justify-center text-[#F5B324] font-bold rounded-md inter-bold hover:bg-[#F5B324] hover:text-black hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.35)] active:scale-95 transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>
        <div class="mt-16">
          <HeroSteps selectedStep={homeStep.value} onClickStep={onClickStep} />
        </div>
      </div>

      {/* Social icons: Instagram + WhatsApp (desktop) — vertically centered on title block */}
      <div class="absolute right-[40px] top-[26vh] h-[260px] hidden md:flex flex-col items-end justify-center gap-5 z-10">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-[#F5B324] transition-colors"
          aria-label="Instagram"
        >
          <MdiInstagram />
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-[#F5B324] transition-colors"
          aria-label="WhatsApp"
        >
          <MdiWhatsapp />
        </a>
      </div>

      {/* Social icons (mobile) */}
      <div class="absolute top-[24px] right-[24px] flex flex-col gap-2 md:hidden z-10">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
          aria-label="Instagram"
        >
          <MdiInstagram class="w-8 h-8" />
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
          aria-label="WhatsApp"
        >
          <MdiWhatsapp class="w-8 h-8" />
        </a>
      </div>
    </div>
  );
});
