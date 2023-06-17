import React from "react";
import { useDataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";
import BookCard from "../components/BookCard";

export default function Home() {
  const {
    dataState: { currReading, yetToRead, readList },
  } = useDataContext();

  return (
    <>
      <div className="flex justify-between shadow-md font-Karla">
        <h1 className="text-3xl font-bold p-4 font-Rubik">Book Shelf</h1>
        <NavLink
          to={"/search"}
          className={"text-3xl p-4 font-Karla hover:bg-slate-300"}
        >
          Search
        </NavLink>
      </div>

      <main className="h-[calc(100vh-68px)] flex flex-col items-center my-4">
        <div className="text-center">
          <h2 className="text-2xl font-Karla">Currently Reading</h2>
          {currReading.length === 0 && (
            <p className="text-xl mt-4 bg-gray-700 font-bold text-slate-50">
              Add some books
            </p>
          )}
          <div className="flex gap-8 my-4 mx-8 flex-wrap justify-center ">
            {currReading.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>

        <div className="text-center border-t border-t-gray-300 pt-4">
          <h2 className="text-2xl font-Karla">Yet to Read</h2>
          {yetToRead.length === 0 && (
            <p className="text-xl mt-4 bg-gray-700 font-bold text-slate-50">
              Add some books
            </p>
          )}
          <div className="flex gap-8 my-4 mx-8 flex-wrap justify-center">
            {yetToRead.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>

        <div className="text-center mx-8 border-t border-t-gray-300 pt-4">
          <h2 className="text-2xl font-Karla">Read</h2>
          {readList.length === 0 && (
            <p className="text-xl mt-4 bg-gray-700 font-bold text-slate-50">
              Add some books
            </p>
          )}
          <div className="flex gap-8 my-4 mx-8 flex-wrap justify-center">
            {readList.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
