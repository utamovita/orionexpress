import styles from "./main-banner.module.scss";
import { Container } from "@design-system/layout/utilities";
import backgroundImage from "../../../../../public/assets/images/home/hero-banner.jpg";
import logo from "../../../../../public/assets/images/logo.png";
import Image from "next/image";

function MainBanner() {
  return (
    <div className={styles.wrapper}>
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
      <Container className={styles.containerClass}>
        <div className={styles.imgWrapper}>
          <Image
            src={logo}
            alt={"orion express logo"}
            quality={100}
            width={774}
            height={631.14}
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
      </Container>
    </div>
  );
}

export { MainBanner };
