import { SpacingSizes, SupportedAllDevices } from "design-system";
import { isObject, isString } from "lodash-es";
import cx from "classnames";
import styles from "./use-styles-gap.module.scss";

export type GapType = SpacingSizes | SupportedAllDevices<SpacingSizes, SpacingSizes, SpacingSizes> | undefined;

function useStylesGapHook(gap: GapType) {
  let gapClassName = "";

  if (gap === undefined) {
    gapClassName = styles.defaultGap;
  }

  if (isString(gap)) {
    gapClassName = styles[`gap-${gap}`];
  }

  if (isObject(gap)) {
    const mobile = gap.mobile ? styles[`mobileGap-${gap.mobile}`] : "";
    const tablet = gap.tablet ? styles[`tabletGap-${gap.tablet}`] : "";
    const desktop = gap.desktop ? styles[`desktopGap-${gap.desktop}`] : "";
    gapClassName = cx(mobile, tablet, desktop);
  }

  return gapClassName;
}

export { useStylesGapHook };
