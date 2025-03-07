import React from "react";
import { Container } from "@design-system/layout/utilities";
import { FooterNavigation } from "@design-system/layout/footer/footer-navigation/footer-navigation.component";
import { BottomNavigation } from "@design-system/layout/footer/bottom-navigation/bottom-navigation.component";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterNavigation />
        <BottomNavigation />
      </Container>
    </footer>
  );
}

export { Footer };
