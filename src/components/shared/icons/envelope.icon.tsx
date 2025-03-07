import * as React from "react";
import { SVGProps } from "react";

const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={23} fill="none" {...props}>
    <path
      stroke="#000"
      strokeWidth={1.429}
      d="M1.5 11.5c0-4.714 0-7.071 1.465-8.535C4.43 1.501 6.786 1.5 11.5 1.5h5c4.714 0 7.071 0 8.535 1.465C26.499 4.43 26.5 6.786 26.5 11.5s0 7.071-1.465 8.535C23.57 21.499 21.214 21.5 16.5 21.5h-5c-4.714 0-7.071 0-8.535-1.465C1.501 18.57 1.5 16.214 1.5 11.5Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.429}
      d="m6.5 6.5 2.699 2.25c2.296 1.912 3.444 2.869 4.801 2.869 1.357 0 2.506-.957 4.801-2.87L21.5 6.5"
    />
  </svg>
);
export default EnvelopeIcon;
