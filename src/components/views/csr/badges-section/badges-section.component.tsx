import styles from "./badges-section.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import EventsIcon from "@components/shared/icons/events.icon";
import SoccerIcon from "@components/shared/icons/soccer.icon";
import EnterpriseIcon from "@components/shared/icons/enterprise.icon";


function BadgesSection() {
  const { t } = useTranslation("common");

  return (

    <div className={styles.wrapper}>
      <Container>
        <div className={styles.badgesWrapper}>
          <div className={styles.badge}>
            <EventsIcon className={styles.icon} />
            <h4 className={styles.badgeTitle}>{t("csr.badgesSection.badge1")}</h4>
          </div>
          <div className={styles.badge}>
            <EnterpriseIcon className={styles.icon} />
            <h4 className={styles.badgeTitle}>{t("csr.badgesSection.badge2")}</h4>
          </div>
          <div className={styles.badge}>
            <SoccerIcon className={styles.icon} />
            <h4 className={styles.badgeTitle}>{t("csr.badgesSection.badge3")}</h4>
          </div>
        </div>
      </Container>
    </div>

  );
}

export { BadgesSection };
