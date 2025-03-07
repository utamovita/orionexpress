import React, { ElementType } from "react";
import cx from "classnames";
import styles from "./container.module.scss";
import { HtmlTagComponent } from "@design-system/layout/utilities";

type ContainerProp = {
  children: React.ReactNode;
  tag?: ElementType;
  fullWidth?: boolean;
  className?: string;
};

function Container(props: ContainerProp) {
  const { tag, children, className, fullWidth = false } = props;

  const fullWidthClassName = fullWidth ? styles.fullWidth : "";

  return (
    <HtmlTagComponent className={cx([styles.container, fullWidthClassName, className])} as={tag}>
      {children}
    </HtmlTagComponent>
  );
}

export { Container };
