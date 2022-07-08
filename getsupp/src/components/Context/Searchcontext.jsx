import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchitem, setSearchitem] = useState("");

  const handlechange = (value) => {
      setSearchitem(value);
  };

  return (
    <SearchContext.Provider value={{ searchitem, handlechange }}>
      {children}
    </SearchContext.Provider>
  );
};
