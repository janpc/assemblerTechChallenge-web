import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import * as ROUTES from "../../routes";

import { authSelector } from "../../redux/auth/auth-selectors";

function ProtectedRoute({ ...props }) {
  const { isAuthenticated } = useSelector(authSelector);

  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={ROUTES.LOGIN} />
  );
}

export default ProtectedRoute;
