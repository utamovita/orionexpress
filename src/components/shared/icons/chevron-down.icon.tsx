import * as React from "react";
import { SvgIconProps, SvgWrapper } from "./components/svg-wrapper.component";

export const ChevronDownIcon = (props: SvgIconProps) => {
  return (
    <SvgWrapper {...props}>
      <path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z" />
    </SvgWrapper>
  );
};
