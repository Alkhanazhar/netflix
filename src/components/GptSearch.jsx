import React, { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptSuggestedMovies, addTmdbSearchMovies } from "../store/GptSearch";
import GptResults from "./GptResults";

const GptSearch = () => {
  const dispatch = useDispatch();
  const inputGpt = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const query =
      "Act as a recommendation system and suggest some movies for the query " +
      inputGpt.current.value +
      "give me only 5 movies, with comma separated without numbers, result like given ahead. example result:gadar,sholay,don,golmaal,koi mil gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = chatCompletion.choices[0].message.content.split(",");
    const searchTmdb = async (movie) => {
      const url =
        "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1";
      const fetchMovie = await fetch(url, API_OPTIONS);
      const json = await fetchMovie.json();
      return json.results;
    };
    const gptTmdbResults = gptMovies.map((movie) => searchTmdb(movie));
    const gptMoviePromise = await Promise.all(gptTmdbResults);
    console.log(gptMoviePromise);
    dispatch(addTmdbSearchMovies(gptMoviePromise));
    dispatch(addGptSuggestedMovies(gptMovies));
    inputGpt.current.value = "";
  };
  return (
    <div>
      <form
        className="grid grid-cols-12 pt-56 w-10/12 m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="search for cool movies what you want"
          className="col-span-8 p-4 bg-opacity-55 focus:border-none active:border-none lg:text-xl lg:font-bold"
          ref={inputGpt}
        />
        <button className="bg-[#d81f26] col-span-4 p-4 text-white text-bold text-xl hover:bg-opacity-85">
          search
        </button>
      </form>
      <GptResults />
    </div>
  );
};

export default GptSearch;
