import React, { useState } from "react";

import RightArrow from "../../assets/icons/RightArrow.svg";
import LeftArrow from "../../assets/icons/LeftArrow.svg";

import {
  Container,
  PaginationList,
  PaginationIndex,
  ArrowContainer,
} from "./styles";

function Footer() {
  const [pageSelected, setPageSelected] = useState(6);
  const pageNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <ArrowContainer>
        <img alt="img" src={LeftArrow} />
      </ArrowContainer>
      <PaginationList>
        {pageNumbers.map((page) => (
          <PaginationIndex
            onClick={() => setPageSelected(page)}
            selected={page === pageSelected ? true : false}
            key={page}
          >
            {page}
          </PaginationIndex>
        ))}
      </PaginationList>
      <ArrowContainer>
        <img alt="img" src={RightArrow} />
      </ArrowContainer>
    </Container>
  );
}

export default Footer;
