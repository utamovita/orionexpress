import { SupportedAllDevices } from "design-system";
import { isObject, isString } from "lodash-es";
import cx from "classnames";
import styles from "./use-styles-align-items.module.scss";

type Align = "Left" | "Center" | "Right";

export type ItemAlignment = Align | SupportedAllDevices<Align, Align, Align> | undefined;

function useStylesAlignItems(align: ItemAlignment) {
  let alignClassName = "";

  if (align === undefined) {
    alignClassName = "";
  }

  if (isString(align)) {
    alignClassName = styles[`align${align}`];
  }

  if (isObject(align)) {
    const mobile = align.mobile ? styles[`alignMobile${align.mobile}`] : "";
    const tablet = align.tablet ? styles[`alignTablet${align.tablet}`] : "";
    const desktop = align.desktop ? styles[`alignDesktop${align.desktop}`] : "";
    alignClassName = cx(mobile, tablet, desktop);
  }

  return alignClassName;
}

export { useStylesAlignItems };
