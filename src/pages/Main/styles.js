import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
`;

export const MainBody = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  margin: 25px 25px;

  @media (max-width: 500px) {
    margin-left: 10px;
  }
`;

export const MainContainer = styled.div`
  /* border: 1px solid; */
  display: flex;
  width: 100%;
  height: 1574px;
  margin-top: 45px;
`;
