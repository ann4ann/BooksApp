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
  const [limit, setLimit] = useState<number>(6);
  const [offset, setOffset] = useState<number>(0);
  const [worksCount, setWorksCount] = useState<number>(1);
  useEffect(() => {
    fetchBooks();
  }, [offset]);

  async function fetchBooks() {
    try {
      const response = await axios.get<IBookPageData>(
        // `https://gutendex.com/books/?page=${page}`
        `https://openlibrary.org/subjects/bestseller.json?limit=${limit}&offset=${offset}`
      );
      setBooks(response.data.works);
      setWorksCount(response.data.work_count);
      console.log(response.data.work_count);
    } catch (e) {
      console.log(e);
    }
  }

  const pageIncrementHandler = () => {
    if (offset + limit < worksCount) {
      setOffset((prevState) => prevState + limit);
      // fetchBooks();
    }
  };
  const pageDecrementHandler = () => {
    if (offset > limit) {
      setOffset((prevState) => prevState - limit);
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
                  page={(offset + limit) / limit}
                  pageCount={Math.round(worksCount / limit)}
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
