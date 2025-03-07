import React from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./agreements.module.scss";
import { useTranslation } from "next-i18next";

export type AgreementsProps = {
  isInvalid?: boolean;
};

function Agreements({ isInvalid = false }: AgreementsProps) {
  const { t } = useTranslation("forms");
  return (
    <p className={cx(styles.text, { [styles.invalid]: isInvalid })}>
      {t("acceptOur")}{" "}
      <Link href={"/dokumenty"} className={styles.link}>
        {t("privacyPolicy")}
      </Link>
      .
    </p>
  );
}

export { Agreements };
