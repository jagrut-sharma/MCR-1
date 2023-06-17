import { ACTIONS } from "../utils/ACTIONS";
import { dataBooks } from "../utils/dataBooks";

export const initialState = {
  currReading: dataBooks.filter(({ category }) => category === "currReading"),
  yetToRead: dataBooks.filter(({ category }) => category === "yetToRead"),
  readList: dataBooks.filter(({ category }) => category === "readList"),
  bookList: dataBooks,
};

export const dataReducer = (draft, action) => {
  if (action.type === ACTIONS.CHANGE_CATEGORY) {
    const { oldCategory, newList, book, newCategory } = action.payload;

    draft[oldCategory] = newList;

    if (newCategory === "bookList") {
      draft.bookList = draft.bookList.map((sample) =>
        sample._id === book._id ? { ...book, category: "none" } : sample
      );
    } else {
      draft[newCategory].push(book);
    }
  }
};
