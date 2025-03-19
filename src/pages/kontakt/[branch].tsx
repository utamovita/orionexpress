import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { branchData, BranchData } from "@components/views/contact/branch/branch-data";
import { BranchView } from "@components/views/contact/branch/branch.component";
import { NextSeo } from "next-seo";
import { BaseLayout } from "@design-system/layout/base-layout.component";
import { useTranslation } from "next-i18next";

import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type BranchPageProps = {
  data: BranchData;
}

const BranchPage: NextPage<BranchPageProps> = ({ data }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.documents.title")} description={t("seo.documents.description")} />
      <BaseLayout>
        <BranchView branchData={data} />
      </BaseLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = branchData.map((branch) => ({
    params: { branch: branch.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BranchPageProps> = async ({ params, locale }) => {
  const branchSlug = params?.branch as string;

  const data = branchData.find((branch) => branch.slug === branchSlug);

  if (!data) {
    return { notFound: true };
  }

  return { props: {  ...(await serverSideTranslations(locale as string, ["common", "validation", "forms"])), data } };
};

export default BranchPage;
