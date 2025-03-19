import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContactView } from "@components/views/contact";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";

export default function ContactPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.contact.title")} description={t("seo.contact.description")} />
      <BaseLayout>
        <ContactView />
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
