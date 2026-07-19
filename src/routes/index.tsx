import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { QRL, QwikIntrinsicElements } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
import { t } from "~/i18n";

/* ============================================================
 * Shared constants
 * ============================================================ */

// Placeholder WhatsApp number — replace with client's real number (international format, no +).
const WHATSAPP_LINK = "https://wa.me/13055555555";
const WHATSAPP_DISPLAY = "+1 305 555 5555";
const CONTACT_EMAIL = "eldcorp@gmail.com";

/* ============================================================
 * Number formatting helpers
 * ============================================================ */

const formatNumber = (value: number, decimals = 0): string => {
  const f = new Intl.NumberFormat("es", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return f.format(value);
};

/* ============================================================
 * Reusable stepper (used by the services carousel)
 * ============================================================ */

interface StepperProps {
  total: number;
  selectedStep: number;
  onClickStep: QRL<(step: number) => void>;
  labels?: string[];
}

const MobileStepper = component$<StepperProps>(
  ({ total, selectedStep, onClickStep, labels }) => {
    return (
      <div class="flex items-center justify-center md:hidden">
        {Array.from({ length: total }).map((_, i) => {
          const label = labels && labels[i] ? labels[i] : String(i + 1).padStart(2, "0");
          return (
            <div
              key={`m-step-${i}`}
              onClick$={() => onClickStep(i + 1)}
              class={`border-b cursor-pointer text-[18px] ${
                selectedStep === i + 1
                  ? "border-b-[#F5B324] text-[#F5B324] pb-2"
                  : "border-b-white/40 text-white/70 pb-2"
              } w-[70px] text-center font-bold inter-semibold hover:text-[#F5B324] hover:border-b-[#F5B324] transition-colors duration-300`}
            >
              {label}
            </div>
          );
        })}
      </div>
    );
  }
);

const DesktopStepper = component$<StepperProps>(
  ({ total, selectedStep, onClickStep, labels }) => {
    return (
      <div class="hidden md:flex items-center">
        {Array.from({ length: total }).map((_, i) => {
          const label = labels && labels[i] ? labels[i] : String(i + 1).padStart(2, "0");
          return (
            <div
              key={`d-step-${i}`}
              onClick$={() => onClickStep(i + 1)}
              class={`border-b cursor-pointer text-[18px] ${
                selectedStep === i + 1
                  ? "border-b-[#F5B324] text-[#F5B324] pb-2"
                  : "border-b-white/40 text-white/70 pb-2"
              } w-[70px] text-center font-bold inter-semibold hover:text-[#F5B324] hover:border-b-[#F5B324] transition-colors duration-300`}
            >
              {label}
            </div>
          );
        })}
      </div>
    );
  }
);

/* ============================================================
 * Counters (mobile)
 * ============================================================ */

const MobileCounters = component$(() => {
  const cards = [
    { value: formatNumber(106120), label1: t("counters.items.label1"), label2: t("counters.items.label2") },
    { value: formatNumber(129258.25, 2), label1: t("counters.weight.label1"), label2: t("counters.weight.label2") },
    { value: formatNumber(9650.73, 2), label1: t("counters.volume.label1"), label2: t("counters.volume.label2") },
    { value: "130+", label1: t("counters.clients.label1"), label2: t("counters.clients.label2") },
  ];
  return (
    <div class="flex flex-col items-center justify-center space-y-6 py-8 px-6 md:hidden">
      {cards.map((c, i) => (
        <div
          key={i}
          class="bg-white shadow-lg p-6 w-full max-w-[280px] flex opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in"
          style={`transition-delay: ${i * 0.1}s`}
        >
          <div class="h-full w-1 bg-[#F5B324] mr-4"></div>
          <div class="text-left">
            <p class="text-[#111827] text-3xl font-bold inter-bold tabular-nums">{c.value}</p>
            <p class="text-[#111827] text-base font-bold inter-semibold leading-tight">{c.label1}</p>
            <p class="text-[#111827] text-base font-bold inter-semibold leading-tight">{c.label2}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

/* ============================================================
 * Title section component
 * ============================================================ */

export const TitleComponent = component$(
  ({
    name,
    isLong,
    class: customClass,
  }: {
    name: string;
    isLong: boolean;
    class?: string;
  }) => {
    return (
      <>
        {/* Mobile View */}
        <div class="flex flex-col items-center md:items-start md:hidden">
          <p
            class={`uppercase text-[#F5B324] text-[16px] sm:text-[18px] font-bold tracking-[3px] mb-2 mt-12 ${
              customClass || ""
            } inter-bold`}
          >
            {name}
          </p>
          <div
            class={`h-[3px] mt-2 !bg-[#F5B324] ${
              isLong ? "w-[140px] sm:w-[220px]" : "w-[50px] sm:w-[60px]"
            }`}
          ></div>
        </div>

        {/* Desktop View */}
        <div class="hidden md:flex items-center mt-12">
          <div
            class={`h-[3px] mr-6 !bg-[#F5B324] ${isLong ? "w-[260px]" : "w-[72px]"}`}
          ></div>
          <p
            class={`uppercase text-[#F5B324] text-[16px] md:text-[18px] font-bold tracking-[6px] ${
              customClass || ""
            } inter-bold`}
          >
            {name}
          </p>
        </div>
      </>
    );
  }
);

/* ============================================================
 * Icons
 * ============================================================ */

export function PhoneIcon(props: QwikIntrinsicElements["svg"], key: string) {
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

export function EmailIcon(props: QwikIntrinsicElements["svg"], key: string) {
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

export function ClockIcon(props: QwikIntrinsicElements["svg"], key: string) {
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
        d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.3 2.5z"
      ></path>
    </svg>
  );
}

export function IcBaselineLocationOn(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
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

export function MdiTools(props: QwikIntrinsicElements["svg"], key: string) {
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

export function Globe(props: QwikIntrinsicElements["svg"], key: string) {
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

export function Handshake(props: QwikIntrinsicElements["svg"], key: string) {
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

/* ============================================================
 * Services carousel data
 * ============================================================ */

interface ServiceSlide {
  num: string;
  image: string;
  titleKey: string;
  textKey: string;
}

const serviceSlides: ServiceSlide[] = [
  { num: "01", image: "/serviceproducts.jpeg", titleKey: "services.carousel.1.title", textKey: "services.carousel.1.text" },
  { num: "02", image: "/serviceconsolidation.jpeg", titleKey: "services.carousel.2.title", textKey: "services.carousel.2.text" },
  { num: "03", image: "/servicealmacen.jpeg", titleKey: "services.carousel.3.title", textKey: "services.carousel.3.text" },
];

/* ============================================================
 * Main page
 * ============================================================ */

export default component$(() => {
  const serviceStep = useSignal(1);
  const productIndex = useSignal(0);

  const productLogos = [
    "/productLogo1.png",
    "/productLogo2.png",
    "/productLogo3.png",
    "/productLogo4.png",
    "/productLogo5.png",
    "/productLogo6.png",
    "/productLogo7.png",
    "/productLogo8.png",
    "/productLogo9.png",
    "/productLogo10.png",
    "/productLogo11.png",
  ];

  const onClickStepService = $((step: number) => {
    serviceStep.value = step;
  });

  // Mobile fade-in animation observer + automatic product carousel
  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".mobile-fade-in");
    elements.forEach((el) => observer.observe(el));

    // Automatic horizontal carousel: advance one logo at a time (5 logos per slide)
    const interval = window.setInterval(() => {
      productIndex.value = (productIndex.value + 1) % productLogos.length;
    }, 5000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.clearInterval(interval);
    };
  });

  return (
    <div>
      <Hero />
      <div class="pt-[100svh]">
        {/* ====================== COUNTERS (desktop) ====================== */}
        <div class="hidden md:flex flex-col sm:flex-row items-center justify-around counters min-h-[225px] w-full bg-white py-8 md:rounded-none shadow-lg md:px-[40px] mx-auto">
          <div class="border-l-4 pl-5 border-l-[#F5B324] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#F5B324] mr-4"></div>
              <div>
                <p class="text-[#111827] text-3xl sm:text-4xl lg:text-[44px] font-bold inter-bold tabular-nums">
                  {formatNumber(106120)}
                </p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.items.label1")}
                </p>
                <p class="text-[#111827] text-lg sm:text-xl lg:text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.items.label2")}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#F5B324] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#F5B324] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[44px] font-bold inter-bold tabular-nums">
                  {formatNumber(129258.25, 2)}
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.weight.label1")}
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.weight.label2")}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#F5B324] mb-4 sm:mb-0 text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#F5B324] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[44px] font-bold inter-bold tabular-nums">
                  {formatNumber(9650.73, 2)}
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.volume.label1")}
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.volume.label2")}
                </p>
              </div>
            </div>
          </div>
          <div class="border-l-4 pl-5 border-l-[#F5B324] text-center sm:text-left">
            <div class="flex items-start">
              <div class="h-full w-1 bg-[#F5B324] mr-4"></div>
              <div>
                <p class="text-[#111827] text-[44px] font-bold inter-bold tabular-nums">
                  130+
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.clients.label1")}
                </p>
                <p class="text-[#111827] text-[22px] font-bold inter-semibold leading-tight">
                  {t("counters.clients.label2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MobileCounters />

        <div class="md:container mx-auto md:mt-8 px-6 md:px-[40px] flex flex-col items-center">
          {/* ====================== ABOUT / WHY US ====================== */}
          <div
            id="about"
            class="w-full flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10 mt-8 opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            <div class="w-full lg:w-auto">
              <TitleComponent name={t("about.ribbon")} isLong={true} />
              <div class="leading-6 mt-8 text-[16px] text-black p-8 sm:p-10 md:p-12 pt-10 bg-[#F5B324] shadow-lg max-w-full lg:max-w-[420px] mx-auto ml-0 text-justify opensans-regular">
                {t("about.text")}
              </div>
            </div>
            <div class="w-full lg:w-auto lg:flex-1">
              <p class="text-white font-bold text-[40px] sm:text-[48px] lg:text-[60px] leading-tight playfair">
                {t("why.title")}
              </p>
              <ul class="leading-6 mt-6 text-white text-left max-w-full lg:max-w-[800px] mx-auto lg:mx-0 opensans-regular list-disc pl-5 space-y-2 text-[15px] sm:text-[16px]">
                <li>{t("why.point1")}</li>
                <li>{t("why.point2")}</li>
                <li>{t("why.point3")}</li>
                <li>{t("why.point4")}</li>
                <li>{t("why.point5")}</li>
                <li>{t("why.point6")}</li>
              </ul>
              <div class="flex flex-col md:flex-row mt-10 gap-6 items-center md:justify-start md:items-start">
                <div class="rounded-md pt-4 why-us h-[160px] w-[160px] bg-white text-[16px] text-[#0E1B1B] inter-semibold text-center shadow-lg">
                  <div class="flex justify-center">
                    <Globe class="w-[60px] h-[60px]" />
                  </div>
                  <p class="mt-3 inter-semibold leading-tight px-2">{t("why.card1.title")}</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[160px] w-[160px] bg-white text-[16px] text-[#0E1B1B] inter-semibold text-center shadow-lg">
                  <div class="flex justify-center">
                    <MdiTools class="w-[60px] h-[60px]" />
                  </div>
                  <p class="mt-3 inter-semibold leading-tight px-2">{t("why.card2.title")}</p>
                </div>
                <div class="rounded-md pt-4 why-us h-[160px] w-[160px] bg-white text-[16px] text-[#0E1B1B] inter-semibold text-center shadow-lg">
                  <div class="flex justify-center">
                    <Handshake class="w-[60px] h-[60px]" />
                  </div>
                  <p class="mt-3 inter-semibold leading-tight px-2">{t("why.card3.title")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ====================== SERVICES (with carousel) ====================== */}
          <div
            id="services"
            class="w-full mt-16 opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            <div class="md:hidden">
              <TitleComponent name={t("services.ribbon.mobile")} isLong={true} />
            </div>
            <div class="hidden md:block">
              <TitleComponent name={t("services.ribbon.desktop")} isLong={true} />
            </div>
            <div class="mt-8 text-left">
              <p class="text-white font-bold text-[40px] sm:text-[48px] lg:text-[60px] playfair">
                {t("services.title")}
              </p>
              <p class="text-[15px] sm:text-[16px] text-white mt-5 leading-6 max-w-full lg:max-w-[900px] mx-auto lg:mx-0 text-justify opensans-regular">
                {t("services.intro")}
              </p>
            </div>

            {/* Mobile carousel — stacked layout */}
            <div class="mt-10 md:hidden">
              <div class="relative w-full">
                {serviceSlides.map((slide, idx) => (
                  <div
                    key={`m-svc-${idx}`}
                    class={`transition-opacity ease-in-out duration-700 ${
                      serviceStep.value === idx + 1 ? "opacity-1" : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <div class="w-full">
                      <img
                        src={slide.image}
                        alt=""
                        class="w-full h-[240px] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div class="mt-6 text-center">
                      <p class="text-[32px] font-bold playfair-regular text-white leading-tight">
                        {t(slide.titleKey)}
                      </p>
                      <div class="mt-1 h-[3px] mx-auto !bg-[#F5B324] w-[120px]"></div>
                      <p class="mt-4 text-white leading-6 text-justify opensans-regular text-[15px]">
                        {t(slide.textKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div class="mt-8 mb-2 flex justify-center">
                <MobileStepper
                  total={serviceSlides.length}
                  selectedStep={serviceStep.value}
                  onClickStep={onClickStepService}
                />
              </div>
            </div>

            {/* Desktop carousel — image | text layout */}
            <div class="hidden md:flex mt-16 w-full">
              {/* Image area */}
              <div class="relative flex-shrink-0 w-[45%] max-w-[500px]">
                {/* Three stacked images */}
                <div class="relative h-[360px] lg:h-[400px] w-full">
                  {serviceSlides.map((slide, idx) => (
                    <img
                      key={`d-svc-img-${idx}`}
                      src={slide.image}
                      alt=""
                      class={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity ease-in-out duration-1000 ${
                        serviceStep.value === idx + 1 ? "opacity-1" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Text panel */}
              <div class="relative ml-8 lg:ml-12 flex-1 h-[400px]">
                <div class="relative h-full">
                  {serviceSlides.map((slide, idx) => (
                    <div
                      key={`d-svc-txt-${idx}`}
                      class={`absolute inset-0 transition-opacity ease-in-out duration-1000 ${
                        serviceStep.value === idx + 1 ? "opacity-1" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <p class="text-[36px] lg:text-[44px] xl:text-[48px] font-bold playfair leading-tight">
                        {t(slide.titleKey)}
                      </p>
                      <div class="mt-2 h-[3px] !bg-[#F5B324] w-[200px] lg:w-[260px] xl:w-[300px]"></div>
                      <p class="mt-5 leading-7 text-white text-justify opensans-regular text-[15px] lg:text-[16px]">
                        {t(slide.textKey)}
                      </p>
                    </div>
                  ))}
                  <div class="absolute bottom-0 left-0">
                    <DesktopStepper
                      total={serviceSlides.length}
                      selectedStep={serviceStep.value}
                      onClickStep={onClickStepService}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Services list — bullet grid (matches products width) */}
            <div class="mt-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {[
                { tKey: "services.1.title", xKey: "services.1.text" },
                { tKey: "services.2.title", xKey: "services.2.text" },
                { tKey: "services.3.title", xKey: "services.3.text" },
                { tKey: "services.4.title", xKey: "services.4.text" },
                { tKey: "services.5.title", xKey: "services.5.text" },
              ].map((item, i) => (
                <div
                  key={i}
                  class="bg-white/10 backdrop-blur-sm p-5 rounded-lg hover:bg-white/20 transition-colors border-l-4 border-[#F5B324]"
                >
                  <h3 class="text-[#F5B324] font-bold text-lg inter-semibold mb-2">
                    {t(item.tKey)}
                  </h3>
                  <p class="text-white text-sm sm:text-base leading-6 opensans-regular">
                    {t(item.xKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ====================== PRODUCTS ====================== */}
          <div
            id="products"
            class="w-full mt-16 opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
          >
            <div class="md:hidden">
              <TitleComponent name={t("products.ribbon.mobile")} isLong={true} />
            </div>
            <div class="hidden md:block">
              <TitleComponent name={t("products.ribbon.desktop")} isLong={true} />
            </div>
            <div class="mt-8">
              <p class="text-white font-bold text-[40px] sm:text-[48px] lg:text-[60px] playfair text-center md:text-left">
                {t("products.title")}
              </p>
              <p class="text-[15px] sm:text-[16px] text-white w-full max-w-[900px] mt-5 leading-6 text-center md:text-left mx-auto md:mx-0">
                {t("products.intro")}
              </p>

              {/* Product Categories List — grid for consistent widths matching services section */}
              <div class="mt-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <div
                    key={n}
                    class="bg-gradient-to-br from-[#F5B324]/20 to-[#F5B324]/5 border border-[#F5B324]/30 p-5 rounded-lg hover:from-[#F5B324]/30 hover:to-[#F5B324]/10 hover:border-[#F5B324]/60 transition-all"
                  >
                    <div class="flex items-center gap-3 mb-2">
                      <div class="w-1 h-6 bg-[#F5B324]"></div>
                      <h3 class="text-[#F5B324] font-bold text-base sm:text-lg inter-semibold">
                        {t(`products.item${n}`)}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brands Section — 5 per slide, white card backgrounds */}
              <div class="mt-12 w-full overflow-hidden">
                <div
                  class="flex transition-transform duration-500 ease-out"
                  style={`transform: translateX(-${productIndex.value * 20}%);`}
                >
                  {[...productLogos, ...productLogos].map((logo, idx) => (
                    <div
                      key={idx}
                      class="flex-shrink-0 flex-grow-0 basis-1/5 flex justify-center px-2"
                    >
                      <div class="brand-glass rounded-lg p-4 w-full max-w-[180px] aspect-square flex items-center justify-center">
                        <img
                          src={logo}
                          alt={`Product logo ${idx + 1}`}
                          class="object-contain w-full h-full max-h-[100px]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button centered */}
              <div class="mt-10 text-center">
                <a
                  href="#contact"
                  class="inline-block bg-[#F5B324] w-full max-w-[320px] sm:w-[320px] h-[55px] flex items-center justify-center text-black font-semibold text-base inter-semibold rounded-md hover:bg-[#ffc34d] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-5px_rgba(245,179,36,0.55)] active:scale-95 transition-all duration-300 mx-auto"
                >
                  {t("products.cta")}
                </a>
              </div>
            </div>
          </div>

          {/* ====================== CONTACT ====================== */}
          <div
            class="form w-full mt-16 mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out mobile-fade-in md:opacity-100 md:translate-y-0"
            id="contact"
          >
            <div class="md:hidden">
              <TitleComponent name={t("contact.ribbon")} isLong={true} />
            </div>
            <div class="hidden md:block">
              <TitleComponent name={t("contact.ribbon")} isLong={true} />
            </div>

            <div class="flex flex-col lg:flex-row mt-10 space-y-8 lg:space-y-0 lg:space-x-8 items-stretch lg:items-start">
              {/* Map */}
              <div class="w-full lg:w-1/2">
                <div class="w-full h-[400px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title="ELD CORP Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.787282229339!2d-80.3317026239619!3d25.83604810504361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ba7b1a6c4f3b%3A0x3b4c9f4a3e41a4f1!2s6613%20NW%2084th%20Ave%2C%20Miami%2C%20FL%2033166%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact info */}
              <div class="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
                <p class="text-[36px] sm:text-[44px] lg:text-[60px] font-bold playfair-bold text-white leading-tight">
                  {t("contact.title")}
                </p>
                <p class="text-white mt-6 leading-6 max-w-full lg:max-w-[800px] mx-auto lg:mx-0 text-justify opensans-regular text-[15px] sm:text-[16px]">
                  {t("contact.description")}
                </p>

                {/* Quick contact actions */}
                <div class="mt-8 w-full max-w-[590px] mx-auto lg:mx-0 space-y-3">
                  {/* Email (mailto) */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Solicitud de información - ELD Corp")}`}
                    class="flex items-center justify-between bg-white text-black px-4 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                        </svg>
                      </div>
                      <div class="text-left">
                        <span class="block text-sm font-semibold">{t("contact.actions.requestInfo")}</span>
                        <span class="block text-xs text-gray-600">{CONTACT_EMAIL}</span>
                      </div>
                    </div>
                    <span class="text-[#F5B324] font-bold">→</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-between bg-[#25D366] text-white px-4 py-3 rounded-md shadow-md hover:bg-[#1ebe57] transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="none">
                          <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="currentColor" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div class="text-left">
                        <span class="block text-sm font-semibold">{t("contact.whatsapp")}</span>
                        <span class="block text-xs text-white/85">{WHATSAPP_DISPLAY}</span>
                      </div>
                    </div>
                    <span class="font-bold">→</span>
                  </a>
                </div>

                {/* Info blocks: Hours, Address (left-aligned to match title) */}
                <div class="mt-8 flex flex-col gap-6 w-full max-w-[590px] mx-auto lg:mx-0">
                  {/* Hours */}
                  <div class="flex justify-start items-start gap-3 text-left">
                    <div class="bg-white rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center">
                      <ClockIcon />
                    </div>
                    <div>
                      <p class="text-white/70 text-[13px] opensans-regular">{t("contact.hours.label")}</p>
                      <p class="text-[#F5B324] leading-6 inter-semibold text-[15px]">
                        {t("contact.hours.value")}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div class="flex justify-start items-start gap-3 text-left">
                    <div class="bg-white rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center">
                      <IcBaselineLocationOn />
                    </div>
                    <div class="flex-1">
                      <p class="text-white/70 text-[13px] opensans-regular">{t("contact.visit.label")}</p>
                      <p class="text-[#F5B324] leading-6 inter-semibold text-[15px]">
                        {t("contact.visit.value")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "ELD CORP",
};
