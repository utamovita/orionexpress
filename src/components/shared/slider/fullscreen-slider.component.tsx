import * as React from "react";
import { BlogItem } from "@components/views/gallery/blog/blog.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import styles from "./fullscreen-slider.module.scss";
import CloseIcon from "@components/shared/icons/close-icon";
import { usePreventScroll } from "react-aria";
import { useEffect } from "react";
import { useRouter } from "next/router";

type SliderFullscreenProps = {
  onClose(): void;
  images: BlogItem["images"];
  startingSlide: number;
};

function SliderFullscreen(props: SliderFullscreenProps) {
  const { onClose: closePopup, images, startingSlide } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (closePopup) closePopup();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, closePopup]);

  usePreventScroll();

  return (
    <div className={styles.overlay}>
      <button className={styles.closeButton} onClick={closePopup}>
        <CloseIcon />
      </button>
      <Swiper navigation={true} modules={[Navigation]} className={styles.swiper} initialSlide={startingSlide}>
        {images.map((image) => (
          <SwiperSlide key={image.alt} className={styles.swiperSlide}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt={image.alt} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { SliderFullscreen };
