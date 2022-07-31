import React, { FC } from "react";

interface PageNumsProps {
  currentPage: number;
  pagesCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const PageNums: FC<PageNumsProps> = ({
  currentPage,
  pagesCount,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="text-center">
      {currentPage > 1 && (
        <button
          className="bg-white bg-opacity-60 rounded-md px-3 py-2"
          onClick={onDecrement}
        >
          Стр. {currentPage - 1}
        </button>
      )}
      <span className="text-white mx-3">Стр. {currentPage}</span>
      {currentPage < pagesCount && (
        <button
          className="bg-white bg-opacity-60 rounded-md px-3 py-2"
          onClick={onIncrement}
        >
          Стр. {currentPage + 1}
        </button>
      )}
    </div>
  );
};

export default PageNums;
