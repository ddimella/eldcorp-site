import { component$ } from "@builder.io/qwik";
import { t } from "~/i18n";

export default component$(() => {
  return (
    <footer class="bg-black text-white py-8 px-4 text-center">
      <p class="text-sm text-gray-400 mb-2">{t("footer.copyright")}</p>
      <p class="text-sm text-gray-500">{t("footer.tagline")}</p>
    </footer>
  );
});
