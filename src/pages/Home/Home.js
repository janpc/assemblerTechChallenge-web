import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Meme from "../../components/Meme";

import { getMemes } from "../../redux/meme/meme-actions";
import { memeSelector } from "../../redux/meme/meme-selectors";

import { MemeContainer } from "./styles";

function Home() {
  const dispatch = useDispatch();

  const { memes, type } = useSelector(memeSelector);

  useEffect(() => {
    dispatch(getMemes(type));
  }, [dispatch, type]);

  return (
    <MemeContainer>
      {memes.map((meme) => (
        <Meme info={meme} />
      ))}
    </MemeContainer>
  );
}
export default Home;
