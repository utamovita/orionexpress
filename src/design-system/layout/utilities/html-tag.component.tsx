import React, { ElementType, HTMLAttributes } from "react";

type ComponentProps = {
  as?: ElementType;
} & HTMLAttributes<HTMLOrSVGElement>;

function HtmlTagComponent(props: ComponentProps) {
  const { as: Tag = "div", ...otherProps } = props;
  return <Tag {...otherProps} />;
}

export { HtmlTagComponent };
