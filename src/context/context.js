import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setopenMenu] = useState(false);
  const [openFilters, setopenFilters] = useState(false);

  return (
    <Context.Provider
      value={{ openMenu, setopenMenu, openFilters, setopenFilters }}
    >
      {children}
    </Context.Provider>
  );
};
