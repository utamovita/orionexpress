import styles from "./our-prio.module.scss";
import { useTranslation } from "next-i18next";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import backgroundImage from "../../../../../public/assets/images/home/our-prio.jpg";

import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import * as React from "react";

function OurPrio() {
  const { t } = useTranslation("home");

  return (
    <div className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <FlexComponent className={styles.flexWrapper}>
          <div className={styles.box}>
            <p className={styles.subtitle}>
              <strong>{t("ourPrio.title")}</strong> {t("ourPrio.subtitle")}
            </p>
          </div>
          <div className={styles.box}>
            <Image
              src={backgroundImage}
              alt={"orion express"}
              width={2048}
              height={1536}
              layout={"responsive"}
              loading={"lazy"}
            />
          </div>
        </FlexComponent>
      </Container>
    </div>
  );
}

export { OurPrio };
