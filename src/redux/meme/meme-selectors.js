import { createSelector } from "reselect";

export const selectMemeState = (state) => state.meme;

export const memeSelector = createSelector([selectMemeState], (meme) => meme);
