import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Reset } from "styled-reset";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";

import NavBar from "./components/NavBar";

import { Main } from "./styles/mainStyles";

import * as ROUTES from "./routes";
import { onAuthStateChanged, signOut } from "./services/auth";
import { signUpSuccess } from "./redux/auth/auth-actions";
import ProtectedRoute from "./components/ProtectedRoute.js/ProtectedRoute";
import Meme from "./pages/Meme/Meme";

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
    <>
      <Reset />
      <Main>
        <NavBar />
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={`${ROUTES.MEME}/:id`} component={Meme} />
          <ProtectedRoute path={ROUTES.UPLOAD} component={Upload} />
          <ProtectedRoute path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.HOME} exact component={Home} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
