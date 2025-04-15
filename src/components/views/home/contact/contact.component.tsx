import styles from "./contact.module.scss";
import { ContactForm } from "./contact-form/contact-form.component";
import { Container } from "@design-system/layout/utilities";
import { useTranslation } from "next-i18next";
import EnvelopeIcon from "@components/shared/icons/envelope.icon";
import DocCheckIcon from "@components/shared/icons/doc-check.icon";
import HomeIcon from "@components/shared/icons/home.icon";
import backgroundImage from "../../../../../public/assets/images/home/hero-banner.jpg";

import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Image
        alt="background image"
        src={backgroundImage}
        placeholder="blur"
        quality={90}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className={styles.backgroundImage}
      />
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.contactFormWrapper}>
            <ContactForm />
          </div>

          <div className={styles.addressWrapper}>
            <h3 className={styles.title}>{t("contact.title")}</h3>
            <h4 className={styles.companyTitle}>
              Orion Express. <span style={{ display: "inline-block" }}>Sp. z o.o.</span>
            </h4>
            <ul className={styles.list}>
              <li className={styles.element}>
                <span>ul. Dąbrowskiego 77A, Poznań 60-529, Polska</span>
                <div className={styles.iconWrapper}>
                  <HomeIcon />
                </div>
              </li>
              <li className={styles.element}>
                <span>
                  <Link href={"mailto:office@grandtrasnportlogistics.eu"}>office@orionexpress.eu</Link>
                </span>
                <div className={styles.iconWrapper}>
                  <EnvelopeIcon />
                </div>
              </li>
              <li className={cx(styles.element, styles.last)}>
                <ul className={styles.nestedList}>
                  <li className={styles.nestedElement}>NIP: 7812020717</li>
                  <li className={styles.nestedElement}>REGON: 388870074</li>
                  <li className={styles.nestedElement}>KRS: 0000899782</li>
                </ul>
                <div className={styles.iconWrapper}>
                  <DocCheckIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export { Contact };
