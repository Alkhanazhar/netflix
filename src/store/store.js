import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./GptSearch";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    }
})
export default appStore