import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  return <Context.Provider value={{ openMenu, setOpenMenu }}>{children}</Context.Provider>;
};
