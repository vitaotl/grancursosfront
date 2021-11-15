import styled from "styled-components";

export const Container = styled.header`
  /* border: 1px solid; */
  width: 100%;
  height: 127px;
  display: flex;
  flex-direction: column;
`;

export const IconsHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 62px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #bbbbbb;
  border: 1px solid black;
  width: 100%;

  @media (max-width: 750px) {
    justify-content: flex-end;
  }
`;

export const IconsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 183px;
  height: 100%;
  margin-left: 22px;

  img {
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const UserInfo = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 278px;
  height: 100%;

  *:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;

    > span {
      display: none;
    }
  }
`;

export const User = styled.div`
  width: 111px;
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 68px;

    span:nth-child(1) {
      font-size: 14px;
      line-height: 17px;
      color: #2c2c2c;
    }

    span:nth-child(2) {
      width: 49px;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: #2c2c2c;
    }
  }
`;

export const SubHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  height: 40px;

  > img {
    &:hover {
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 434px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Text = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const Text24 = styled.span`
  font-family: Montserrat;
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
`;
