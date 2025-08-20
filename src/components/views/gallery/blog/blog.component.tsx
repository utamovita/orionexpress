import styles from "./blog.module.scss";
import { GalleryPost, GalleryImage } from "@sanity/lib/queries";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import { useRouter } from "next/router";
import { Locale } from "@customTypes/pages";
import ZoomIcon from "@components/shared/icons/zoom.icon";
import dynamic from "next/dynamic";
import Pagination from "@components/shared/pagination/pagination.component";
import { useBlogGallery } from "./use-blog-gallery.hook";
import { useRef } from "react";

const SliderFullscreen = dynamic(
  () => import("@components/shared/slider/fullscreen-slider.component").then((mod) => mod.SliderFullscreen),
  { ssr: false },
);

const PAGE_SIZE = 4;

type BlogProps = {
  posts: GalleryPost[];
};

function Blog({ posts }: BlogProps) {
  const blogWrapperRef = useRef<HTMLDivElement>(null);

  const {
    isLoading,
    currentPage,
    totalItems,
    paginatedItems,
    galleryState,
    handlePageChange,
    openGallery,
    closeGallery,
  } = useBlogGallery({ posts, scrollRef: blogWrapperRef });

  return (
    <div className={styles.wrapper} ref={blogWrapperRef}>
      {paginatedItems.map((item) => (
        <BlogSection item={item} key={item._id} onClick={openGallery} />
      ))}

      <Pagination
        totalItems={totalItems}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isLoading={isLoading}
      />

      {galleryState.isOpen && (
        <SliderFullscreen
          onClose={closeGallery}
          images={galleryState.sliderData}
          startingSlide={galleryState.startingSlide}
        />
      )}
    </div>
  );
}

type BlogSectionProps = {
  item: GalleryPost;
  onClick: (images: GalleryImage[], slide: number) => void;
};

function BlogSection(props: BlogSectionProps) {
  const { item, onClick } = props;
  const { locale } = useRouter();

  const title = item.title[locale as Locale];
  const subtitle = item.subtitle ? item.subtitle[locale as Locale] : null;

  return (
    <div className={styles.sectionWrapper}>
      <Container className={styles.gridWrapper}>
        <div className={styles.gridItem}>
          {title} {subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
        </div>
        {item.images.slice(0, 4).map(
          (image, index) =>
            image.imageUrl && (
              <div className={styles.gridItem} key={image.alt} onClick={() => onClick(item.images, index)}>
                <div className={styles.imageWrapper}>
                  <div className={styles.hoverOverlay}>
                    <ZoomIcon className={styles.zoomIcon} />
                  </div>
                  <Image src={image.imageUrl} alt={image.alt} fill style={{ objectFit: "cover" }} loading={"lazy"} />
                </div>
              </div>
            ),
        )}
      </Container>
    </div>
  );
}

export { Blog };
