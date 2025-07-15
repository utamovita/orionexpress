import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import { BaseLayout } from "@design-system/layout/base-layout.component";
import { BranchView } from "@components/views/contact/branch/branch.component";
import {
  getAllBranchSlugs,
  getBranchBySlug,
  Branch,
} from "@sanity/lib/queries";

type BranchPageProps = {
  data: Branch;
};

const BranchPage: NextPage<BranchPageProps> = ({ data }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={data.title.pl} description={t("seo.contact.description")} />
      <BaseLayout>
        <BranchView branchData={data} />
      </BaseLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = await getAllBranchSlugs();

  const paths = locales
    ? locales.flatMap((locale) =>
      slugs.map(({ slug }) => ({
        params: { branch: slug },
        locale,
      })),
    )
    : slugs.map(({ slug }) => ({
      params: { branch: slug },
    }));

  return { paths, fallback: "blocking" }; // Używamy 'blocking' lub 'true' dla lepszego UX
};

export const getStaticProps: GetStaticProps<BranchPageProps> = async ({ params, locale }) => {
  const branchSlug = params?.branch as string;

  // Pobieramy dane dla konkretnego slugu z Sanity
  const data = await getBranchBySlug(branchSlug);
  const translations = await serverSideTranslations(locale as string, ["common", "validation", "forms"]);

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      ...translations,
      data,
    },
    revalidate: 60, // Opcjonalnie: odświeżaj dane co 60 sekund (Incremental Static Regeneration)
  };
};

export default BranchPage;