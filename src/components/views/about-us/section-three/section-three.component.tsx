import styles from "./section-three.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import sectionImage from "../../../../../public/assets/images/aboutUs/section-three.jpg";
import * as React from "react";

function SectionThree() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.box}>
            <p className={styles.subtitle}>{t("aboutUs.whoWeAre.sectionThreeText")}</p>
          </div>
          <div className={styles.box}>
            <Image
              src={sectionImage}
              alt={"orion express"}
              width={1024}
              height={772}
              layout={"responsive"}
              loading={"lazy"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export { SectionThree };
