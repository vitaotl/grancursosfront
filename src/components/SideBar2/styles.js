import styled from "styled-components";

export const Container = styled.aside`
  width: ${(props) => (props.openMenu ? "245px" : "90px")};
  height: 100%;
  /* display: flex; */
  flex-direction: column;
  justify-content: flex-start;
  /* margin-left: 23px; */
  background-color: #091e42;

  z-index: ${(props) => (props.openMenu ? "1000" : "1")};
  position: ${(props) => (props.openMenu ? "absolute" : "null")};
  height: 1960px;
  display: ${(props) => (props.openMenu ? "block" : "null")};

  > div {
    display: flex;
    align-items: center;
    height: 71px;
    background-color: #fff;
  }

  > section:nth-child(4) {
    height: 236.49px;
  }

  > section:nth-child(5) {
    height: 194.48px;
  }

  @media (min-width: 960px) {
    display: none;
  }

  /* @media (max-width: 960px) {
    width: ${(props) => (props.openMenu ? "245px" : "50px")};
    z-index: ${(props) => (props.openMenu ? "1000" : "1")};
    position: ${(props) => (props.openMenu ? "fixed" : "null")};

    display: ${(props) => (props.openMenu ? "inline" : "none")};
    position: fixed;
    z-index: 1000;
    width: 245px;

    * {
      transform: ${(props) =>
    props.openMenu ? "translateX()" : "translateX(-100%)"};
    }
  }

  @media (min-width: 960px) {
    width: 245px;
    transform: translateX();
  } */
`;

export const ImageContainer = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  width: ${(props) => (props.openMenu ? "100%" : "90px")};

  div {
    border: 1px solid;
  }

  img:nth-child(1) {
    display: ${(props) => (props.openMenu ? "inline" : "none")};
  }
`;

export const FirstSection = styled.section`
  /* display: ${(props) => (props.openMenu ? "flex" : "none")}; */
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90px;
  margin: 45px 0 0 15px;

  > span {
    display: flex;
    width: 100%;
    height: 36px;
    /* padding: 0px 10px; */
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: 1px 4px 4px #172b4d;
    background-color: #172b4d;
    color: #fff;

    > span:nth-child() {
      img {
        display: ${(props) => (props.openMenu ? "flex" : "none")};
      }
    }

    > div {
      display: flex;
      /* display: none; */
      align-items: center;
      margin-left: 10px;
      > span {
        display: ${(props) => (props.openMenu ? "flex" : "none")};
      }
      > img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(292deg)
          brightness(112%) contrast(101%);
      }
    }

    .pathImage {
      margin-right: 13px;
    }

    > img {
      margin-left: 10px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(292deg)
        brightness(112%) contrast(101%);
    }

    &:hover {
      cursor: pointer;
      background-color: #172b4d;
    }
  }

  > span:nth-child(2) {
    background-color: #091e42;
    justify-content: flex-start;
    margin-top: 10px;
    border: none;
    box-shadow: none;
    text-shadow: 0px 3px 5px #bfbfbf;

    &:hover {
      background-color: #172b4d;
      transition: background-color 0.3s;
    }
  }
`;

export const Text = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  margin-left: 10px;

  .TitleIcons {
    border: 1px solid;
  }
`;

export const Apps = styled.section`
  /* border: 1px solid red; */
  /* display: flex; */
  display:flex;
  flex-direction: column;
  width: 88%;
  height: 194.48px;
  margin-top: 24.09px;
  margin-left: 20px;

  span {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
  }

  ul {
    margin: 5px 0px 0px 5px;
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(292deg)
          brightness(112%) contrast(101%);
      }

      &:hover {
        cursor: pointer;
        border-radius: 4px;
        background-color: #172b4d;
        transition: background-color 0.3s;
      }

      span {
        color: #fff;
        font-weight: 500;
      }
    }
  }
`;
