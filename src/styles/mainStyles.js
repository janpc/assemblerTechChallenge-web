import styled from "styled-components";

import * as colors from "./colors";
import * as fonts from "./fonts";

const Main = styled.main`
  color: ${colors.WHITE};
  background: linear-gradient(
    to bottom right,
    ${colors.MAIN} 0%,
    ${colors.DARK} 100%
  );
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  font-family: ${fonts.MAIN}, sans-serif;
  margin: 0;
  position: relative;
  padding: 0;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.MAIN};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.LIGHT};
  }

  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 7px;
    }
  }
`;

export { Main };
