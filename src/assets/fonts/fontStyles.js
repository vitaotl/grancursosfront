import { createGlobalStyle } from "styled-components";

import Montserrat from "./Montserrat.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat}) format('woff');
}
`;

export default FontStyles;
