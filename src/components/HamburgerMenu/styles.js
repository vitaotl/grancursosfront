import styled from "styled-components";

export const StyledBurger = styled.button`
  border: none;
  /* left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 2rem;
  background: transparent;
  cursor: pointer;
  margin: 20px 0 0 35px;
  z-index: 2000;
  position: fixed;
  border: 2px solid red;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#eee" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;
