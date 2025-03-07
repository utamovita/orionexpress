import { HomePageView } from "@components/views/home";
import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import React from "react";

export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.home.title")} description={t("seo.home.description")} />
      <BaseLayout>
        <HomePageView />
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home", "validation", "forms"])),
    },
  };
}
