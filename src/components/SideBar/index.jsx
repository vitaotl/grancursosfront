import React from "react";

import LogoGranCursos from "../../assets/icons/LogoGranCursos.svg";
import Home from "../../assets/icons/Home.svg";
import Path from "../../assets/icons/Path.svg";
import Circle from "../../assets/icons/Circle.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import CheckSquare from "../../assets/icons/CheckSquare.svg";
import MessageSquare from "../../assets/icons/MessageSquare.svg";
import Mail from "../../assets/icons/Mail.svg";
import Layout from "../../assets/icons/Layout.svg";
import Grid from "../../assets/icons/Grid.svg";
import Archive from "../../assets/icons/Archive.svg";
import Droplet from "../../assets/icons/Droplet.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import Sidebar from "../../assets/icons/Sidebar.svg";
import FileText from "../../assets/icons/FileText.svg";
import CheckCircle from "../../assets/icons/CheckCircle.svg";
import Copy from "../../assets/icons/Copy.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";

import { Apps, Container, FirstSection, ImageContainer, Text } from "./styles";

function SideBar() {

  const appsItens = [
    { icon: Mail, name: "Email" },
    { icon: MessageSquare, name: "Chat" },
    { icon: CheckSquare, name: "Todo" },
    { icon: Calendar, name: "Calendar" },
  ];

  const uiElementsItens = [
    { icon: Layout, name: "Grid", arrow: RightArrow },
    { icon: Droplet, name: "Colors" },
    { icon: CreditCard, name: "Card", arrow: RightArrow },
    { icon: Grid, name: "Table" },
    { icon: Archive, name: "Components", arrow: RightArrow },
  ];

  const formsItens = [
    { icon: Copy, name: "Form Elements", arrow: RightArrow },
    { icon: Sidebar, name: "Form Layouts" },
    { icon: FileText, name: "Form Wizard" },
    { icon: CheckCircle, name: "Form Validation" },
  ];

  return (
    <Container >
      <ImageContainer>
        <img alt="img" width="142px" height="30px" src={LogoGranCursos} />
      </ImageContainer>
      <FirstSection>
        <span>
          <div>
            <img alt="img" width="14px" height="15.56px" src={Home} />
            <Text>Dashboard</Text>
          </div>
          <img
            alt="img"
            className="pathImage"
            width="10px"
            height="5px"
            src={Path}
          />
        </span>
        <span>
          <img alt="img" width="14px" height="15.56px" src={Circle} />
          <Text>eCommerce</Text>
        </span>
      </FirstSection>
      <Apps>
        <Text style={{ marginLeft: "10px" }}>APPS</Text>
        <ul>
          {appsItens.map((item) => {
            return (
              <li key={item.name}>
                <div>
                  <img
                    alt="img"
                    width="16px"
                    height="12.87px"
                    src={item.icon}
                  />
                  <Text>{item.name}</Text>
                </div>
              </li>
            );
          })}
        </ul>
      </Apps>
      <Apps style={{ height: "236px" }}>
        <Text style={{ marginLeft: "10px" }}>UI ELEMENTS</Text>
        <ul>
          {uiElementsItens.map((item) => {
            return (
              <li key={item.name}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      alt="img"
                      width="16px"
                      height="16.07px"
                      src={item.icon}
                    />
                  </div>
                  <Text>{item.name}</Text>
                </div>
                {item.arrow && (
                  <img
                    alt="img"
                    style={{ marginRight: "13px" }}
                    width="10px"
                    height="10px"
                    src={item.arrow}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Apps>
      <Apps>
        <Text style={{ marginLeft: "10px" }}>FORMS</Text>
        <ul>
          {formsItens.map((item) => {
            return (
              <li key={item.name}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      alt="img"
                      width="16px"
                      height="16.08px"
                      src={item.icon}
                    />
                  </div>
                  <Text>{item.name}</Text>
                </div>
                {item.arrow && (
                  <img
                    style={{ marginRight: "13px" }}
                    alt="img"
                    width="10px"
                    height="10px"
                    src={item.arrow}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Apps>
    </Container>
  );
}

export default SideBar;
