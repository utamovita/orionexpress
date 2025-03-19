import styles from "./csr-section.module.scss";
import { Container } from "@design-system/layout/utilities";
import { CsrConfig, csrConfig } from "./csr.config";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { SliderFullscreen } from "@components/shared/slider/fullscreen-slider.component";

function CSRSection() {
  const { t } = useTranslation("common");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [sliderData, setSliderData] = useState<CsrConfig["images"]>([]);

  const handleOpenGallery = (sliderData: CsrConfig["images"]) => {
    setIsGalleryOpen(true);
    setSliderData(sliderData);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.side}>
            <CSRPost data={csrConfig[0]} onClick={handleOpenGallery} />
            <CSRPost data={csrConfig[1]} onClick={handleOpenGallery} />
          </div>
          <div className={styles.side}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{t("csr.title")}</h1>
              <h2 className={styles.subtitle}>{t("csr.subtitle")}</h2>
            </div>
            <CSRPost data={csrConfig[2]} onClick={handleOpenGallery}/>
          </div>
        </div>
      </Container>

      {isGalleryOpen && (
        <SliderFullscreen onClose={() => setIsGalleryOpen(false)} images={sliderData} startingSlide={0} />
      )}
    </div>
  );
}

type CSRPostProps = {
  data: CsrConfig;
  onClick: (sliderData: CsrConfig["images"]) => void;
}

function CSRPost(props: CSRPostProps) {
  const { data, onClick } = props;
  return (
    <div className={styles.post} onClick={() => onClick(data.images)}>
      <Image
        className={styles.postImg}
        src={data.images[0].url}
         alt={"csr"}
        layout="responsive"
        width={100}
        height={50}
      />
    </div>
  );
}

export { CSRSection };
