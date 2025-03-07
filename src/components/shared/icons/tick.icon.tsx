import * as React from "react";
import { SVGProps } from "react";

export const TickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill={"currentColor"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path d="M13 23.9998L6.41016 17.4099L7.82007 15.9998L13 21.1697L24.5901 9.5896L26 10.9998L13 23.9998Z" />
    </svg>
  );
};
