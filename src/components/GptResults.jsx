import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptResults = () => {
  const tmdbMovies = useSelector((store) => store.gpt.tmdbSearchMovies);
  const movieNames = useSelector((store) => store.gpt.gptSuggestedMovies);
  if (!tmdbMovies || !movieNames) return;

  return (
    <div className="bg-[#000000b6] w-10/12 text-white m-auto p-4 mt-16 rounded-sm">
      {tmdbMovies && (
        <h1 className="text-center text-6xl">Here Your Results</h1>
      )}
      {movieNames.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={tmdbMovies[index]} />
      ))}
    </div>
  );
};

export default GptResults;
