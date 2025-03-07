import React from "react";
import styles from "./spinner.module.scss";

function Spinner(props: { show: boolean }) {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <svg className={styles.spinnerSVG} viewBox="0 0 50 50" data-testid="spinner">
      <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
    </svg>
  );
}

function SpinnerWrapper({ children, show, ...restProps }: { children: React.ReactNode; show: boolean }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.spinnerWrapper} {...restProps}>
      {children}
    </div>
  );
}

export { Spinner, SpinnerWrapper };
