import styles from "./blog.module.scss";
import { BlogItem } from "@components/views/gallery/blog/blog.config";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import { useRouter } from "next/router";
import { Locale } from "@customTypes/pages";
import ZoomIcon from "@components/shared/icons/zoom.icon";
import { SliderFullscreen } from "@components/shared/slider/fullscreen-slider.component";
import { useState } from "react";
import Pagination from "@components/shared/pagination/pagination.component";

const PAGE_SIZE = 4;

type BlogProps = {
  currentPage: number;
  paginatedItems: BlogItem[];
  totalItems: number;
};


function Blog({ currentPage, paginatedItems, totalItems }: BlogProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [sliderData, setSliderData] = useState<BlogItem["images"]>([]);
  const [startingSlide, setStartingSlide] = useState(0);

  const { push, pathname, query } = useRouter();

  const handleOpenGallery = (sliderData: BlogItem["images"], slide: number) => {
    setIsGalleryOpen(true);
    setSliderData(sliderData);
    setStartingSlide(slide);
  };

  const handlePageChange = (newPage: number) => {
    const isFirstPage = newPage === 1;
    const updatedQuery = { ...query };

    if (isFirstPage) {
      delete updatedQuery.page;
    } else {
      updatedQuery.page = String(newPage);
    }

    push({ pathname, query: updatedQuery }, undefined, { scroll: false });
  };


  return (
    <div className={styles.wrapper}>
      {paginatedItems.map((item, index) => {
        return <BlogSection item={item} key={index} onClick={handleOpenGallery} />;
      })}

      <Pagination
        totalItems={totalItems}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {isGalleryOpen && (
        <SliderFullscreen onClose={() => setIsGalleryOpen(false)} images={sliderData} startingSlide={startingSlide} />
      )}
    </div>
  );
}

type BlogSectionProps = {
  item: BlogItem;
  onClick: (sliderData: any, slide: number) => void;
};

function BlogSection(props: BlogSectionProps) {
  const { item, onClick } = props;
  const { locale } = useRouter();

  const title = item.title[locale as Locale];
  const subtitle = item.subtitle[locale as Locale];
  return (
    <div className={styles.sectionWrapper}>
      <Container className={styles.gridWrapper}>
        <div className={styles.gridItem}>
          {title} {subtitle ? <span className={styles.subtitle}>{item.subtitle[locale as Locale]}</span> : null}
        </div>
        {item.images.slice(0, 4).map((image, index) => (
          <div className={styles.gridItem} key={image.alt} onClick={() => onClick(item.images, index)}>
            <div className={styles.imageWrapper}>
              <div className={styles.hoverOverlay}>
                <ZoomIcon className={styles.zoomIcon} />
              </div>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                style={{
                  objectFit: "cover",
                }}
                loading={"lazy"}
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export { Blog };
