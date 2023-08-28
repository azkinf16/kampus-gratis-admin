import React from 'react';
import { TPagination } from '@/types';

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: TPagination) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);
  return (
    <div className="w-full">
      <ul className="flex justify-center text-sm">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? 'bg-primary-base px-2 py-2 rounded-md m-2 shadow-md text-white'
                : 'bg-white m-2 p-2 rounded shadow-md'
            }
          >
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
