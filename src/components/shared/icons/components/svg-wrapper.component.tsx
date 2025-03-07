import * as React from "react";

export type SvgIconProps = {
  size?: 16 | 20 | 24 | 32 | 40 | 44 | 48;
  color?: string;
} & React.SVGAttributes<SVGElement>;

type SvgWrapperProps = SvgIconProps & {
  children: React.ReactNode;
};

export const SvgWrapper = (props: SvgWrapperProps) => {
  const { size = 32, color = "", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color ? `var(--${color})` : "currentColor"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      focusable="false"
      aria-hidden="true"
      {...rest}
    >
      {props.children}
    </svg>
  );
};
