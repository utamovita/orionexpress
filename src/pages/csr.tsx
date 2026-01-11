import { BaseLayout } from "@design-system/layout/base-layout.component";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { useTranslation } from "next-i18next";
import { CSRView } from "@components/views/csr";
import { CsrPost, getAllCsrPosts } from "@sanity/lib/queries";

type CSRPageProps = {
  posts: CsrPost[];
};

export default function CSRPage({ posts }: CSRPageProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("seo.csr.title")} description={t("seo.csr.description")} />
      <BaseLayout>
        <CSRView posts={posts} />
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const posts = await getAllCsrPosts();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      posts,
    },
    revalidate: 60,
  };
}
