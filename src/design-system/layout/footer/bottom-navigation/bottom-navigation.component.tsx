import Link from "next/link";
import React from "react";
import styles from "./bottom-navigation.module.scss";
import cx from "classnames";

function BottomNavigation() {

  return (
    <div className={styles.wrapper}>
      <Link
        href={"https://focusite.pl"}
        className={cx(styles.bottomItem, styles.poweredBy)}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        Powered by <span>focusite</span>
      </Link>
    </div>
  );
}

export { BottomNavigation };
