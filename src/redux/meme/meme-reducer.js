import * as MemeTypes from "./meme-types";

export const MemesInitialState = {
  memes: [],
  type: "all",
  isGettingMemes: false,
  getMemesError: null,
  getMemesSucces: false,

  memeInfo: {},
  isGettingMemeInfo: false,
  getMemeInfoError: null,
  getMemeInfoSucces: false,
};

const memeReducer = (state = MemesInitialState, action) => {
  switch (action.type) {
    case MemeTypes.GET_MEMES_REQUEST: {
      return {
        ...state,
        isGettingMemes: true,
        getMemesError: null,
        getMemesSucces: false,
      };
    }
    case MemeTypes.GET_MEMES_ERROR: {
      return {
        ...state,
        isGettingMemes: false,
        getMemesError: action.payload,
      };
    }
    case MemeTypes.GET_MEMES_SUCCESS: {
      return {
        ...state,
        getMemesSucces: true,
        isGettingMemes: false,
        getMemesError: null,
        memes: action.payload,
      };
    }
    case MemeTypes.GET_MEMES_RESET: {
      return {
        ...state,
        memes: [],
        isGettingMemes: false,
        getMemesError: null,
        getMemesSucces: false,
      };
    }

    case MemeTypes.SET_TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }

    case MemeTypes.GET_MEME_INFO_REQUEST: {
      return {
        ...state,
        isGettingMemeInfo: true,
        getMemeInfoError: null,
        getMemeInfoSucces: false,
      };
    }
    case MemeTypes.GET_MEME_INFO_ERROR: {
      return {
        ...state,
        isGettingMemeInfo: false,
        getMemeInfoError: action.payload,
      };
    }
    case MemeTypes.GET_MEME_INFO_SUCCESS: {
      return {
        ...state,
        getMemeInfoSucces: true,
        isGettingMemeInfo: false,
        getMemeInfoError: null,
        memeInfo: action.payload,
      };
    }
    case MemeTypes.GET_MEME_INFO_RESET: {
      return {
        ...state,
        memeInfo: {},
        isGettingMemeInfo: false,
        getMemeInfoError: null,
        getMemeInfoSucces: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default memeReducer;
