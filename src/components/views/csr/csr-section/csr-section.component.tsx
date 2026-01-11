import styles from "./csr-section.module.scss";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import { useState } from "react";
import { SliderFullscreen } from "@components/shared/slider/fullscreen-slider.component";
import { Locale } from "@customTypes/pages";
import { useRouter } from "next/router";
import cx from "classnames";
import { CsrPost, GalleryImage } from "@sanity/lib/queries";

type CSRSectionProps = {
  posts: CsrPost[];
};

function CSRSection({ posts }: CSRSectionProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [sliderData, setSliderData] = useState<GalleryImage[]>([]);

  const handleOpenGallery = (sliderData: GalleryImage[]) => {
    setIsGalleryOpen(true);
    setSliderData(sliderData);
  };

  return (
    <div className={styles.wrapper}>
      {posts.map((csrItem, index) => {
        if (csrItem.images.length < 3) return null;
        const isEven = index % 2 !== 0;
        return <CSRPost key={index} data={csrItem} onClick={() => handleOpenGallery(csrItem.images)} isEven={isEven} />;
      })}

      {isGalleryOpen && (
        <SliderFullscreen onClose={() => setIsGalleryOpen(false)} images={sliderData} startingSlide={0} />
      )}
    </div>
  );
}

type CSRPostProps = {
  data: CsrPost;
  onClick: (sliderData: GalleryImage[]) => void;
  isEven: boolean;
};

function CSRPost(props: CSRPostProps) {
  const { data, onClick, isEven } = props;
  const { locale } = useRouter();

  return (
    <div className={cx(styles.postWrapper, { [styles.isEven]: isEven })}>
      <Container>
        <div className={cx(styles.post, { [styles.isEven]: isEven })}>
          <div className={styles.imgSection} onClick={() => onClick(data.images)}>
            <div className={styles.columnsSection}>
              <div className={styles.leftImgColumn}>
                <div className={styles.imgWrapper}>
                  <Image className={styles.postImg} src={data.images[1].imageUrl} alt="csr" fill />
                </div>
                <div className={styles.imgWrapper}>
                  <Image className={styles.postImg} src={data.images[2].imageUrl} alt="csr" fill />
                </div>
              </div>
              <div className={styles.rightImgColumn}>
                <div className={styles.imgWrapper}>
                  <Image className={styles.postImg} src={data.images[0].imageUrl} alt="csr" fill />
                </div>
              </div>
            </div>
            <Thumbnails images={data.images} />
          </div>
          <div className={styles.textSection}>
            <h3 className={styles.postTitle}>{data.title[locale as Locale]}</h3>
            <p className={styles.postDescription}>{data.description[locale as Locale]}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export { CSRSection };

type ThumbnailsProps = {
  images: GalleryImage[];
};

function Thumbnails({ images }: ThumbnailsProps) {
  const MAX_IMAGES = 6;

  const trimmedImages = images.slice(0, MAX_IMAGES);
  return (
    <div className={styles.thumbnailsWrapper}>
      {trimmedImages.map((img, index) => (
        <div key={index} className={styles.thumbnail}>
          <Image className={styles.thumbnailImg} src={img.imageUrl} alt={img.alt} fill />
        </div>
      ))}
    </div>
  );
}
