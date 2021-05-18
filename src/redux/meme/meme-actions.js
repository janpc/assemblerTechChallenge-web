import * as auth from "../../services/auth";

import * as MemeTypes from "./meme-types";

import { getAllMemes, getMeme } from "../../api";

export const getMemesRequest = () => ({
  type: MemeTypes.GET_MEMES_REQUEST,
});

export const getMemesError = (message) => ({
  type: MemeTypes.GET_MEMES_ERROR,
  payload: message,
});

export function getMemes(type = "") {
  return async function getMemesThunk(dispatch) {
    dispatch(getMemesRequest());
    try {
      /* const userToken = await auth.getCurrentUserToken();

      if (!userToken) {
        return dispatch(getMemesError("Error getting user token!"));
      }
 */
      const response = await getAllMemes(
        {
          /* Authorization: `Bearer ${userToken}`, */
        },
        type
      );

      return dispatch(getMemesSuccess(response.data.data));
    } catch (error) {
      dispatch(getMemesError(error.message));
    }
  };
}

export const getMemesSuccess = (user) => ({
  type: MemeTypes.GET_MEMES_SUCCESS,
  payload: user,
});

export const getMemesReset = () => ({
  type: MemeTypes.GET_MEMES_RESET,
});

export const setMemesType = (type) => ({
  type: MemeTypes.SET_TYPE,
  payload: type,
});

export const getMemeInfoRequest = () => ({
  type: MemeTypes.GET_MEME_INFO_REQUEST,
});

export const getMemeInfoError = (message) => ({
  type: MemeTypes.GET_MEME_INFO_ERROR,
  payload: message,
});

export function getMemeInfo(id) {
  return async function getMemeInfoThunk(dispatch) {
    dispatch(getMemeInfoRequest());
    try {
      /* const userToken = await auth.getCurrentUserToken();

      if (!userToken) {
        return dispatch(getMemeInfoError("Error getting user token!"));
      }
 */
      console.log("hola");
      const response = await getMeme({}, id);

      return dispatch(getMemeInfoSuccess(response.data.data));
    } catch (error) {
      dispatch(getMemeInfoError(error.message));
    }
  };
}

export const getMemeInfoSuccess = (user) => ({
  type: MemeTypes.GET_MEME_INFO_SUCCESS,
  payload: user,
});

export const getMemeInfoReset = () => ({
  type: MemeTypes.GET_MEME_INFO_RESET,
});
