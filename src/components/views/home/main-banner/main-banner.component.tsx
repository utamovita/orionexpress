import styles from "./main-banner.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import backgroundImage from "../../../../../public/assets/images/home/hero-banner.jpg";
import Image from "next/image";

function MainBanner() {
  const { t } = useTranslation("home");

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
        <h1 className={styles.title}>{t("mainBanner.title")}</h1>
      </Container>
    </div>
  );
}

export { MainBanner };
