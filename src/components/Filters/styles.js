import styled from "styled-components";

export const Container = styled.section`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 28%;
  min-width: 260px;
  height: 1574px;

  @media(max-width: 1150px) {
    display: none;
  }
`;

export const Text18 = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const Text16 = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  height: 1452px;
`;

export const MultiRange = styled.div`
  display: flex;
  flex-direction: column;
  height: 207px;
  margin: 25px 0px 0px 15px;
  /* border: 1px solid; */

  > span {
    font-weight: 600;
    line-height: 22px;
    color: #091e42;
  }

  > ul {
    margin-top: 21px;
    height: 164px;

    > li {
      display: flex;
      align-items: center;
    }
  }
`;

export const RadioButton = styled.button`
  width: 15px;
  height: 15px;
  border: 1px solid #979797;
  border-radius: 15px;
  background-color: #fff;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const SliderContainer = styled.div`
  margin: 23.5px 0 0 15px;
  width: 90%;
  height: 89px;
  border-top: 1px solid #d6d6d6;
  /* border: 1px solid; */
`;

export const CategoryBrandContainer = styled.div`
  margin: 28.5px 0 0 15px;
  width: 90%;
  height: 411px;
  border-top: 1px solid #d6d6d6;
  /* border: 1px solid; */

  > ul {
    margin-top: 21px;
    height: 164px;

    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        align-items: center;

        span {
          margin-left: 12px;
        }
      }
    }
  }

  > span {
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    line-height: 22px;
    color: #091e42;
    height: 55.5px;
  }
`;

export const CheckboxButton = styled.button`
  width: 17px;
  height: 17px;
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const RatingContainer = styled.div`
  margin: 28.5px 0 0 15px;
  width: 90%;
  height: 214px;
  border-top: 1px solid #d6d6d6;

  > ul {
    margin-top: 21px;
    height: 164px;

    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: center;

      > span {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        margin-left: 15px;
        font-weight: 300;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 126px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  > span {
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    line-height: 22px;
    color: #091e42;
    height: 55.5px;
  }
`;

export const ClearAllButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #0052cc;
  background-color: #0052cc;
  margin-top: 23px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #1963d1;
  }
`;
