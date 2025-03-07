import Link from "next/link";
import React from "react";
import styles from "./footer-navigation.module.scss";
import { useFooter } from "@design-system/layout/footer/use-footer.hook";

type FooterItem = {
  title: string;
  link: string;
};

function FooterNavigation() {
  const { data } = useFooter();

  return (
    <ul className={styles.footerList}>
      {data.mainNavigation.map((item, index) => (
        <li key={index} className={styles.footerItem}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export { FooterNavigation };
export type { FooterItem };
