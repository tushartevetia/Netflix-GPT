import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    watchNowMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addWatchNowMovies: (state, action) => {
      state.watchNowMovie = action.payload;
    },
    removeWatchNowMovies: (state, action) => {
      state.watchNowMovie = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerMovie,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addWatchNowMovies,
  removeWatchNowMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
