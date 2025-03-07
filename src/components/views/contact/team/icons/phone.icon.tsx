import * as React from "react";
import { SVGProps } from "react";

const PhoneIconColored = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={20} fill="none" {...props}>
    <g filter="url(#a)">
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5.125.75H3.667v.073a3.647 3.647 0 1 0 4.33 4.148l6.488 5.99a3.646 3.646 0 1 0 3.692 4.372h.073v-1.458C16.5 7.458 9.5 2.208 5.125.75Z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#737373"
      fillRule="evenodd"
      d="M6.535 3.79a2.204 2.204 0 0 0-1.062-.27A2.23 2.23 0 0 0 3.3 6.232a2.238 2.238 0 0 1-1.162-1.967A2.23 2.23 0 0 1 4.36 2.03c1.067 0 1.957.754 2.174 1.762ZM13.876 15.697c.235.13.505.202.792.202a1.665 1.665 0 0 0 1.622-2.024c.517.283.868.834.868 1.468 0 .922-.743 1.67-1.66 1.67-.796 0-1.46-.564-1.622-1.316Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={18.229}
        height={18.958}
        x={0.75}
        y={0.75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={0.729} dy={1.458} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_697_1099" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={1.458} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="effect1_dropShadow_697_1099" result="effect2_dropShadow_697_1099" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_697_1099" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default PhoneIconColored;
