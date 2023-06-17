import { createContext, useContext } from "react";
import { dataReducer, initialState } from "../reducer/dataReducer";
import { useImmerReducer } from "use-immer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useImmerReducer(dataReducer, initialState);

  const dataContext = {
    dataState,
    dataDispatch,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
