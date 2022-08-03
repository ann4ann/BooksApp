import React, { FC } from "react";
import { IBook } from "../../../types/types";

interface BookItemProps {
  book: IBook;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
  return (
    <div className="my-3 mx-4 w-56 h-72 flex flex-col rounded-lg relative bg-slate-600 bg-opacity-25 overflow-hidden">
      {book?.formats["image/jpeg"] && (
        <img
          className="absolute w-56 h-auto rounded-lg"
          src={book?.formats["image/jpeg"]?.replace("small.jpg", "medium.jpg")}
          alt="img"
        />
      )}
      <div className="p-4 max-h-32 bg-slate-700 bg-opacity-80 rounded-t-lg z-10">
        <h2 className="text-xl font-semibold text-orange-50 h-full overflow-y-clip">
          {book?.title}
        </h2>
      </div>
      <div className=" grow flex flex-col justify-between z-10">
        <p className="p-4 bg-white bg-opacity-70">
          Author: {book?.authors[0]?.name}
        </p>
        <button className="mx-auto mb-3 px-4 py-2 bg-white bg-opacity-60 uppercase rounded-md">
          Открыть
        </button>
      </div>
    </div>
  );
};

export default BookItem;
