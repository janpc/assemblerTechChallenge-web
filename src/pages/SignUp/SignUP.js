import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signUpWithEmailRequest } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

import * as ROUTES from "../../routes";

function SignUp() {
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

    dispatch(signUpWithEmailRequest(email, password));
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
        Already have an account?
        <div>
          <Link to={ROUTES.LOGIN}>Log in</Link>
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
        <input
          type="password"
          onChange={handlePasswordChange}
          pattern=".{6,}"
          required
          title="6 characters minimum"
        />
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
export default SignUp;
