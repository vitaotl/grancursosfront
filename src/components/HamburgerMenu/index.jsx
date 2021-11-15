import React, { useContext } from "react";
import { Context } from "../../context/context";

import { StyledBurger } from "./styles.js";

function HamburgerMenu() {
  const { openMenu, setOpenMenu } = useContext(Context);
  return (
    <StyledBurger open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

export default HamburgerMenu;
