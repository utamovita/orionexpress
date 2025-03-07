import { useCallback, useEffect, useState } from "react";
import { desktopBreakpoint, mobileBreakpoint } from "./devices.component";

export const useDeviceTypeHook = (widthRuleMobile: number, widthRuleDesktop: number): string => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  const updateTarget = useCallback((e: any) => {
    const width = e?.currentTarget?.innerWidth;

    if (!width) {
      return;
    } else if (width < mobileBreakpoint) {
      setDeviceType("mobile");
    } else if (width > mobileBreakpoint && width < desktopBreakpoint) {
      setDeviceType("tablet");
    } else if (width > desktopBreakpoint) {
      setDeviceType("desktop");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateTarget);
    return () => window.removeEventListener("resize", updateTarget);
  }, [updateTarget, widthRuleMobile, widthRuleDesktop]);

  useEffect(() => {
    updateTarget({ currentTarget: window });
  }, [updateTarget]);

  return deviceType;
};
