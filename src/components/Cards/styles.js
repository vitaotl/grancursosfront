import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid; */
  width: 100%;
  /* height: 50px; */
  margin-left: 30px;
`;

export const Text18 = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const Text14 = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
`;

export const Text16 = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
`;

export const Text12 = styled.span`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #7e7e7e;

  strong {
    font-weight: bold;
  }
`;

export const HeaderCards = styled.section`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -19px;
`;

export const HeaderCardsIcons = styled.section`
  display: flex;
  justify-content: space-between;
  width: 239px;
`;

export const HeaderCardsDefault = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 115px;
  padding: 0 10px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #bbbbbb;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderCardsGrid = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #bbbbbb;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  img {
    margin-top: 45px;
    position: absolute;
  }
`;

export const SearchCards = styled.input`
  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #bbbbbb;
  display: flex;
  width: 99%;
  height: 62px;
  margin-top: 22px;
  padding-left: 10px;

  font-family: Montserrat;
  font-size: 22px;
  line-height: 26px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1362px;
  margin-top: 28px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "250px")};
  transform: scale(0.99);
  transition: all ease 0.2s;

  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #bbbbbb;

  img {
    margin: 20px 23px 20px 10px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1);
  }
`;

export const CardDescription = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 150px;

  span:nth-child(2) {
    margin-top: 7px;
  }
  span:nth-child(3) {
    /* border: 1px solid; */
    margin-top: 22px;
    color: #2c2c2c;
  }
`;

export const CardPrice = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 90%;
  margin-top: 19px;

  div:nth-child(1) {
    margin: 0 15px 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;

    > span {
      display: ${(props) => (props.stars ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 30px;
      background-color: #787878;
      border-radius: 5px;

      > span {
        color: #fff;
      }

      img {
        margin: 0 0 0 10px;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    > div {
      display: flex;
      justify-content: center;
      width: 80%;

      > img {
        margin: 0 5px 0 0;
      }
    }
  }
`;

export const WishListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 18px;
  border-radius: 8px;
  background-color: #ff000a;

  > span {
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    background-color:  #FF323A;
  }
`;

export const AddToCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 11px;
  border-radius: 8px;
  background-color: #0052cc;

  > span {
    color: #fff;
    font-weight: 600;
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    background-color: #1963d1;
  }
`;
