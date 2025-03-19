import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";
import { CSRView } from "@components/views/csr";

export default function GalleryPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.csr.title")} description={t("seo.csr.description")} />
      <BaseLayout>
        <CSRView/>
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
