import React from "react";
import BookShelf from "../UI/BookShelves/BookShelf";
import { сategories } from "../UI/BookShelves/category";

const BookShelves = () => {
  return (
    <div>
      <p className="text-white block">BookShelves</p>
      {сategories.map((item) => (
        <BookShelf categoryProps={item} key={item.title} />
      ))}
    </div>
  );
};

export default BookShelves;
