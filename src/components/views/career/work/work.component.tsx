import styles from "./work.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import sectionImage from "../../../../../public/assets/images/aboutUs/section-three.jpg";
import * as React from "react";
import { ButtonLink } from "@components/shared/button/button-link.component";

function Work() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.contentWrapper}>
            <div className={styles.box}>
              <p className={styles.subtitle}>{t("career.paragraphOne")}</p>
              <p className={styles.subtitle}>
                {t("career.paragraphTwo")}{" "}
                <a className={styles.mailLink} href="mailto:rekrutacja@orionexpress.eu">
                  rekrutacja@orionexpress.eu
                </a>
              </p>
              <div className={styles.btns}>
                <div className={styles.buttonWrapper}>
                  <ButtonLink to={"/"} newTab>
                    {t("career.button.whatDoWeDo")}
                  </ButtonLink>
                </div>
                <div className={styles.buttonWrapper}>
                  <ButtonLink to={"/assets/images/documents/Orion-Express-Rekrutacja.pdf"} newTab>
                    {t("career.button.rodo")}
                  </ButtonLink>
                </div>
                <div className={styles.buttonWrapper}>
                  <ButtonLink to={"/assets/images/documents/Orion-Express-pdf-klauzula.pdf"} newTab>
                    {t("career.button.info")}
                  </ButtonLink>
                </div>
              </div>
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
    </>
  );
}

export { Work };
