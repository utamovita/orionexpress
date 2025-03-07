import * as React from "react";
import { ModalDialog } from "@components/shared/modal-dialog/modal-dialog.component";
import { BlogItem } from "@components/views/gallery/blog/blog.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

import styles from "./fullscreen-slider.module.scss";

type SliderFullscreenProps = {
  onClose(): void;
  images: BlogItem["images"];
  startingSlide: number;
};

function SliderFullscreen(props: SliderFullscreenProps) {
  const { onClose: closePopup, images, startingSlide } = props;

  return (
    <ModalDialog.Overlay>
      <ModalDialog isOpen onClose={closePopup} isDismissable fullWidth>
        <Swiper navigation={true} modules={[Navigation]} className={styles.swiper} initialSlide={startingSlide}>
          {images.map((image) => (
            <SwiperSlide key={image.alt} className={styles.swiperSlide}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.url} alt={image.alt} className={styles.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ModalDialog>
    </ModalDialog.Overlay>
  );
}

export { SliderFullscreen };
