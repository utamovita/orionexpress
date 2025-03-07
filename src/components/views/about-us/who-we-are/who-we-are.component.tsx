import styles from "./who-we-are.module.scss";
import { useTranslation } from "next-i18next";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import PunctualityIcon from "../../../shared/icons/punctuality.icon";
import { SecurityIcon } from "../../../shared/icons/security.icon";
import { PartnershipIcon } from "../../../shared/icons/partnership.icon";
import { StarsIcon } from "../../../shared/icons/stars.icon";

function WhoWeAre() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <Container>
        <FlexComponent className={styles.content}>
          <div className={styles.sectionIcons}>
            <div className={styles.sectionIconsChild}>
              <PunctualityIcon className={styles.svg} />
              <p>{t("aboutUs.whoWeAre.punctuality")}</p>
              <StarsIcon className={styles.svg_Stars} />
            </div>
            <div className={styles.sectionIconsChild}>
              <SecurityIcon className={styles.svg} />
              <p>{t("aboutUs.whoWeAre.security")}</p>
              <StarsIcon className={styles.svg_Stars} />
            </div>
            <div className={styles.sectionIconsChild}>
              <PartnershipIcon className={styles.svg} />
              <p>{t("aboutUs.whoWeAre.partnership")}</p>
              <StarsIcon className={styles.svgStars} />
            </div>
          </div>
          <div className={styles.sectionWhoWeAre}>
            <h2 className={styles.title}>{t("aboutUs.whoWeAre.title")}</h2>
            <p className={styles.subtitle}>{t("aboutUs.whoWeAre.subtitle")}</p>
          </div>
        </FlexComponent>
      </Container>
    </div>
  );
}

export { WhoWeAre };
