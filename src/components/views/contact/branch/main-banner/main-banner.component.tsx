import styles from "./main-banner.module.scss";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";

type MainBannerProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

function MainBanner({ imageUrl, title, subtitle }: MainBannerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      {imageUrl && (
        <Image
          alt={title}
          src={imageUrl}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          priority
        />
      )}
      <Container>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
      </Container>
    </div>
  );
}

export { MainBanner };
