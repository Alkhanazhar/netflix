import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowMovies = useSelector((store) => store.movies.nowPlaying);
  const popular = useSelector((store) => store.movies.popular);
  const upcoming = useSelector((store) => store.movies.upcoming);
  return (
    <div className="mt-28 md:-mt-80 text-white">
      <MovieList title={"Now Playing"} movies={nowMovies} />
      <MovieList title={"popular"} movies={popular} />
      <MovieList title={"upcoming"} movies={upcoming} />
      <MovieList title={"Now Playing"} movies={nowMovies} />
      <MovieList title={"Now Playing"} movies={nowMovies} />
    </div>
  );
};

export default SecondaryContainer;
