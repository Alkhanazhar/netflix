import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className=" my-6">
      <h1 className="mx-6 my-6 text-3xl relative font-bold">{title}</h1>
      <div className="flex overflow-scroll">
        <div className=" flex z-50">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Alkhanazhar/netflix-react.git
git push -u origin master