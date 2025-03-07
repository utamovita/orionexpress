import React, { ElementType } from "react";
import cx from "classnames";
import { HtmlTagComponent } from "@design-system/layout/utilities";
import { ColumnSpaceType, useColumnSpaceHook } from "./hooks/use-column-space.hook";
import { useStylesWidthHook, WidthType } from "./hooks/use-styles-width.hook";
import styles from "./columns.module.scss";

type ColumnsProps = {
  children: React.ReactNode;
  tag?: ElementType;
  space?: ColumnSpaceType;
};

const Columns = ({ children, tag = "div", space = undefined }: ColumnsProps) => {
  const spaceClassName = useColumnSpaceHook(space);
  const className = cx(styles.columns, spaceClassName);

  return (
    <HtmlTagComponent className={className} as={tag}>
      {children}
    </HtmlTagComponent>
  );
};

type ColumnProps = {
  children: React.ReactNode;
  tag?: ElementType;
  width?: WidthType;
};

const Column = ({ children, width, tag = "div" }: ColumnProps) => {
  const widthClassName = useStylesWidthHook(width);
  const className = cx(styles.column, widthClassName);

  return (
    <HtmlTagComponent className={className} as={tag}>
      {children}
    </HtmlTagComponent>
  );
};

Columns.Column = Column;

export { Columns };
