import React, { useState, useContext } from "react";
import { Context } from "../../context/context";

import RangeSlider from "../RangeSlider";

import FilledStar from "../../assets/icons/FilledStar.svg";
import Star from "../../assets/icons/Star.svg";

import {
  Container,
  FilterContainer,
  MultiRange,
  Text18,
  RadioButton,
  Text16,
  SliderContainer,
  CategoryBrandContainer,
  CheckboxButton,
  RatingContainer,
  ClearAllButton,
  FilterTitle,
  Text24,
} from "./styles";

function Filters() {
  const { openFilters, setopenFilters } = useContext(Context);

  const [range, setRange] = useState("All");
  const [categoryItem, setCategoryBrandItem] = useState([]);

  const multiRangeArray = ["$10", "$10-$100", "$100-$500", "$500", "All"];
  const fiveStars = [
    FilledStar,
    FilledStar,
    FilledStar,
    FilledStar,
    FilledStar,
  ];
  const fourStars = [FilledStar, FilledStar, FilledStar, FilledStar, Star];
  const threeStars = [FilledStar, FilledStar, FilledStar, Star, Star];
  const categoryArray = [
    { name: "Cell Phones", count: 1920 },
    { name: "Computers & Tablets", count: 1820 },
    { name: "Cell Phone Accessories", count: 462 },
    { name: "Appliances", count: 6556 },
    { name: "Audio", count: 120 },
    { name: "iPhone Accessories", count: 353 },
    { name: "Cameras & Camcorders", count: 45 },
    { name: "iPhone Cases & Clips", count: 456 },
    { name: "TV & Home Theater", count: 55 },
    { name: "Small Kitchen Appliances", count: 10 },
  ];
  const brandArray = [
    { name: "Insigni", count: 220 },
    { name: "Samsung", count: 120 },
    { name: "Apple", count: 320 },
    { name: "HP", count: 32 },
    { name: "Sony", count: 520 },
    { name: "Metra", count: 55 },
    { name: "Dyne", count: 120 },
    { name: "LG", count: 98 },
    { name: "Canon", count: 99 },
    { name: "Speck", count: 575 },
  ];

  const setRadioBackgroundColor = (rangeName) => {
    if (rangeName === range) return { backgroundColor: "#091e42" };
    else return null;
  };

  const setCheckboxBackgroundColor = (checkboxName) => {
    if (categoryItem.find((item) => item === checkboxName))
      return { backgroundColor: "#091e42" };
    else return null;
  };

  const handleChangeCategoryBrandItem = (categoryName) => {
    if (categoryItem.find((item) => item === categoryName)) {
      let newCategoryArray = categoryItem.filter(
        (category) => category !== categoryName
      );
      setCategoryBrandItem(newCategoryArray);
    } else setCategoryBrandItem((prev) => [...prev, categoryName]);
  };

  const handleClearButton = () => {
    setRange("All");
    setCategoryBrandItem([]);
  };

  return (
    <Container openFilters={openFilters}>
      <FilterTitle>
        <Text18>Filters</Text18>
        <Text24 onClick={() => setopenFilters(false)}>X</Text24>
      </FilterTitle>
      <FilterContainer>
        <MultiRange>
          <Text18>Multi Range</Text18>
          <ul>
            {multiRangeArray.map((range) => {
              return (
                <li onClick={() => setRange(range)} key={range}>
                  <RadioButton style={setRadioBackgroundColor(range)} />
                  <Text16>{range}</Text16>
                </li>
              );
            })}
          </ul>
        </MultiRange>
        <SliderContainer>
          <RangeSlider />
        </SliderContainer>
        <CategoryBrandContainer>
          <Text18>Category</Text18>
          <ul>
            {categoryArray.map((item) => {
              return (
                <li
                  key={item.name}
                  onClick={() => handleChangeCategoryBrandItem(item.name)}
                >
                  <div>
                    <CheckboxButton
                      style={setCheckboxBackgroundColor(item.name)}
                    />
                    <Text16>{item.name}</Text16>
                  </div>
                  <div>
                    <Text16>{item.count}</Text16>
                  </div>
                </li>
              );
            })}
          </ul>
        </CategoryBrandContainer>
        <CategoryBrandContainer>
          <Text18>Brand</Text18>
          <ul>
            {brandArray.map((item) => {
              return (
                <li
                  key={item.name}
                  onClick={() => handleChangeCategoryBrandItem(item.name)}
                >
                  <div>
                    <CheckboxButton
                      style={setCheckboxBackgroundColor(item.name)}
                    />
                    <Text16>{item.name}</Text16>
                  </div>
                  <div>
                    <Text16>{item.count}</Text16>
                  </div>
                </li>
              );
            })}
          </ul>
        </CategoryBrandContainer>
        <RatingContainer>
          <Text18>Rating</Text18>
          <ul>
            <li>
              <div>
                {fiveStars.map((star, index) => {
                  return (
                    <img
                      key={index}
                      alt="img"
                      width="18px"
                      height="17px"
                      src={star}
                    />
                  );
                })}
              </div>
              <Text16>
                <span>& Up</span>
                <span>8500</span>
              </Text16>
            </li>
            <li>
              <div>
                {fourStars.map((star, index) => {
                  return (
                    <img
                      key={index}
                      alt="img"
                      width="18px"
                      height="17px"
                      src={star}
                    />
                  );
                })}
              </div>
              <Text16>
                <span>& Up</span>
                <span>3250</span>
              </Text16>
            </li>
            <li>
              <div>
                {threeStars.map((star, index) => {
                  return (
                    <img
                      key={index}
                      alt="img"
                      width="18px"
                      height="17px"
                      src={star}
                    />
                  );
                })}
              </div>
              <Text16>
                <span>& Up</span>
                <span>1120</span>
              </Text16>
            </li>
          </ul>
        </RatingContainer>
      </FilterContainer>
      <ClearAllButton onClick={handleClearButton}>
        <Text18>CLEAR ALL FILTERS</Text18>
      </ClearAllButton>
    </Container>
  );
}

export default Filters;
