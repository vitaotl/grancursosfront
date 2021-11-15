import styled from "styled-components";

export const Container = styled.aside`
  width: 245px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* margin-left: 23px; */
  background-color: #091e42;

  > div {
    display: flex;
    align-items: center;
    height: 71px;
    margin-left: -23px;
    background-color: #fff;
    > img {
      width: 280px;
      height: 40px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  > section:nth-child(4) {
    /* width: 256px; */
    height: 236.49px;
  }

  > section:nth-child(5) {
    height: 194.48px;
  }

  @media (max-width: 960px) {
    display: none;
  } 

`;

export const ImageContainer = styled.div`
  /* border: 1px solid; */
  background-color: #FFF;
`;

export const FirstSection = styled.section`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90px;
  margin: 45px 0 0 15px;

  > span {
    width: 100%;
    height: 36px;
    /* padding: 0px 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: 1px 4px 4px #172b4d;
    background-color: #172b4d;
    color: #fff;

    > div {
      display: flex;
      align-items: center;
      margin-left: 10px;
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
  display: flex;
  flex-direction: column;
  width: 85%;
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
