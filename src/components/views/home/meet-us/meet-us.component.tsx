import styles from "./meet-us.module.scss";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "@design-system/layout/utilities";
import { ButtonLink } from "@components/shared/button/button-link.component";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import * as React from "react";

function MeetUs() {
  const { t } = useTranslation("home");

  const imageBasePath = "/assets/images/home/slider/";

  const sliderImages = [
    {
      url: `${imageBasePath}1.jpg`,
      alt: "Slider 1",
      width: 800,
      height: 435,
    },
    {
      url: `${imageBasePath}2.jpg`,
      alt: "Slider 2",
      width: 800,
      height: 435,
    },
    {
      url: `${imageBasePath}3.jpg`,
      alt: "Slider 3",
      width: 800,
      height: 435,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <div className={styles.sliderWrapper}>
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className={styles.swiper}
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <Image
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout={"responsive"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Stack className={styles.content} space={"3XL"}>
          <h2 className={styles.title}>{t("meetUs.title")}</h2>
          <p className={styles.subtitle}>{t("meetUs.subtitle")}</p>
          <ButtonLink to={"o-nas"} className={styles.button}>
            {t("meetUs.button")}
          </ButtonLink>
        </Stack>
      </Container>
    </div>
  );
}

export { MeetUs };
