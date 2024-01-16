import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import Button from "components/Button";
import Dropdown from "components/Dropdown";

import usePagination, { dots } from "utilities/hooks/usePagination";

const Pagination = (props) => {
  const {
    currentPage,
    totalCount,
    siblingCount = 1,
    showFirst = false,
    showLast = false,
    pageSize,
    onPageChange,
    onPageSizeChange,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  const displayingFrom = (props.currentPage - 1) * props.pageSize + 1;

  const displayingTo =
    props.currentPage * props.pageSize < props.totalCount
      ? props.currentPage * props.pageSize
      : props.totalCount;

  const pageSizes = [5, 10, 15];

  const changePage = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const changePagSize = (size) => {
    if (onPageSizeChange) {
      onPageSizeChange(size);
      onPageChange(1);
    }
  };

  const next = () => {
    if (onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const previous = () => {
    if (onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className={classNames("card", "lg:flex", className)}>
      <nav className="flex items-center flex-wrap gap-2 p-5">
        <Button
          color="secondary"
          disabled={currentPage === 1}
          onClick={previous}
        >
          Prev
        </Button>
        {showFirst ? (
          <Button
            color={currentPage === 1 ? "primary" : "secondary"}
            onClick={() => changePage(1)}
          >
            First
          </Button>
        ) : null}
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === dots) {
            return (
              <span key={index} className="la la-ellipsis-h text-2xl"></span>
            );
          }

          return (
            <Button
              key={index}
              color={pageNumber === currentPage ? "primary" : "secondary"}
              outlined={pageNumber === currentPage ? false : true}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
        {showLast ? (
          <Button
            color={currentPage === lastPage ? "primary" : "secondary"}
            onClick={() => changePage(lastPage)}
          >
            Last
          </Button>
        ) : null}
        <Button
          color="secondary"
          disabled={currentPage === lastPage}
          onClick={next}
        >
          Next
        </Button>
      </nav>
      <div className="flex items-center ltr:ml-auto rtl:mr-auto p-5 border-t lg:border-t-0 border-divider">
        Displaying {displayingFrom}-{displayingTo} of {totalCount} items
      </div>
      <div className="flex items-center gap-2 p-5 border-t lg:border-t-0 lg:ltr:border-l lg:rtl:border-r border-divider">
        <span>Show</span>
        <Dropdown
          content={
            <div className="dropdown-menu">
              {pageSizes.map((size) => (
                <button key={size} onClick={() => changePagSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          }
        >
          <Button color="secondary" outlined className="uppercase">
            {pageSize}
            <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
          </Button>
        </Dropdown>
        <span>items</span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  showFirst: PropTypes.bool,
  showLast: PropTypes.bool,
  pageSize: PropTypes.number,
  className: PropTypes.string,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
};

export default Pagination;
