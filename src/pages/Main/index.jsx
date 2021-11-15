import React, { useContext } from "react";
import { Context } from "../../context/context";

import SideBar from "../../components/SideBar";
import SideBar2 from "../../components/SideBar2";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

import { Container, MainBody, MainContainer } from "./styles";

function Main() {

  return (
    <Container>
      <SideBar />
      <SideBar2 />
      <MainBody>
        <Header />
        <MainContainer>
          <Filters />
          <Cards />
        </MainContainer>
        <Footer />
      </MainBody>
    </Container>
  );
}

export default Main;
