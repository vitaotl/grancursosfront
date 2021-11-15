import React from "react";

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
} from "./styles";

function Cards() {
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
          <HeaderCardsDefault>
            <Text14>Default</Text14>
            <img alt="img" width="10px" height="5px" src={Path} />
          </HeaderCardsDefault>
          <HeaderCardsGrid>
            <img alt="img" width="16px" height="16px" src={Grid} />
          </HeaderCardsGrid>
          <HeaderCardsGrid>
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
            <Card key={card.name}>
              <div>
                <img alt="img" width="200px" height="200px" src={DefaultImage} />
              </div>
              <CardDescription>
                <Text16>{card.name}</Text16>
                <Text12>
                  By <strong>{card.brand}</strong>
                </Text12>
                <Text14>{lorem}</Text14>
              </CardDescription>
              <CardPrice stars={card.stars ? true : false}>
                <div>
                  <span>
                    <Text14>{card.stars}</Text14>
                    <img alt="img" width="17.98px" height="18px" src={Star} />
                  </span>
                </div>
                <div>
                  <Text18>${card.price}</Text18>
                  <div>
                    <img alt="img" width="14px" height="14px" src={ShoppingCart} />
                    <Text14>Free Shipping</Text14>
                  </div>
                  <WishListButton>
                    <img alt="img" width="14px" height="13px" src={Heart} />
                    <Text14> WHISHLIST</Text14>
                  </WishListButton>
                  <AddToCartButton>
                    <img alt="img" width="16px" height="14px" src={ShoppingBag} />
                    <Text14>ADD TO CART</Text14>
                  </AddToCartButton>
                </div>
              </CardPrice>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
}

export default Cards;
