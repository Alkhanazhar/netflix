import { createSlice } from "@reduxjs/toolkit";

const gptSeacrchSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearch: false,
        gptSuggestedMovies: null,
        tmdbSearchMovies: null,

    },
    reducers: {
        toggleGptSlice: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addTmdbSearchMovies: (state, actions) => {
            state.tmdbSearchMovies = actions.payload
        },
        addGptSuggestedMovies: (state, actions) => {
            state.gptSuggestedMovies = actions.payload
        }

    }
})

export const { toggleGptSlice, addTmdbSearchMovies, addGptSuggestedMovies } = gptSeacrchSlice.actions
export default gptSeacrchSlice.reducer