import styles from "./section-five.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import sectionImage from "../../../../../public/assets/images/aboutUs/section-five.jpg";
import * as React from "react";
import { ButtonLink } from "@components/shared/button/button-link.component";

function SectionFive() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.box}>
            <p className={styles.subtitle}>{t("aboutUs.whoWeAre.sectionFiveText")}</p>
            <div className={styles.btnBox}>
              <ButtonLink to={"galeria"} variant={"tertiary"}>{t("aboutUs.whoWeAre.sectionFiveBtn")}</ButtonLink>
            </div>
          </div>
          <div className={styles.box}>
            <Image src={sectionImage} alt={"orion express"} width={1024} height={772} layout={"responsive"} />
          </div>


        </div>

      </Container>
    </div>
  );
}

export { SectionFive };
