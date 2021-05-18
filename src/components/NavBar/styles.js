import styled from "styled-components";
import * as COLORS from "../../styles/colors";
import * as FONTS from "../../styles/fonts";

const NavBarBackground = styled.header`
  background-color: ${COLORS.DARK};
  width: 100%;
  padding: 1.5rem 0;
  box-shadow: 5px 5px 10px ${COLORS.LIGHT}88;
`;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const LinkList = styled.ul`
  display: flex;
  gap: 1rem;
  width: 30%;

  & > li > a {
    color: ${COLORS.WHITE};
    font-size: large;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: ${COLORS.LIGHT};
    }
  }
`;

const IconContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 1rem;
  color: ${COLORS.WHITE};

  &:hover,
  &:focus {
    color: ${COLORS.LIGHT};
  }
`;

const SearchContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SearchBar = styled.input`
  background-color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.DARK};
  border-radius: 5px;

  font-family: ${FONTS.MAIN};
  font-size: 18px;
  padding: 0.1rem 1rem;

  outline: none;

  &:hover,
  &:focus {
    border: 2px solid ${COLORS.LIGHT};
  }
`;

export {
  NavBarBackground,
  LinkList,
  IconButton,
  NavBarContent,
  SearchBar,
  SearchContainer,
  IconContainer,
};
