import styled from "styled-components";

export const Container = styled.aside`
  width: ${(props) => (props.openMenu ? "245px" : "90px")};
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #091e42;

  height: 1960px;
  z-index: 1000;
  transform: ${(props) => (props.openFilters && "translateX(-1%)")};
  transition: all 0.3s;
  position: absolute;
  height: 1960px;

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

  @media (min-width: 1300px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.openMenu ? "100%" : "90px")};

  img {
    &:hover {
      cursor: pointer;
    }
  }

  > div {
    font-size: 20px;
    margin-left: 40px;

    &:hover {
      cursor: pointer;
    }
  }

  img:nth-child(1) {
    display: ${(props) => (props.openMenu ? "inline" : "none")};
  }
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90px;
  margin: 45px 0 0 15px;

  > span {
    display: flex;
    width: 100%;
    height: 36px;
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
  display: flex;
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
