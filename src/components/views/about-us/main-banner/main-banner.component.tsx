import styles from "./main-banner.module.scss";
import backgroundImage from "public/assets/images/aboutUs/hero-banner.jpg";
import Image from "next/image";
import { Container } from "@design-system/layout/utilities";
import { useTranslation } from "next-i18next";

function MainBanner() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <Image
        alt="background image"
        src={backgroundImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Container>
        <h1 className={styles.title}>{t("aboutUs.mainTitle")}</h1>
      </Container>
    </div>
  );
}

export { MainBanner };
