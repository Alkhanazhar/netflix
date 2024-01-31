import React, { useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import VideoContainer from "./VideoContainer";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlaying);
  const trailerId = useMovieTrailer();
  if (!movie) return;
  const mainMovie = movie?.[0];

  return (
    <div>
      <VideoTitle
        title={mainMovie.original_title}
        description={mainMovie.overview}
      />
      <VideoContainer trailerId={trailerId} />
    </div>
  );
};

export default MainContainer;
