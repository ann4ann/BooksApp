import React, { FC } from "react";
import { IBook } from "../../../types/types";
import PageNums from "../../common/PageNums";
import BookItem from "./BookItem";

interface BooksListProps {
  books: IBook[];
  page: number;
  pageCount: number;
  pageIncrement: () => void;
  pageDecrement: () => void;
}

const BooksList: FC<BooksListProps> = ({
  books,
  page,
  pageCount,
  pageIncrement,
  pageDecrement,
}) => {
  return (
    <div className="m-auto max-w-6xl">
      <h1 className="text-2xl text-white text-center uppercase p-4">Книги</h1>
      <PageNums
        currentPage={page}
        pagesCount={pageCount}
        onDecrement={pageDecrement}
        onIncrement={pageIncrement}
      />
      <div className="flex justify-center flex-wrap">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <PageNums
        currentPage={page}
        pagesCount={pageCount}
        onDecrement={pageDecrement}
        onIncrement={pageIncrement}
      />
    </div>
  );
};

export default BooksList;
