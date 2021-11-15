import styled from "styled-components";

export const Container = styled.footer`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 110px auto 0 auto;
  height: 40px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  /* border: 1px solid #0052cc; */
  border-radius: 20px;

  > img {
    width: 6px;
    height: 12px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 103, 255, 0.1);
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 30px;

  background-color: #fff;
  border-radius: 20px;
`;

export const PaginationIndex = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 40px;
  height: 40px;
  /* border: ${(props) => (props.selected ? "1px solid #0052cc" : null)}; */
  border-radius: 20px;
  background-color: ${(props) =>
    props.selected ? "rgba(0,103,255,0.1)" : null};
  color: ${(props) => (props.selected ? "#0052cc" : null)};

  font-family: Montserrat;
  /* font-size: 18px;
    line-height: 21px; */

  &:hover {
    cursor: pointer;
    background-color: rgba(0,103,255,0.1);
  }
`;
