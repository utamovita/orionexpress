import * as React from "react";
import cx from "classnames";
import styles from "./stack.module.scss";
import { GapType, useStylesGapHook } from "./hooks/use-styles-gap.hook";
import { ItemAlignment, useStylesAlignItems } from "./hooks/use-styles-align-items.hook";
import { HtmlTagComponent } from "@design-system/layout/utilities";

type StackProps = {
  children: React.ReactNode;
  tag?: React.ElementType;
  space?: GapType;
  align?: ItemAlignment;
  className?: string;
};

const Stack = ({ children, tag = "div", space = undefined, align = undefined, className = "" }: StackProps) => {
  const gapClassName = useStylesGapHook(space);
  const alignClassName = useStylesAlignItems(align);
  const classNames = cx(styles.stack, gapClassName, alignClassName, className);

  return (
    <HtmlTagComponent className={classNames} as={tag}>
      {children}
    </HtmlTagComponent>
  );
};

export { Stack };
