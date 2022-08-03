import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookShelves from "./components/pages/BookShelves";
import MainPage from "./components/pages/MainPage";
import BooksList from "./components/UI/Books/BooksList";
import Navbar from "./components/UI/Navbar/Navbar";
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
      setPageCount(response.data.count / response.data.results.length);
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
      setPage((prevState) => prevState - 1);
      // fetchBooks();
    }
  };

  return (
    <BrowserRouter>
      <div className="bg-zinc-800 min-h-screen font-serif">
        <Navbar />
        <div className="py-5 px-7">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bookshelves" element={<BookShelves />} />
            <Route
              path="/bookslist"
              element={
                <BooksList
                  books={books}
                  page={page}
                  pageCount={pageCount}
                  pageIncrement={pageIncrementHandler}
                  pageDecrement={pageDecrementHandler}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
