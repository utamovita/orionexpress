import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CareerView } from "@components/views/career";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";

export default function CareerPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.career.title")} description={t("seo.career.description")} />
      <BaseLayout>
        <CareerView />
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "validation", "forms"])),
    },
  };
}
