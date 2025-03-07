import { Locale } from "@customTypes/pages";
import {
  navigationDataPL,
  navigationDataEN,
  navigationDataDE,
} from "@design-system/layout/header/main-navigation/config";
import { NavigationItem } from "@design-system/layout/header/main-navigation/main-navigation.component";
import { useRouter } from "next/router";
import { useHeaderDispatch, useHeaderState } from "@design-system/layout/header/providers/header.context";
import { useCallback, useEffect } from "react";

function useMainNavigation() {
  const router = useRouter();
  const { locale } = router;
  const headerDispatch = useHeaderDispatch();
  const headerState = useHeaderState();

  const handleRouteChange = useCallback(() => {
    if (headerState.isMenuOpen) {
      headerDispatch({ type: "HIDE_MENU" });
    }
  }, [headerState.isMenuOpen, headerDispatch]);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [headerState.isMenuOpen, router.events, handleRouteChange]);

  const getNavigationData = (): NavigationItem[] => {
    switch (locale as Locale) {
      case "en":
        return navigationDataEN;
      case "de":
        return navigationDataDE;
      case "pl":
        return navigationDataPL;
      default:
        return navigationDataPL;
    }
  };

  const data = getNavigationData();

  return {
    data,
  };
}

export { useMainNavigation };
