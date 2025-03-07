import * as React from "react";
import cx from "classnames";
import { useButton } from "react-aria";
import { AriaButtonProps } from "@react-types/button";

import { Spinner, SpinnerWrapper } from "@components/shared/spinner/spinner.component";
import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: AriaButtonProps["onPress"];
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

function Button(props: ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton({ ...props, isDisabled: props.isDisabled || props.isLoading }, ref);
  const {
    children,
    variant = "primary",
    isDisabled = false,
    isLoading = false,
    fullWidth = false,
    className,
    type = "button",
  } = props;

  const variantClass = styles[variant];
  const loadingClass = isLoading ? styles.loading : false;
  const disabledClass = isDisabled ? styles.disabled : false;
  const fullWidthClass = fullWidth ? styles.fullWidth : false;
  const classNames = cx(styles.button, variantClass, disabledClass, loadingClass, fullWidthClass, className);

  return (
    <button {...buttonProps} className={classNames} ref={ref} type={type}>
      <SpinnerWrapper show={isLoading}>
        <Spinner show={isLoading} />
      </SpinnerWrapper>

      <span className={styles.children}>{children}</span>
    </button>
  );
}

export { Button };
