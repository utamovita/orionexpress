import * as React from "react";
import { SVGProps } from "react";

const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
    <path d="M15 8h2v11h-2zM16 22a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export { WarningIcon };
