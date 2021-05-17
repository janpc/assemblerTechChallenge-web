import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import * as ROUTES from "./routes";
import { onAuthStateChanged, signOut } from "./services/auth";
import { signUpSuccess } from "./redux/auth/auth-actions";
import ProtectedRoute from "./components/ProtectedRoute.js/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authStateChanged = onAuthStateChanged((user) => {
      if (user) {
        console.log("si");
        dispatch(signUpSuccess());
      } else {
        console.log("no");
        dispatch(signOut());
      }
    });
    return () => {
      if (authStateChanged) {
        authStateChanged();
      }
    };
  }, [dispatch]);

  return (
    <Switch>
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <ProtectedRoute path={ROUTES.HOME} exact component={Home} />
    </Switch>
  );
}

export default App;
