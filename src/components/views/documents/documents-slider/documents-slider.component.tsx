import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { documentsConfig } from "./documents.config";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./documents-slider.module.scss";
import { useRouter } from "next/router";
import { Locale } from "@customTypes/pages";
import { ButtonLink } from "@components/shared/button/button-link.component";
import { Stack } from "@design-system/layout/utilities";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function DocumentsSlider() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlidesBounds={true}
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          770: {
            slidesPerView: 3,
            spaceBetween: 40,
            initialSlide: 0,
          },
        }}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {documentsConfig.map(({ image, title, subtitle, link }) => (
          <SwiperSlide key={image.alt} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <Image
                src={image.url}
                alt={image.alt}
                className={styles.image}
                width={image.width}
                height={image.height}
              />
              <div className={styles.overlay}>
                <div className={styles.textWrapper}>
                  <Stack space={"M"} className={styles.stack}>
                    <div>
                      <h2 className={styles.documentTitle}>{title[locale as Locale]}</h2>
                      <p className={styles.documentSubtitle}>{subtitle[locale as Locale]}</p>
                    </div>

                    <ButtonLink newTab={true} to={link} variant={"secondary"} className={styles.documentBtn}>
                      {t("sprawdź")}
                    </ButtonLink>
                  </Stack>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { DocumentsSlider };
