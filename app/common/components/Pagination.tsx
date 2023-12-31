import React, { FC } from 'react';

// !TODO: pagination not completed

const pageNumbers = [1, 2, 3];

export const Pagination: FC = () => (
  <div className="flex justify-center mt-10 space-x-1">
    <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    <button
      className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
      disabled
    >
      Prev
    </button>

    {pageNumbers.map(pageNumber => (
      <button
        key={pageNumber}
        className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600"
      >
        {pageNumber}
      </button>
    ))}

    <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
      Next
    </button>

    <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
);
