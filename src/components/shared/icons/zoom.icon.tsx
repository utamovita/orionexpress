import * as React from "react";
import { SVGProps } from "react";

const ZoomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <path d="M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z" />
    <path d="M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11 10.856 10.856 0 0 0 7-2.552L27.586 29 29 27.586ZM13 22a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export default ZoomIcon;
