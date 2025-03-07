import * as React from "react";
import { SVGProps } from "react";

const HomeIconColored = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="none" {...props}>
    <path
      fill="#587295"
      d="M2.313 11.5h1.53v9.188H11.5V13.03h4.594v7.656h3.062V11.5h1.532V9.969L13.03 2.313H11.5v1.53H5.375v-1.53H3.844v7.656H2.313V11.5Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M.781 13.031V8.437h1.531V.782h4.594v1.531H9.97V.782h3.697l8.553 8.552v3.697h-1.532v9.188H2.313V13.03H.782Zm15.313 7.656v-7.656H11.5v7.656H3.844V11.5H2.313V9.969h1.53V2.313h1.532v1.53H11.5v-1.53h1.531l7.656 7.656V11.5h-1.53v9.188h-3.063ZM5.375 9.97H9.97v4.594H5.375V9.968Z"
      clipRule="evenodd"
    />
  </svg>
);

export { HomeIconColored };
