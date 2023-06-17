import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDataContext } from "../context/DataContext";
import BookCard from "../components/BookCard";

export default function Search() {
  const {
    dataState: { bookList },
  } = useDataContext();

  const [inputText, setInputText] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const filteredBookList = bookList.filter(({ name }) =>
    name.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <>
      <div className="flex shadow-md gap-8 relative justify-center">
        <NavLink
          to={"/"}
          className={
            "text-3xl p-4 font-Karla hover:bg-slate-300 fixed left-0 top-0 w-[4.7rem] h-[4.7rem] flex items-center rounded-full justify-center"
          }
        >
          <BiArrowBack />
        </NavLink>

        <div className="p-4">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search Here.."
            className="border rounded-lg border-gray-500 self-center p-2"
            value={inputText}
            onChange={handleSearch}
          />
        </div>
      </div>

      <main className="h-[calc(100vh-68px)] flex justify-center my-4 mt-4">
        <div className="text-center">
          <h2 className="text-4xl font-Karla">All Books</h2>
          {filteredBookList.length === 0 && (
            <p className="text-2xl mt-4 font-bold">No book found</p>
          )}
          <div className="flex gap-8 my-4 mx-8 flex-wrap justify-center">
            {filteredBookList.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
