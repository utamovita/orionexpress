import { useState, useMemo, RefObject } from "react";
import { useRouter } from "next/router";
import { GalleryPost, GalleryImage } from "@sanity/lib/queries";

const PAGE_SIZE = 4;

type UseBlogGalleryProps = {
  posts: GalleryPost[];
  scrollRef: RefObject<HTMLDivElement>;
};

export function useBlogGallery({ posts, scrollRef }: UseBlogGalleryProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    sliderData: [] as GalleryImage[],
    startingSlide: 0,
  });

  const currentPage = parseInt(router.query.page as string) || 1;
  const totalItems = posts.length;

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return posts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, posts]);

  const handlePageChange = async (newPage: number) => {
    setIsLoading(true);
    const path = newPage === 1 ? "/galeria" : `/galeria?page=${newPage}`;
    await router.push(path, undefined, { scroll: false });
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsLoading(false);
  };

  const openGallery = (images: GalleryImage[], slide: number) => {
    setGalleryState({
      isOpen: true,
      sliderData: images,
      startingSlide: slide,
    });
  };

  const closeGallery = () => {
    setGalleryState({ ...galleryState, isOpen: false });
  };

  return {
    isLoading,
    currentPage,
    totalItems,
    paginatedItems,
    galleryState,
    handlePageChange,
    openGallery,
    closeGallery,
  };
}
