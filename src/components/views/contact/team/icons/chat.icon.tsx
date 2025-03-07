import * as React from "react";
import { SVGProps } from "react";

const ChatIconColored = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={19} fill="none" {...props}>
    <path
      fill="#000"
      d="M10.5.5c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C4.05 18.5.5 18.5.5 18.5c2.33-2.33 2.7-3.9 2.75-4.5C1.55 12.57.5 10.63.5 8.5c0-4.42 4.5-8 10-8Z"
    />
  </svg>
);
export default ChatIconColored;
