import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useTranslate } from "~/i18n";

/* ============================================================
 * Página tipo "linktree" para contactos directos.
 *
 * TODO: reemplazar los placeholders de teléfono por los números
 * reales del cliente. Mantener el formato internacional en PHONE_X_WA
 * (solo dígitos, sin "+", sin espacios) para el link de WhatsApp.
 * ============================================================ */
const CONTACT_EMAIL = "sales@eldparts.com";

// TODO: número real 1
const PHONE_1_DISPLAY = "+1 305 555 5555";
const PHONE_1_TEL = "+13055555555";
const PHONE_1_WA = "13055555555";

// TODO: número real 2
const PHONE_2_DISPLAY = "+1 305 555 5556";
const PHONE_2_TEL = "+13055555556";
const PHONE_2_WA = "13055555556";

export default component$(() => {
  const t = useTranslate();
  return (
    <div class="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16">
      <div class="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Brand */}
        <img
          src="/logo.png"
          alt="ELD CORP"
          width={170}
          height={50}
          class="mb-6"
          style="filter: drop-shadow(0 3px 8px rgba(0,0,0,0.6));"
        />
        <h1 class="text-white text-3xl sm:text-4xl font-bold inter-extrabold text-center leading-tight">
          {t("links.title")}
        </h1>
        <p class="text-white/70 mt-3 text-center opensans-regular">
          {t("links.subtitle")}
        </p>

        {/* Phone 1 */}
        <div class="w-full mt-10 rounded-xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md">
          <p class="text-white font-bold text-lg inter-bold px-5 pt-4">{PHONE_1_DISPLAY}</p>
          <div class="flex gap-2 p-3">
            <a
              href={`tel:${PHONE_1_TEL}`}
              class="flex-1 h-[48px] flex items-center justify-center gap-2 bg-[#F5B324] text-black font-bold inter-bold rounded-md hover:bg-[#ffc34d] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
              </svg>
              {t("links.call")}
            </a>
            <a
              href={`https://wa.me/${PHONE_1_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 h-[48px] flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold inter-bold rounded-md hover:bg-[#1ebe57] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="currentColor" />
              </svg>
              {t("links.whatsapp")}
            </a>
          </div>
        </div>

        {/* Phone 2 */}
        <div class="w-full mt-4 rounded-xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md">
          <p class="text-white font-bold text-lg inter-bold px-5 pt-4">{PHONE_2_DISPLAY}</p>
          <div class="flex gap-2 p-3">
            <a
              href={`tel:${PHONE_2_TEL}`}
              class="flex-1 h-[48px] flex items-center justify-center gap-2 bg-[#F5B324] text-black font-bold inter-bold rounded-md hover:bg-[#ffc34d] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
              </svg>
              {t("links.call")}
            </a>
            <a
              href={`https://wa.me/${PHONE_2_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 h-[48px] flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold inter-bold rounded-md hover:bg-[#1ebe57] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="currentColor" />
              </svg>
              {t("links.whatsapp")}
            </a>
          </div>
        </div>

        {/* Email */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          class="w-full mt-4 h-[56px] flex items-center justify-center gap-2 border-2 border-[#F5B324] text-[#F5B324] font-bold inter-bold rounded-md hover:bg-[#F5B324] hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
          </svg>
          {t("links.email")} · {CONTACT_EMAIL}
        </a>

        {/* Back home */}
        <a
          href="/"
          class="mt-8 text-white/60 hover:text-[#F5B324] text-sm inter-semibold transition-colors"
        >
          ← {t("links.back")}
        </a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "ELD CORP · Contacto directo",
};
