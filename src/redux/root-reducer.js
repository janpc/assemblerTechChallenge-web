import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import memeReducer from "./meme/meme-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  meme: memeReducer,
});

export default rootReducer;
