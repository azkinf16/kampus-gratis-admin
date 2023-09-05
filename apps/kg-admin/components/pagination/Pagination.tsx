import React from 'react';
import { TPagination } from '@/types';
import { IconArrowLeft } from '../icons/ic-arrow-left';
import { IconArrowRight } from '../icons/ic-arrow-right';

const Pagination = ({ currentPage, totalPages, onPageChange }: TPagination) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    // Case when totalPages is less than 4
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= 2) {
      // First page, next page, third page, triple dots, last page
      pageNumbers.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 1) {
      // First page, triple dots, second-to-last page, last page
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      // First page, triple dots, current page, next page, last page
      pageNumbers.push(1, '...', currentPage, currentPage + 1, totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center my-4">
      <button
        className="group p-2 rounded-md hover:bg-primary-base text-sm disabled:bg-white"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <IconArrowLeft />
      </button>
      <div className='mx-2'>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-2 rounded-md text-sm font-semibold text-neutral-500 ${
              page === currentPage
                ? 'bg-primary-base text-white'
                : 'hover:bg-primary-base hover:text-white'
            }`}
            onClick={() => {
              if (typeof page === 'number') {
                handlePageClick(page);
              }
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="group p-2 text-sm rounded-md hover:bg-primary-base disabled:bg-white"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <IconArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
