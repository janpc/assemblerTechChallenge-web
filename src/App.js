import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import * as ROUTES from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.HOME} exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
