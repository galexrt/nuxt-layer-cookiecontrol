import { createSharedComposable } from "@vueuse/core";

const _useCookieControl = () => {
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
    texts,
  };
};

export const useCookieControl = createSharedComposable(_useCookieControl);
