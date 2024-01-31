import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlaying, addPopular, addUpcoming } from "../store/moviesSlice";
import { useEffect } from "react";

export const useAddMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const movies = await fetch(url, API_OPTIONS);
        const json = await movies.json();
        dispatch(addNowPlaying(json.results));
    };
    useEffect(() => {
        getMovies();
    }, []);
}
export const useAddTop = () => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const movies = await fetch(url, API_OPTIONS);
        const json = await movies.json();
        dispatch(addPopular(json.results));
    };
    useEffect(() => {
        getMovies();
    }, []);
}

export const useAddUpcoming = () => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const movies = await fetch(url, API_OPTIONS);
        const json = await movies.json();
        dispatch((addUpcoming(json.results)));
    };
    useEffect(() => {
        getMovies();
    }, []);
}
// export const usePopular=()=>{
//     const dispatch = useDispatch();
//     const getMovies = async () => {
//         const movies = await fetch(API_URL_POPULAR, API_OPTIONS);
//         const json = await movies.json();
//         console.log(json.results)
//         dispatch(addPopular(json.results));
//     };
//     useEffect(() => {
//         getMovies();
//     }, []);
// }