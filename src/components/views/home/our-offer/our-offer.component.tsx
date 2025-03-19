import styles from "./our-offer.module.scss";
import offerOneImage from "../../../../../public/assets/images/home/offer1.png";
import offerTwoImage from "../../../../../public/assets/images/home/offer2.png";
import offerThreeImage from "../../../../../public/assets/images/home/offer3.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";

function OurOffer() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <div className={styles.imgWrapper}>
                <Image
                  alt={t("home:ourOffer.offerOne.title")}
                  src={offerOneImage}
                  placeholder="blur"
                  quality={90}
                  width={189}
                  height={210}
                  loading={"lazy"}
                />
              </div>

              <h3 className={styles.boxTitle}>{t("home:ourOffer.offerOne.title")}</h3>
              <p className={styles.boxDescription}>{t("home:ourOffer.offerOne.description")}</p>
            </div>

            <div className={styles.box}>
              <div className={styles.imgWrapper}>
                <Image
                  alt={t("home:ourOffer.offerTwo.title")}
                  src={offerTwoImage}
                  placeholder="blur"
                  quality={90}
                  width={189}
                  height={210}
                  loading={"lazy"}
                />
              </div>
              <h3 className={styles.boxTitle}>{t("home:ourOffer.offerTwo.title")}</h3>
              <p className={styles.boxDescription}>{t("home:ourOffer.offerTwo.description")}</p>
            </div>

            <div className={styles.box}>
              <div className={styles.imgWrapper}>
                <Image
                  alt={t("home:ourOffer.offerThree.title")}
                  src={offerThreeImage}
                  placeholder="blur"
                  quality={90}
                  width={189}
                  height={210}
                  loading={"lazy"}
                />
              </div>
              <h3 className={styles.boxTitle}>{t("home:ourOffer.offerThree.title")}</h3>
              <p className={styles.boxDescription}>{t("home:ourOffer.offerThree.description")}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export { OurOffer };
