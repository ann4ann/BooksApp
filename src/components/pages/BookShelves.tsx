import React from "react";
import BookShelf from "../UI/BookShelves/BookShelf";
import { сategories } from "../UI/BookShelves/category";

const BookShelves = () => {
  return (
    <div>
      <p className="text-white block">BookShelves</p>

      <BookShelf categoryProps={сategories[0]} />
    </div>
  );
};

export default BookShelves;
