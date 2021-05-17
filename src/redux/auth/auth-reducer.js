import * as AuthTypes from "./auth-types";

export const AuthInitialState = {
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  isAuthenticated: false,
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        signUpError: null,
      };
    }
    case AuthTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload,
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        signUpError: null,
      };
    }
    case AuthTypes.SIGN_OUT_REQUEST: {
      return {
        ...state,
        isSigningOut: true,
        signOutError: null,
      };
    }
    case AuthTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: null,
        isAuthenticated: false,
      };
    }
    case AuthTypes.RESET_AUTH_STATE: {
      return AuthInitialState;
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
