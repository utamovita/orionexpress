import styles from "./intro-section.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";


function IntroSection() {
  const { t } = useTranslation("common");

  return (

    <div className={styles.wrapper}>
      <Container>
        <p className={styles.description}>{t("csr.introSection.description")}</p>
      </Container>
    </div>

  );
}

export { IntroSection };
