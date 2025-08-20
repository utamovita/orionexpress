import { useTranslation } from "next-i18next";
import styles from "./pagination.module.scss";
import cx from "classnames";
import { Spinner } from "@components/shared/spinner/spinner.component";

type PaginationProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
};

export default function Pagination({
  totalItems,
  currentPage,
  onPageChange,
  pageSize,
  isLoading = false,
}: PaginationProps) {
  const { t } = useTranslation("common");

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      {isLoading ? (
        <div className={styles.loading}>
          <Spinner show={true} customColor={"var(--colorTextLink)"} />
        </div>
      ) : null}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        type={"button"}
        className={cx(styles.btn, styles.prev)}
      >
        {t("pagination.prev")}
        {/* eslint-disable @next/next/no-img-element */}
        <img src={"/assets/images/icons/arrows.png"} alt={t("pagination.prev")} />
      </button>

      <span>
        {currentPage} {t("pagination.of")} {totalPages}
      </span>

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        type={"button"}
        className={cx(styles.btn, styles.next)}
      >
        {t("pagination.next")}
        {/* eslint-disable @next/next/no-img-element */}
        <img src={"/assets/images/icons/arrows.png"} alt={t("pagination.next")} />
      </button>
    </div>
  );
}
