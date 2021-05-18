import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signInWithEmailRequest } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

import * as ROUTES from "../../routes";

import {
  Form,
  Button,
  Input,
  Label,
  RedirectMessage,
  Title,
  Separation,
  Error,
} from "../../styles/formStyles";

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
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Separation />
        <Label>Email:</Label>
        <Input type="email" onChange={handleEmailChange} />
        <Label>Password:</Label>
        <Input type="password" onChange={handlePasswordChange} />
        {isSigningUp && <Error>Signing up</Error>}
        {signUpError && <Error>{signUpError}</Error>}
        <Button type="submit" disabled={isSigningUp} />
        <RedirectMessage>
          First time here?
          <div>
            <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </div>
        </RedirectMessage>
      </Form>
    </>
  );
}
export default Login;
