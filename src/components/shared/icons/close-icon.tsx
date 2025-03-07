import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <path d="M17.414 16 26 7.414 24.586 6 16 14.586 7.414 6 6 7.414 14.586 16 6 24.586 7.414 26 16 17.414 24.586 26 26 24.586 17.414 16z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&amp;lt;Transparent Rectangle&amp;gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
export default CloseIcon;
