import styles from "./main-banner.module.scss";
import { useTranslation } from "next-i18next";
import { Container } from "@design-system/layout/utilities";
import backgroundImage from "../../../../../public/assets/images/csr/bizon/bizon-1.jpg";
import Image from "next/image";

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
        priority
      />
      <Container>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>CSR</h1>
          <h3 className={styles.subtitle}>{t("csr.subtitle")}</h3>
        </div>
      </Container>
    </div>
  );
}

export { MainBanner };
