import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/auth/auth-actions";

import * as ROUTES from "../../routes";

function NavBar() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <header>
      <ul>
        <li>
          <Link to={ROUTES.HOME}> Home </Link>
        </li>
        <li>
          <button type="button" onClick={handleSignOut}>
            {" "}
            sign out
          </button>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
