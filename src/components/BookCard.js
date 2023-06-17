import React from "react";

import { useDataContext } from "../context/DataContext";
import { ACTIONS } from "../utils/ACTIONS";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function BookCard({ book }) {
  const { dataDispatch, dataState } = useDataContext();

  const handleSelect = (e) => {
    const oldCategory = book.category === "none" ? "bookList" : book.category;
    const newCategory = e.target.value === "none" ? "bookList" : e.target.value;
    const newBook = { ...book, category: newCategory };

    let newList;

    if (oldCategory === "bookList") {
      newList = dataState[oldCategory].map((sample) =>
        sample._id === book._id ? { ...book, category: newCategory } : sample
      );
    } else {
      newList = dataState[oldCategory].filter(({ _id }) => book._id !== _id);
    }

    dataDispatch({
      type: ACTIONS.CHANGE_CATEGORY,
      payload: { book: newBook, newList, newCategory, oldCategory },
    });
  };

  return (
    <div className="bg-slate-200 p-2">
      <img
        src={book.img}
        alt={book.name}
        className="w-[10rem] h-[15rem] object-contain"
      />
      <p className="text-xl font-bold mt-2">
        {book.name.length > 12
          ? `${book.name.slice(0, 12) + "..."}`
          : book.name}
      </p>
      <p className="text-md">{book.author}</p>

      <select
        name="category"
        id="category"
        className="mt-2"
        value={book.category}
        onChange={handleSelect}
      >
        <option value="readList">Read</option>
        <option value="currReading">Currently Reading</option>
        <option value="yetToRead">Yet to Read</option>
        <option value="none">None</option>
      </select>

      {/* <FormControl size="small" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label" className="mt-4">
          Shelf
        </InputLabel>
        <Select
          name="category"
          id="category"
          labelId="demo-simple-select-label"
          className="mt-2"
          value={book.category}
          onChange={handleSelect}
          label="category"
        >
          <MenuItem value="readList">Read</MenuItem>
          <MenuItem value="currReading">Currently Reading</MenuItem>
          <MenuItem value="yetToRead">Yet to Read</MenuItem>
          <MenuItem value="none">None</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}
