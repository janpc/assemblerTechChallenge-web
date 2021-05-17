import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signInWithEmailRequest } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

import * as ROUTES from "../../routes";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isSigningUp, signUpError, isAuthenticated } =
    useSelector(authSelector);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push(ROUTES.HOME);
    }
  }, [isAuthenticated]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInWithEmailRequest(email, password));
  }
  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <>
      <div>
        First time here?
        <div>
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input type="email" onChange={handleEmailChange} />
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" onChange={handlePasswordChange} />
        <br />
        <br />
        <input type="submit" disabled={isSigningUp} />
        <br />
        <br />
        {isSigningUp && <p>signing up</p>}
        {signUpError && <p>{signUpError}</p>}
      </form>
    </>
  );
}
export default Login;
