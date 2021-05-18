import styled, { keyframes } from "styled-components";

import * as colors from "./colors";

const inputWidth = "400";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(80%, 600px);
  margin: 2em auto;
`;

const Input = styled.input`
  border-radius: 5px;
  font-size: 20px;
  padding: 0.2rem 1rem;
  outline: none;
  width: 100%;
  max-width: ${inputWidth}px;
  box-shadow: inset 2px 2px 10px #000000;
  background: ${colors.WHITE};
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: ${colors.DARK};
  border: 2px solid transparent;
  margin: 1rem auto;

  &:hover {
    --tw-ring-shadow: none;
    outline: none;
    border: 2px solid ${colors.LIGHT};
  }
  &:focus {
    --tw-ring-shadow: none;
    outline: none;
    border: 2px solid ${colors.DARK};
  }

  ${(props) =>
    props.display
      ? `
    display: ${props.display}`
      : ``};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Label = styled.label`
  margin-left: calc(50% - ${inputWidth / 2}px);
  margin-top: 3em;
  color: ${colors.WHITE};
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Button = styled.input`
  background-color: ${colors.NEUTRAL};
  margin: 2em 0 1em;
  padding: 0.5em 0;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 5px #0008;
  position: relative;
  align-self: center;
  transition: width 0.2s ease-in-out;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: min(100%, 250px);
  outline: none;

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    box-shadow: 0 0 0 2px ${colors.WHITE};
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover,
  &:focus {
    outline: none;
    width: 270px;
    outline: none;
    &::after {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    &:hover,
    &:focus {
      width: 250px;
      &::after {
        opacity: 1;
      }
    }
  }

  ${({ lastItem }) =>
    lastItem
      ? `
    margin-bottom: 100px;
    @media (max-width: 650px) {
      margin-bottom: 150px;};`
      : ``}
`;

const Title = styled.h1`
  width: min(90%, 700px);
  font-size: 32px;
  margin: 2em auto 1rem;
  text-align: center;
`;

const Separation = styled.hr`
  width: min(85%, 700px);
  color: ${colors.WHITE};
  margin: 0 auto;
`;

const RedirectMessage = styled.div`
  margin: 2rem auto;
  width: fit-content;
  max-width: 80%;
  font-size: 14px;
  text-align: center;
  & > div {
    display: inline-block;
    & > a {
      dispaly: block;
      color: ${colors.LIGHT};
      margin-left: 0.5rem;

      &:hover {
        text-decoration: underline;
        color: ${colors.NEUTRAL};
      }
    }
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const errorAnimation = keyframes`
  0%, 50% {
    color: ${colors.LIGHT};
  }

  100% {
    color: ${colors.WHITE};
  }
`;

const Error = styled.div`
  margin: 2rem auto;
  width: fit-content;
  max-width: 80%;
  font-size: 14px;
  text-align: center;
  animation: ${errorAnimation} 2s linear;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const AddInput = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  padding-left: 1em;
  box-shadow: inset 2px 2px 10px #000000;
  background: ${colors.WHITE};
  border: 2px solid ${colors.DARK};

  &:hover {
    border: 2px solid ${colors.WHITE};
  }
  &:focus {
    border: 2px solid ${colors.DARK};
  }

  & input {
    padding: 0;
    border: none;
    background-color: transparent;
    width: calc(100% - 150px);
    height: 100%;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: ${colors.DARK};

    @media (max-width: 360px) {
      width: calc(100% - 100px);
    }

    &:hover {
      --tw-ring-shadow: none;
      outline: none;
    }
    &:focus {
      --tw-ring-shadow: none;
      outline: none;
    }
  }

  & button {
    margin: 0;
    width: 150px;
    padding: 0.3rem;

    &:hover {
      outline: none;
      width: 150px;
    }
    &:focus {
      outline: none;
      width: 150px;
    }

    @media (max-width: 360px) {
      width: 100px;

      &:hover {
        width: 100px;
      }
      &:focus {
        width: 100px;
      }
    }
  }
`;

export {
  Button,
  Error,
  Form,
  Input,
  Label,
  RedirectMessage,
  Separation,
  Title,
  AddInput,
};
