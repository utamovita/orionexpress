import { SupportedAllDevices } from "design-system";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import cx from "classnames";
import styles from "./use-styles-width.module.scss";

type DesktopWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type TabletWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type MobileWidth = 1 | 2 | 3 | 4;

export type WidthType = DesktopWidth | SupportedAllDevices<MobileWidth, TabletWidth, DesktopWidth> | undefined;

function useStylesWidthHook(width: WidthType) {
  let widthClassName = "";

  if (width === undefined) {
    widthClassName = styles.defaultWidth;
  }

  if (isNumber(width)) {
    widthClassName = styles[`width-${width}`];
  }

  if (isObject(width)) {
    const mobile = width.mobile ? styles[`widthMobile-${width.mobile}`] : "";
    const tablet = width.tablet ? styles[`widthTablet-${width.tablet}`] : "";
    const desktop = width.desktop ? styles[`widthDesktop-${width.desktop}`] : "";
    widthClassName = cx(mobile, tablet, desktop);
  }

  return widthClassName;
}

export { useStylesWidthHook };
