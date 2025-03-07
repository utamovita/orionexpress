import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GalleryView } from "@components/views/gallery";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";

export default function GalleryPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.gallery.title")} description={t("seo.gallery.description")} />
      <BaseLayout>
        <GalleryView />
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
