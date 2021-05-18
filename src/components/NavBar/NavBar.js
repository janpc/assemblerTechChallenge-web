import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signOut } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

import * as ROUTES from "../../routes";

import {
  NavBarBackground,
  LinkList,
  LinkItem,
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
import { setMemesType } from "../../redux/meme/meme-actions";
import { memeSelector } from "../../redux/meme/meme-selectors";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector(authSelector);
  const { type } = useSelector(memeSelector);

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

  function setType(type) {
    dispatch(setMemesType(type));
  }

  return (
    <NavBarBackground>
      <NavBarContent>
        <LinkList>
          <LinkItem onClick={() => setType("all")} selected={type === "all"}>
            <Link to={ROUTES.HOME}> All </Link>
          </LinkItem>
          <LinkItem>|</LinkItem>
          <LinkItem onClick={() => setType("meme")} selected={type === "meme"}>
            <Link to={ROUTES.HOME}> Memes </Link>
          </LinkItem>
          <LinkItem>|</LinkItem>
          <LinkItem onClick={() => setType("gif")} selected={type === "gif"}>
            <Link to={ROUTES.HOME}> Gifs </Link>
          </LinkItem>
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
