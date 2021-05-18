import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signUpWithEmailRequest } from "../../redux/auth/auth-actions";
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
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Separation />
        <Label>Email:</Label>
        <Input type="email" onChange={handleEmailChange} />
        <Label>Password:</Label>
        <Input
          type="password"
          onChange={handlePasswordChange}
          pattern=".{6,}"
          required
          title="6 characters minimum"
        />
        {isSigningUp && <Error>signing up</Error>}
        {signUpError && <Error>{signUpError}</Error>}
        <Button type="submit" disabled={isSigningUp} />
        <RedirectMessage>
          Already have an account?
          <div>
            <Link to={ROUTES.LOGIN}>Log in</Link>
          </div>
        </RedirectMessage>
      </Form>
    </>
  );
}
export default SignUp;
