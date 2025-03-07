import { BaseLayout } from "@design-system/layout/base-layout.component";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { DocumentsView } from "@components/views/documents";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";

export default function DocumentsPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.documents.title")} description={t("seo.documents.description")} />
      <BaseLayout>
        <DocumentsView />
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
