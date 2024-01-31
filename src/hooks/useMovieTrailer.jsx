import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = () => {
  const [trailerId, setTrailerId] = useState("");
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/572802/videos?language=en-US";
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) =>
        setTrailerId(
          json.results.filter((item) => item.type == "Trailer")[0].key
        )
      )
      .catch((err) => console.error("error:" + err));
  }, []);
  return trailerId;
};
