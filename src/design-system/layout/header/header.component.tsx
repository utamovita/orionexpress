import { LangSwitcher } from "@design-system/layout/header/lang-switcher/lang-switcher.component";
import { Logo } from "@design-system/layout/header/logo/logo.component";
import { MainNavigation } from "@design-system/layout/header/main-navigation/main-navigation.component";
import { Hamburger } from "@design-system/layout/header/hamburger/hamburger.component";
import { Container } from "@design-system/layout/utilities";
import { HeaderProvider, useHeaderState } from "../header/providers/header.context";
import React from "react";
import styles from "./header.module.scss";
import cx from "classnames";

function Header() {
  return (
    <HeaderProvider>
      <header className={styles.header}>
        <Container className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>
            <Actions />
            <Hamburger />
          </div>
        </Container>
      </header>
    </HeaderProvider>
  );
}

export { Header };

function Actions() {
  const { isMenuOpen } = useHeaderState();

  return (
    <div className={cx(styles.actionWrapper, { [styles.activeNav]: isMenuOpen })}>
      <MainNavigation />
      <LangSwitcher />
    </div>
  );
}
