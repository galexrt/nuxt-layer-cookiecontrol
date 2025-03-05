import { createSharedComposable } from "@vueuse/core";
import { useCookiesStore } from "../store/cookies";

const _useCookieControl = () => {
  const hasCookiesAccepted = () => {
    const cookiesStore = useCookiesStore();

    const { hasCookiesAccepted } = storeToRefs(cookiesStore);
    return hasCookiesAccepted;
  };

  const texts = ref({
    title: "We use Cookies",
    subtitle:
      "The main purpose of our cookies is to have a basic user tracking for analytical purposes.",
    description:
      "The best way to remove this websites data is to use the clear website data function of your browser.",
    clearData: "Remove local data",
    privacyPolicy: "Privacy Policy",
    imprint: "Imprint",
    close: "Close",
    reject: "Reject",
    accept: "Accept",
  });

  return {
    hasCookiesAccepted,
    texts,
  };
};

export const useCookieControl = createSharedComposable(_useCookieControl);
