import styles from "./our-offer.module.scss";
import backgroundImage from "../../../../../public/assets/images/home/bg.png";
import offerOneImage from "../../../../../public/assets/images/home/offer1.jpeg";
import offerTwoImage from "../../../../../public/assets/images/home/offer2.jpeg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";

function OurOffer() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.mainTitle}>{t("home:ourOffer.mainTitle")}</h2>

          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <div className={styles.imgWrapper}>
                <Image
                  alt={t("home:ourOffer.offerOne.title")}
                  src={offerOneImage}
                  placeholder="blur"
                  quality={90}
                  width={610}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className={styles.imgOverlay}></div>
              </div>
              <div className={styles.contentBox}>
                <div>
                  <h3 className={styles.boxTitle}>{t("home:ourOffer.offerOne.title")}</h3>
                  <p className={styles.boxDescription}>{t("home:ourOffer.offerOne.description")}</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgWrapper}>
                <Image
                  alt={t("home:ourOffer.offerTwo.title")}
                  src={offerTwoImage}
                  placeholder="blur"
                  quality={90}
                  width={610}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <div className={styles.imgOverlay}></div>
              </div>
              <div className={styles.contentBox}>
                <div>
                  <h3 className={styles.boxTitle}>{t("home:ourOffer.offerTwo.title")}</h3>
                  <p className={styles.boxDescription}>{t("home:ourOffer.offerTwo.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          alt="background image"
          src={backgroundImage}
          placeholder="blur"
          quality={90}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Container>
    </div>
  );
}

export { OurOffer };
