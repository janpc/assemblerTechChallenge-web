import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signOut } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

import * as ROUTES from "../../routes";

import {
  NavBarBackground,
  LinkList,
  IconButton,
  NavBarContent,
  SearchBar,
  SearchContainer,
  IconContainer,
} from "./styles";

import {
  FaSignOutAlt,
  FaSignInAlt,
  FaUserAlt,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector(authSelector);

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleUploadClick() {
    history.push(ROUTES.UPLOAD);
  }

  function handleProfileClick() {
    history.push(ROUTES.PROFILE);
  }

  function handleLoginClick() {
    history.push(ROUTES.LOGIN);
  }

  return (
    <NavBarBackground>
      <NavBarContent>
        <LinkList>
          <li>
            <Link to={ROUTES.HOME}> All </Link>
          </li>
          <li>|</li>
          <li>
            <Link to={ROUTES.HOME}> Memes </Link>
          </li>
          <li>|</li>
          <li>
            <Link to={ROUTES.HOME}> Gifs </Link>
          </li>
        </LinkList>
        <SearchContainer>
          <label for="search">
            <FaSearch size="24px" />
          </label>
          <SearchBar type="seach" id="search" />
        </SearchContainer>
        {isAuthenticated ? (
          <IconContainer>
            <IconButton type="button" onClick={handleUploadClick}>
              <FaPlus size="24px" />
            </IconButton>
            <IconButton type="button" onClick={handleProfileClick}>
              <FaUserAlt size="24px" />
            </IconButton>
            <IconButton type="button" onClick={handleSignOut}>
              <FaSignOutAlt size="24px" />
            </IconButton>
          </IconContainer>
        ) : (
          <IconContainer>
            <IconButton type="button" onClick={handleLoginClick}>
              <FaSignInAlt size="24px" />
            </IconButton>
          </IconContainer>
        )}
      </NavBarContent>
    </NavBarBackground>
  );
}

export default NavBar;
