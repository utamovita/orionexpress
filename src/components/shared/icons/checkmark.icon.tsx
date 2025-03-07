import * as React from "react";
import { SvgIconProps, SvgWrapper } from "./components/svg-wrapper.component";

export const CheckmarkIcon = (props: SvgIconProps) => {
  return (
    <SvgWrapper {...props}>
      <path d="M13 23.9998L6.41016 17.4099L7.82007 15.9998L13 21.1697L24.5901 9.5896L26 10.9998L13 23.9998Z" />
    </SvgWrapper>
  );
};
