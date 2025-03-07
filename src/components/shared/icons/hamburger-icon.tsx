import * as React from "react";
import { SVGProps } from "react";
export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <title>{"menu"}</title>
    <path d="M4 6h24v2H4zM4 24h24v2H4zM4 12h24v2H4zM4 18h24v2H4z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
