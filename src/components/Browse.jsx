import React from "react";
import Bg from "../utils/Bg";
import MainContainer from "./MainContainer";
import {
  useAddMovies,
  useAddTop,
  useAddUpcoming,
} from "../hooks/addMoviesHook";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gpt = useSelector((store) => store.gpt.gptSearch);

  useAddMovies();
  useAddTop();
  useAddUpcoming();
  console.log(gpt);
  return (
    <>
      <Bg />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
