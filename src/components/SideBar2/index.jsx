import React, { useContext } from "react";
import { Context } from "../../context/context";


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
import G from "../../assets/icons/G.svg";
import Divider from "../../assets/icons/Divider.svg";

import { Apps, Container, FirstSection, ImageContainer, Text } from "./styles";

function SideBar() {
  const { openMenu, setOpenMenu } = useContext(Context);

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
    <Container openMenu={openMenu}>
      <ImageContainer openMenu={openMenu}>
        <img
          alt="img"
          width="142px"
          height="30px"
          src={LogoGranCursos}
          style={{ marginRight: 15 }}
        />
        {openMenu ? (
          <div onClick={() => setOpenMenu(!openMenu)}>'X'</div>
        ) : (
          <img
            onClick={() => setOpenMenu(!openMenu)}
            alt="img"
            width="25px"
            height="25px"
            src={G}
          />
        )}
      </ImageContainer>
      <FirstSection
        openMenu={openMenu}
        style={
          openMenu ? { width: "90%" } : { marginLeft: "25px", width: "60%" }
        }
      >
        <span openMenu={openMenu}>
          <div>
            <img alt="img" width="14px" height="15.56px" src={Home} />
            <Text>Dashboard</Text>
          </div>
          <img
            style={openMenu ? { display: "inline" } : { display: "none" }}
            alt="img"
            className="pathImage"
            width="10px"
            height="5px"
            src={Path}
          />
        </span>
        <span openMenu={openMenu}>
          <img alt="img" width="14px" height="15.56px" src={Circle} />
          <Text style={openMenu ? { display: "inline" } : { display: "none" }}>
            eCommerce
          </Text>
        </span>
      </FirstSection>
      <img
        style={!openMenu ? { display: "inline" } : { display: "none" }}
        alt="img"
        width="100%"
        height="1px"
        src={Divider}
      />
      <Apps openMenu={openMenu}>
        <Text
          style={
            openMenu
              ? { display: "flex", marginLeft: "10px" }
              : { display: "none", marginLeft: "10px" }
          }
        >
          APPS
        </Text>
        <ul>
          {appsItens.map((item) => {
            return (
              <li
                key={item.name}
                style={
                  openMenu
                    ? null
                    : {
                        width: "70%",
                        height: 40,
                        margin: "10px",
                      }
                }
              >
                <div>
                  <img
                    alt="img"
                    width="16px"
                    height="12.87px"
                    src={item.icon}
                  />
                  <Text
                    style={
                      openMenu ? { display: "inline" } : { display: "none" }
                    }
                  >
                    {item.name}
                  </Text>
                </div>
              </li>
            );
          })}
        </ul>
      </Apps>
      <img
        style={!openMenu ? { display: "inline" } : { display: "none" }}
        alt="img"
        width="100%"
        height="1px"
        src={Divider}
      />
      <Apps
        style={!openMenu ? { height: "265px" } : { height: "236px" }}
        openMenu={openMenu}
      >
        <Text
          style={
            openMenu
              ? { display: "inline", marginLeft: "10px" }
              : { display: "none", marginLeft: "10px" }
          }
        >
          UI ELEMENTS
        </Text>
        <ul>
          {uiElementsItens.map((item) => {
            return (
              <li
                key={item.name}
                style={
                  openMenu
                    ? null
                    : {
                        width: "70%",
                        height: 40,
                        margin: "10px",
                      }
                }
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      alt="img"
                      width="16px"
                      height="16.07px"
                      src={item.icon}
                    />
                  </div>
                  <Text
                    style={
                      openMenu ? { display: "inline" } : { display: "none" }
                    }
                  >
                    {item.name}
                  </Text>
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
      <img
        style={!openMenu ? { display: "inline" } : { display: "none" }}
        alt="img"
        width="100%"
        height="1px"
        src={Divider}
      />
      <Apps openMenu={openMenu}>
        <Text
          style={
            openMenu
              ? { display: "inline", marginLeft: "10px" }
              : { display: "none", marginLeft: "10px" }
          }
        >
          FORMS
        </Text>
        <ul>
          {formsItens.map((item) => {
            return (
              <li
                key={item.name}
                style={
                  openMenu
                    ? null
                    : {
                        width: "70%",
                        height: 40,
                        margin: "10px",
                      }
                }
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      alt="img"
                      width="16px"
                      height="16.08px"
                      src={item.icon}
                    />
                  </div>
                  <Text
                    style={
                      openMenu ? { display: "inline" } : { display: "none" }
                    }
                  >
                    {item.name}
                  </Text>
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
