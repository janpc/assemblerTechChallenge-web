import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../routes";

import { MemeItem, MemeImage } from "./styles";

function Meme({ info }) {
  return (
    <MemeItem>
      <Link to={`${ROUTES.MEME}/${info._id}`}>
        <MemeImage
          key={info._id}
          alt={info.url}
          src={info.url}
          loading="lazy"
        />
      </Link>
    </MemeItem>
  );
}

export default Meme;
