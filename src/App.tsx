import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksList from "./components/UI/Books/BooksList";
import { IBook, IBookPageData } from "./types/types";

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  useEffect(() => {
    fetchBooks();
  }, [page]);

  async function fetchBooks() {
    try {
      const response = await axios.get<IBookPageData>(
        `https://gutendex.com/books/?page=${page}`
      );
      setBooks(response.data.results);
      setPageCount(response.data.count);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const pageIncrementHandler = () => {
    if (page < pageCount) {
      setPage((prevState) => prevState + 1);
      // fetchBooks();
    }
  };
  const pageDecrementHandler = () => {
    if (page > 1) {
      setPage((prevState) => prevState + 1);
      // fetchBooks();
    }
  };

  return (
    <div className="bg-zinc-800">
      <BooksList
        books={books}
        page={page}
        pageCount={pageCount}
        pageIncrement={pageIncrementHandler}
        pageDecrement={pageDecrementHandler}
      />
    </div>
  );
}

export default App;
