import styles from "./section-two.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";

function SectionTwo() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <p className={styles.subtitle}>{t("aboutUs.whoWeAre.sectionTwoText")}</p>
      </Container>
    </div>
  );
}

export { SectionTwo };
