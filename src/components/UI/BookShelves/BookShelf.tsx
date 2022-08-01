import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IBook, IBookPageData } from "../../../types/types";
import BookItem from "../Books/BookItem";
import { categoryProps } from "./category";

interface BookShelfProps {
  categoryProps: categoryProps;
}

const BookShelf: FC<BookShelfProps> = ({ categoryProps }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    const response = await axios.get<IBookPageData>(
      `https://gutendex.com/books/?page=1&topic=${categoryProps.searchParams}`
    );
    setBooks(response.data.results);
  };

  return (
    <div className="m-auto max-w-6xl relative">
      <div className="w-full py-3 px-5 flex justify-between bg-lime-400">
        <h1 className="text-2xl text-white text-center uppercase">
          {categoryProps.title}
        </h1>
        <button className="bg-slate-200 px-3 rounded-md">Перейти</button>
      </div>

      <div className="w-full py-2 px-5 bg-yellow-400 overflow-x-scroll">
        <div className="flex min-w-min">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>

        {/* КНОПКИ */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 bg-white w-8 h-8 rounded-2xl cursor-pointer text-center font-bold">
          {"<"}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-40 bg-white w-8 h-8 rounded-2xl cursor-pointer text-center font-bold">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
