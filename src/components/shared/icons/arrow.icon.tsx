import * as React from "react";
import { SVGProps } from "react";
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.385 1 7.951.163m0 0 .164 7.923m-.164-7.923L1.5 11"
    />
  </svg>
);
