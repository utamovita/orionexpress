import styles from "./main-banner.module.scss";
import { Container } from "@design-system/layout/utilities";
import backgroundImage from "../../../../../public/assets/images/documents/hero-banner.jpg";
import Image from "next/image";

function MainBanner() {
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
        <h1 className={styles.title}>CSR</h1>
      </Container>
    </div>
  );
}

export { MainBanner };
