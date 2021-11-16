import React, { useState, useContext } from "react";
import { Context } from "../../context/context";

import Path from "../../assets/icons/Path.svg";
import Grid from "../../assets/icons/Grid.svg";
import List from "../../assets/icons/List.svg";
import Search from "../../assets/icons/Search.svg";
import DefaultImage from "../../assets/icons/DefaultImage.svg";
import Star from "../../assets/icons/Star.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import Heart from "../../assets/icons/Heart.svg";
import ShoppingBag from "../../assets/icons/ShoppingBag.svg";

import {
  Container,
  HeaderCards,
  HeaderCardsIcons,
  Text14,
  Text18,
  HeaderCardsDefault,
  HeaderCardsGrid,
  CardsContainer,
  SearchCards,
  SearchContainer,
  Card,
  CardDescription,
  Text16,
  Text12,
  CardPrice,
  WishListButton,
  AddToCartButton,
  CardName,
  CardInfo,
  Buttons,
} from "./styles";

function Cards() {
  const { openFilters, setopenFilters } = useContext(Context);

  const [viewStyle, setViewStyle] = useState("List");
  const cards = [
    {
      name: "Apple Watch Series 4 GPS",
      brand: "Apple",
      price: 399,
      stars: 3.4,
    },
    { name: "JBL Speaker", brand: "JBL", price: 199, stars: null },
    {
      name: "Apple iPhone X 128GB",
      brand: "Apple",
      price: 899,
      stars: null,
    },
    {
      name: "Beats Headphones",
      brand: "Beats",
      price: 459,
      stars: null,
    },
    {
      name: "Apple Watch Series 5 GPS",
      brand: "Apple",
      price: 2499,
      stars: null,
    },
  ];

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <Container>
      <HeaderCards>
        <Text18>7,618 results found in 5ms</Text18>
        <HeaderCardsIcons>
          <HeaderCardsDefault onClick={() => setopenFilters(!openFilters)}>
            <Text14 className="default">Default</Text14>
            <Text14 className="filters">Filters</Text14>
            <img alt="img" width="10px" height="5px" src={Path} />
          </HeaderCardsDefault>
          <HeaderCardsGrid
            onClick={() => setViewStyle("Grid")}
            viewStyle={viewStyle === "Grid" ? true : false}
          >
            <img alt="img" width="16px" height="16px" src={Grid} />
          </HeaderCardsGrid>
          <HeaderCardsGrid
            onClick={() => setViewStyle("List")}
            viewStyle={viewStyle === "List" ? true : false}
          >
            <img alt="img" width="16px" height="16px" src={List} />
          </HeaderCardsGrid>
        </HeaderCardsIcons>
      </HeaderCards>
      <SearchContainer>
        <img alt="img" width="17.98px" height="18px" src={Search} />
      </SearchContainer>
      <SearchCards placeholder="Search hear"></SearchCards>
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card key={card.name} viewStyle={viewStyle}>
              <div>
                <img alt="img" src={DefaultImage} />
              </div>
              <CardInfo>
                <CardName viewStyle={viewStyle}>
                  <Text16>{card.name}</Text16>
                  <Text12>
                    By <strong>{card.brand}</strong>
                  </Text12>
                </CardName>
                <CardPrice viewStyle={viewStyle} stars={card.stars ? true : false}>
                  <div>
                    <span>
                      <Text14>{card.stars}</Text14>
                      <img alt="img" width="17.98px" height="18px" src={Star} />
                    </span>
                  </div>
                  <div>
                    <Text18>${card.price}</Text18>
                    <div>
                      <img
                        alt="img"
                        width="14px"
                        height="14px"
                        src={ShoppingCart}
                      />
                      <Text14>Free Shipping</Text14>
                    </div>
                  </div>
                </CardPrice>
                <CardDescription viewStyle={viewStyle}>
                  <Text14>{lorem}</Text14>
                </CardDescription>
                <Buttons>
                  <WishListButton>
                    <img alt="img" width="14px" height="13px" src={Heart} />
                    <Text14> WHISHLIST</Text14>
                  </WishListButton>
                  <AddToCartButton>
                    <img
                      alt="img"
                      width="16px"
                      height="14px"
                      src={ShoppingBag}
                    />
                    <Text14>ADD TO CART</Text14>
                  </AddToCartButton>
                </Buttons>
              </CardInfo>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
}

export default Cards;
