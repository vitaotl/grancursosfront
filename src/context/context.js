import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setopenMenu] = useState(false);

  return <Context.Provider value={{ openMenu, setopenMenu }}>{children}</Context.Provider>;
};
