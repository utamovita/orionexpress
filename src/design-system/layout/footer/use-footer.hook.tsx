import { Locale } from "@customTypes/pages";
import { useRouter } from "next/router";
import { footerConfigDE, footerConfigEN, footerConfigPL } from "@design-system/layout/footer/config";
import { FooterConfig } from "@design-system/layout/footer/config/navigation-data-pl";

function useFooter() {
  const router = useRouter();
  const { locale } = router;

  const getFooterData = (): FooterConfig => {
    switch (locale as Locale) {
      case "en":
        return footerConfigEN;
      case "de":
        return footerConfigDE;
      case "pl":
        return footerConfigPL;
      default:
        return footerConfigPL;
    }
  };

  const data = getFooterData();

  return {
    data,
  };
}

export { useFooter };
