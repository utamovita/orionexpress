import Link from "next/link";
import React from "react";
import styles from "./bottom-navigation.module.scss";
import cx from "classnames";
import { useFooter } from "@design-system/layout/footer/use-footer.hook";

function BottomNavigation() {
  const { data } = useFooter();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.bottomLinks}>
        {data.bottomNavigation.map((item, index) => (
          <li key={index} className={styles.bottomItem}>
            <Link href={item.link} className={styles.bottomLink}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
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
