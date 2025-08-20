// src/pages/galeria.tsx
import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticProps } from "next"; // Zmiana na GetStaticProps
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GalleryView } from "@components/views/gallery";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";
import { getAllGalleryPosts, GalleryPost } from "@sanity/lib/queries"; // Importujemy nowe funkcje i typy

type GalleryPageProps = {
  posts: GalleryPost[];
};

export default function GalleryPage({ posts }: GalleryPageProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.gallery.title")} description={t("seo.gallery.description")} />
      <BaseLayout>
        <GalleryView posts={posts} />
      </BaseLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllGalleryPosts();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      posts,
    },
    revalidate: 60,
  };
};
