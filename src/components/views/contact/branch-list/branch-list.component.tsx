import { branchData } from "../branch/branch-data";
import styles from "./branch-list.module.scss"
import { Container, Stack } from "@design-system/layout/utilities";
import Image from "next/image";
import { Locale } from "@customTypes/pages";
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function BranchList( ) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.titleWrapper}>
          <h2>{t("contact.teamTitle1")}</h2>
          <h3>{t("contact.teamTitle2")}</h3>
        </div>

        <div className={styles.branchList}>
          {branchData.map((branch, index) => (
            <Link href={`/kontakt/${branch.slug}`} key={index} className={styles.branch}>
                <Image
                  src={branch.img}
                  alt={branch.title[locale as Locale]}
                  className={styles.branchImage}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div className={styles.overlay}>
                  <div className={styles.textWrapper}>
                    <Stack space={"XS"} className={styles.stack}>
                        <h3 className={styles.documentTitle}>{branch.title[locale as Locale]}</h3>
                        <h4 className={styles.documentSubtitle}>{branch.address}</h4>
                    </Stack>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export { BranchList };
