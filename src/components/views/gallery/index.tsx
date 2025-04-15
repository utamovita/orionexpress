import { MainBanner } from "./main-banner/main-banner.component";
import { Blog } from "./blog/blog.component";
import { BlogItem } from "@components/views/gallery/blog/blog.config";

type GalleryViewProps = {
  currentPage: number;
  paginatedItems: BlogItem[];
  totalItems: number;
};

function GalleryView({ currentPage, paginatedItems, totalItems }: GalleryViewProps) {
  return (
    <>
      <MainBanner />
      <Blog currentPage={currentPage} paginatedItems={paginatedItems} totalItems={totalItems} />
    </>
  );
}

export { GalleryView };
