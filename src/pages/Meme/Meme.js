import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMemeInfo } from "../../redux/meme/meme-actions";

import { memeSelector } from "../../redux/meme/meme-selectors";

function Meme() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { memeInfo } = useSelector(memeSelector);
  console.log("aaa");
  useEffect(() => {
    console.log("aaa");
    dispatch(getMemeInfo(id));
  }, [dispatch, id]);

  return (
    <div>
      <img key={memeInfo?._id} alt={memeInfo?.url} src={memeInfo?.url} />
    </div>
  );
}
export default Meme;
