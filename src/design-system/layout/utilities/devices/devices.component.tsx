import React from "react";
import { useDeviceTypeHook } from "./use-device-type.hook";
import styles from "./devices.module.scss";

export type ViewProps = {
  children: React.ReactNode;
};

export const mobileBreakpoint = 640;
export const desktopBreakpoint = 1000;

const DesktopView = React.memo<ViewProps>(({ children }) => (
  <div className={styles.hideDesktopBreakpointDown} aria-hidden="true">
    {children}
  </div>
));

const TabletView = React.memo<ViewProps>(({ children }) => (
  <div className={styles.hideMobileBreakpointDown} aria-hidden="true">
    {children}
  </div>
));

const MobileView = React.memo<ViewProps>(({ children }) => (
  <div className={styles.hideMobileBreakpointUp} aria-hidden="true">
    {children}
  </div>
));

const BelowDesktopView = React.memo<ViewProps>(({ children }) => (
  <div className={styles.hideDesktopBreakpointUp} aria-hidden="true">
    {children}
  </div>
));
const useGetDeviceType = (): string => useDeviceTypeHook(mobileBreakpoint, desktopBreakpoint);

export { DesktopView, TabletView, MobileView, BelowDesktopView, useGetDeviceType };
