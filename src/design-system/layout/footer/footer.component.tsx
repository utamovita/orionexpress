import React from "react";
import { Container } from "@design-system/layout/utilities";
import { FooterNavigation } from "@design-system/layout/footer/footer-navigation/footer-navigation.component";
import { BottomNavigation } from "@design-system/layout/footer/bottom-navigation/bottom-navigation.component";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.imgWrapper}>
          <Image className={styles.logo} src={logo} alt={"orion express logo"} quality={100} objectFit="cover" />
        </div>

        <FooterNavigation />
        <BottomNavigation />
      </Container>
    </footer>
  );
}

export { Footer };
