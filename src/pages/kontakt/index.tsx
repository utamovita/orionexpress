import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContactView } from "@components/views/contact";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";
import { getAllBranches, Branch } from "@sanity/lib/queries";

export default function ContactPage({ branches }: { branches: Branch[] }) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.contact.title")} description={t("seo.contact.description")} />
      <BaseLayout>
        <ContactView branches={branches} />
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const branches = await getAllBranches();

  return {
    props: {
      branches,
      ...(await serverSideTranslations(locale as string, ["common", "validation", "forms"])),
    },
    revalidate: 60,
  };
}
