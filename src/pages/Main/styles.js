import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MainBody = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  margin: 25px 25px;

  @media (max-width: 1300px) {
    margin-left: 110px;
  }

  @media (max-width: 500px) {
    margin-left: 95px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1574px;
  margin-top: 45px;
`;
