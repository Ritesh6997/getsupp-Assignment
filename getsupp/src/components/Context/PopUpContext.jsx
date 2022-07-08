import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupContextProvider = ({ children }) => {
  const [Detail, setDetail] = useState();

    const handleDetail = (value) => {
      console.log(value,"contextvalue")
    setDetail(value);
  };

  return (
    <PopupContext.Provider value={{ Detail, handleDetail }}>
      {children}
    </PopupContext.Provider>
  );
};
