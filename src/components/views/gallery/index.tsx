import { MainBanner } from "./main-banner/main-banner.component";
import { Blog } from "./blog/blog.component";
import { GalleryPost } from "@sanity/lib/queries"; // Używamy nowego typu

type GalleryViewProps = {
  posts: GalleryPost[];
};

function GalleryView({ posts }: GalleryViewProps) {
  return (
    <>
      <MainBanner />
      <Blog posts={posts} />
    </>
  );
}

export { GalleryView };
