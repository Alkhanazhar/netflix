import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return;
  return (
    <div className="w-56 rounded-sm mx-4">
      <img src={IMG_URL + poster_path} alt="movie" />
    </div>
  );
};

export default MovieCard;
