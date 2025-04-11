import { Button } from "@components/shared/button/button.component";

type PaginationProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
                                     totalItems,
                                     currentPage,
                                     onPageChange,
                                     pageSize
                                   }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div>
      <Button
        onPress={() => handlePageClick(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Prev
      </Button>

      <span>
        {currentPage} of {totalPages}
      </span>

      <Button
        onPress={() => handlePageClick(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
