import * as auth from "../../services/auth";

import * as AuthTypes from "./auth-types";

export const signUpRequest = () => ({
  type: AuthTypes.SIGN_UP_REQUEST,
});

export const signUpError = (message) => ({
  type: AuthTypes.SIGN_UP_ERROR,
  payload: message,
});

export function signUpWithEmailRequest(email, password) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      await auth.singUpWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
}

export function signInWithEmailRequest(email, password) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      await auth.singInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
}

export const signUpSuccess = (user) => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signOutRequest = () => ({
  type: AuthTypes.SIGN_OUT_REQUEST,
});

export function signOut() {
  return async function signOutThunk(dispatch) {
    auth.signOut();
    return dispatch(signOutSuccess());
  };
}

export const signOutSuccess = () => ({
  type: AuthTypes.SIGN_OUT_SUCCESS,
});

export const resetAuthState = () => ({
  type: AuthTypes.RESET_AUTH_STATE,
});
