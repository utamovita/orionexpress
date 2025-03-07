import * as React from "react";
import { SVGProps } from "react";

const DocCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" {...props}>
    <path
      fill="#000"
      d="M17.097 6.214 13.095 2.52v3.694h4.002Zm.641 1.429h-6.19V1.929H2.262V19.07h15.476V7.643ZM1.488.5h11.607l6.19 5.714v13.572c0 .19-.08.37-.226.505a.808.808 0 0 1-.547.209H1.488a.808.808 0 0 1-.547-.21.688.688 0 0 1-.227-.504V1.214c0-.19.082-.37.227-.505A.808.808 0 0 1 1.488.5Zm7.7 12.994 4.376-4.04 1.094 1.01-5.47 5.05-3.83-3.534 1.093-1.011 2.736 2.525Z"
    />
  </svg>
);
export default DocCheckIcon;
