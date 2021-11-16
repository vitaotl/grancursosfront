import React, { useContext } from "react";
import { Context } from "../../context/context";

import SideBar from "../../components/SideBar";
import ResponsiveSidebar from  '../../components/ResponsibeSidebar'
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

import { Container, MainBody, MainContainer } from "./styles";

function Main() {
  const { openMenu, setOpenMenu, openFilters, setopenFilters } =
    useContext(Context);

  const handleClick = () => {
    openMenu && setOpenMenu(false);
    openFilters && setopenFilters(false);
  };

  return (
    <Container>
      <SideBar />
      <ResponsiveSidebar />
      <MainBody onClick={handleClick}>
        <Header />
        <MainContainer>
          <Filters />
          <Cards onClick={handleClick} />
        </MainContainer>
        <Footer />
      </MainBody>
    </Container>
  );
}

export default Main;
