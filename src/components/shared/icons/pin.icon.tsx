import * as React from "react";
import { SVGProps } from "react";
export const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} {...props} fill={"#1a73e8"}>
    <defs>
      <style>{".cls-1{fill:none}"}</style>
    </defs>
    <path d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13 11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z" />
    <circle id="_Inner-Path_" cx={16} cy={13} r={4} className="cls-1" data-name="&lt;Inner-Path&gt;" />
    <path id="_Transparent_Rectangle_" d="M0 0h32v32H0z" className="cls-1" data-name="&lt;Transparent Rectangle&gt;" />
  </svg>
);
