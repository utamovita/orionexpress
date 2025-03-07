import * as React from "react";
import { SVGProps } from "react";
const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.429}
        d="M6.905 12.643a.714.714 0 0 0-.715.714v6.429H1.43V7.995L9.999 1.4l8.572 6.594v11.79H13.81v-6.428a.714.714 0 0 0-.714-.714h-6.19Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HomeIcon;
