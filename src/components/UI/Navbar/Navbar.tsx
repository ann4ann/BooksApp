import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="px-7 text-white bg-slate-600 flex justify-between items-center">
      <div className="text-2xl italic">Книги</div>
      <nav className="text-md py-5 font-bold uppercase flex justify-center">
        <Link to="/">Главная страница</Link>
        <Link className="ml-4" to="/bookshelves">
          Книжные полки
        </Link>
        <Link className="ml-4" to="/bookslist">
          Все книги
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
