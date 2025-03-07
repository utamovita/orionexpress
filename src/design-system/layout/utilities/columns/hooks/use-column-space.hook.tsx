import { SupportedAllDevices } from "design-system";
import { SpacingSizes } from "design-system";
import { isObject, isString } from "lodash-es";
import cx from "classnames";
import styles from "./use-column-space.module.scss";

export type ColumnSpaceType = SpacingSizes | SupportedAllDevices<SpacingSizes, SpacingSizes, SpacingSizes> | undefined;

function useColumnSpaceHook(space: ColumnSpaceType, noSides = false) {
  let spaceClassName = "";

  const noSidesClass = noSides ? styles.noSides : "";

  if (space === undefined) {
    spaceClassName = cx(styles.defaultSpace, noSidesClass);
  }

  if (isString(space)) {
    spaceClassName = cx(styles[`space-${space}`], noSidesClass);
  }

  if (isObject(space)) {
    const mobile = space.mobile ? styles[`mobileSpace-${space.mobile}`] : "";
    const tablet = space.tablet ? styles[`tabletSpace-${space.tablet}`] : "";
    const desktop = space.desktop ? styles[`desktopSpace-${space.desktop}`] : "";
    spaceClassName = cx(mobile, tablet, desktop, noSidesClass);
  }

  return spaceClassName;
}

export { useColumnSpaceHook };
