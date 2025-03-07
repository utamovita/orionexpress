import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutUsView } from "@components/views/about-us";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";

export default function AboutUsPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.aboutUs.title")} description={t("seo.aboutUs.description")} />
      <BaseLayout>
        <AboutUsView />
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
