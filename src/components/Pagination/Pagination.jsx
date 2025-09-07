import { useCallback, useMemo } from "react";
import "./Pagination.css";
import { Link, useSearchParams } from "react-router-dom";

const Pagination = ({ ...props }) => {
  const { totalItems, itemsPerPage, pageCount } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    const pageNum = page ? parseInt(page, 10) : 1;
    return pageNum > 0 ? pageNum : 1;
  }, [searchParams]);

  // totalItems: 전체 아이템 수
  // itemsPerPage: 페이지당 아이템 수
  // pageCount: 한번에 보여줄 페이지 번호 수
  // currentPage: 현재 페이지 번호
  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  ); //총 페이지 수 계산
  // 페이지 그룹 계산
  const { pages } = useMemo(() => {
    const startPage = Math.floor((currentPage - 1) / pageCount) * pageCount + 1;
    const endPage = Math.min(startPage + pageCount - 1, totalPages);

    const pageArray = [];
    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i);
    }

    return {
      pages: pageArray,
    };
  }, [currentPage, pageCount, totalPages]);

  const noPrev = currentPage <= 1;
  const noNext = currentPage >= totalPages;

  const handlePageChange = useCallback(
    (pageNum) => {
      if (pageNum >= 1 && pageNum <= totalPages && pageNum !== currentPage) {
        // 현재 URL의 다른 파라미터들을 유지하면서 page만 변경
        const newParams = new URLSearchParams(searchParams);
        newParams.set("page", pageNum.toString());
        setSearchParams(newParams);
      }
    },
    [currentPage, totalPages, searchParams, setSearchParams]
  );
  const handlePrevPage = useCallback(() => {
    if (!noPrev) {
      handlePageChange(currentPage - 1);
    }
  }, [noPrev, currentPage, handlePageChange]);

  const handleNextPage = useCallback(() => {
    if (!noNext) {
      handlePageChange(currentPage + 1);
    }
  }, [noNext, currentPage, handlePageChange]);

  return (
    <div className="pagination_wrapper">
      <ul>
        <li
          className={`move ${noPrev ? "invisible" : ""}`}
          onClick={handlePrevPage}
        >
          &lt;
        </li>
        {pages.map((pageNum) => {
          return (
            <li
              key={pageNum}
              className={`page ${currentPage === pageNum ? "active" : ""}`}
            >
              {pageNum <= totalPages && (
                <Link to={`?page=${pageNum}`}>{pageNum}</Link>
              )}
            </li>
          );
        })}
        <li
          className={`move ${noNext ? "invisible" : ""}`}
          onClick={handleNextPage}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
