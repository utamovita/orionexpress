import { useHeaderState } from "../providers/header.context";
import Link from "next/link";
import styles from "./main-navigation.module.scss";
import { useMainNavigation } from "@design-system/layout/header/main-navigation/use-main-navigation.hook";
import { useRouter } from "next/router";
import cx from "classnames";

type NavigationItem = {
  title: string;
  link: string;
};

function MainNavigation() {
  const { isMenuOpen } = useHeaderState();

  const { data } = useMainNavigation();
  const router = useRouter();

  return (
    <nav className={cx(styles.nav, { [styles.activeNav]: isMenuOpen })}>
      <ul className={styles.list}>
        {data.map((item, index) => {
          const isActive = router.asPath === item.link;

          return (
            <li key={index} className={styles.element}>
              <Link href={item.link} className={cx(styles.link, { [styles.active]: isActive })}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { MainNavigation };
export type { NavigationItem };
