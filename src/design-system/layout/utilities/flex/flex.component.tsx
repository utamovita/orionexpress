import React, { ElementType } from "react";
import cx from "classnames";
import styles from "./flex.module.scss";
import { HtmlTagComponent } from "@design-system/layout/utilities";

type FlexProps = {
  children: React.ReactNode;
  tag?: ElementType;
  direction?: "row" | "rowReverse" | "column" | "columnReverse";
  flexWrap?: "nowrap" | "wrap" | "wrapReverse";
  justifyContent?:
    | "flexStart"
    | "flexEnd"
    | "center"
    | "spaceBetween"
    | "spaceAround"
    | "spaceEvenly"
    | "start"
    | "end"
    | "left"
    | "right";
  alignItems?:
    | "stretch"
    | "alignFlexStart"
    | "alignFlexEnd"
    | "alignCenter"
    | "baseline"
    | "firstBaseline"
    | "lastBaseline"
    | "alignStart"
    | "alignEnd"
    | "selfStart"
    | "selfEnd";
  alignContent?:
    | "alignContentFlexStart"
    | "alignContentFlexEnd"
    | "alignContentCenter"
    | "alignContentSpaceBetween"
    | "alignContentSpaceAround"
    | "alignContentSpaceEvenly"
    | "alignContenStretch"
    | "alignContentStart"
    | "alignContentEnd"
    | "alignContentBaseline"
    | "alignContentFirstBaseline"
    | "alignContentLastBaseline";
  className?: string;
};

function FlexComponent(props: FlexProps) {
  const {
    children,
    direction = "row",
    flexWrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "stretch",
    alignContent = "stretch",
    tag = "div",
    className = "",
  } = props;
  const directionClass = styles[direction];
  const flexWrapClass = styles[flexWrap];
  const justifyContentClass = styles[justifyContent];
  const alignItemsClass = styles[alignItems];
  const alignContentClass = styles[alignContent];

  const classNames = cx(
    directionClass,
    flexWrapClass,
    justifyContentClass,
    alignItemsClass,
    alignContentClass,
    styles.flexClass,
    className,
  );

  return (
    <HtmlTagComponent as={tag} className={classNames}>
      {children}
    </HtmlTagComponent>
  );
}

export { FlexComponent };
