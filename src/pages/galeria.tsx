import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetServerSideProps,  } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GalleryView } from "@components/views/gallery";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";
import { blogConfig, BlogItem } from "@components/views/gallery/blog/blog.config";

type GalleryPageProps = {
  paginatedItems: BlogItem[]
  currentPage: number;
  totalItems: number;
};

const PAGE_SIZE = 4;

export default function GalleryPage({ paginatedItems, currentPage, totalItems }: GalleryPageProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.gallery.title")} description={t("seo.gallery.description")} />
      <BaseLayout>
        <GalleryView paginatedItems={paginatedItems} currentPage={currentPage} totalItems={totalItems}/>
      </BaseLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const page = parseInt(query.page as string) || 1;
  const totalItems = blogConfig.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedItems = blogConfig.slice(startIndex, startIndex + PAGE_SIZE);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      currentPage,
      totalItems,
      paginatedItems,
    },
  };
};