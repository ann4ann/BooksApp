import axios from "axios";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { IBook, IBookPageData } from "../../../types/types";
import BookItem from "../Books/BookItem";
import { categoryProps } from "./category";

interface BookShelfProps {
  categoryProps: categoryProps;
}

const BookShelf: FC<BookShelfProps> = ({ categoryProps }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksCount, setBooksCount] = useState<number>(0);
  // const [shelfWidth, setShelfWidth] = useState<number>(1);
  // const resizeObserver = useRef<ResizeObserver>(
  //   new ResizeObserver((entries: ResizeObserverEntry[]) => {
  //     for (let entry of entries) {
  //       setShelfWidth(entry.contentRect.width);
  //     }
  //   })
  // );
  // const shelfRef = useCallback(
  //   (node: HTMLDivElement) => {
  //     if (node !== null) {
  //       resizeObserver.current.observe(node);
  //       //   setShelfWidth(node.getBoundingClientRect().width);
  //       //   console.log(shelfWidth);
  //     }
  //   },
  //   [resizeObserver.current]
  // );

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get<IBookPageData>(
      // `https://gutendex.com/books/?page=1&topic=${categoryProps.searchParams}`
      `https://openlibrary.org/subjects/${categoryProps.searchParams}.json?limit=8`
    );
    setBooks(response.data.works);
    setBooksCount(response.data.work_count);
  };

  const handleScrollNext = () => {
    // console.log(shelfWidth);
    console.log("books count", books.length);
  };
  const handleScrollPrev = () => {};

  return (
    <div
      // ref={shelfRef}
      className="m-auto max-w-5xl relative mb-4"
    >
      <div className="w-full py-3 px-5 flex justify-between bg-lime-400 rounded-t-sm">
        <h1 className="text-2xl text-white text-center uppercase">
          {categoryProps.title}
        </h1>
        <button className="bg-slate-200 px-3 rounded-md">Перейти</button>
      </div>

      <div className="w-full py-2 bg-yellow-400 overflow-x-scroll rounded-b-sm">
        <div className="flex min-w-min">
          {!books[0] && (
            <div className="text-xl uppercase italic my-auto mx-4 w-56 p-10">
              Загружаем лучшие книги категории...
            </div>
          )}
          {books.map((book) => (
            <BookItem key={categoryProps.title + book.key} book={book} />
          ))}
          <div className="my-auto mx-4 w-40 h-40 relative rounded-full bg-white border border-gray-400 bg-opacity-50 hover:animate-pulse hover:bg-lime-400 cursor-pointer">
            <p className="inline-block absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="uppercase font-semibold">Смотреть больше </span>(
              {booksCount} шт.)
            </p>
          </div>
        </div>

        {/* КНОПКИ */}
        {/* <div
          onClick={handleScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 bg-white shadow-sm shadow-slate-400 w-8 h-8 rounded-2xl cursor-pointer text-center font-bold"
        >
          {"<"}
        </div>
        <div
          onClick={handleScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-40 bg-white shadow-sm shadow-slate-400 w-8 h-8 rounded-2xl cursor-pointer text-center font-bold"
        >
          {">"}
        </div> */}
      </div>
    </div>
  );
};

export default BookShelf;
