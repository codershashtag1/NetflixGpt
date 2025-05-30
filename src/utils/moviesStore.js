import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trendingMovie: null,
    trailerVideo: null,
    nowPlayingMovie: null,
    popularMovie: null,
    upcomingMovie: null,
    topRatedMovie: null
  },
  reducers: {
    addTrendingMovie: (state, action) => {
      state.trendingMovie = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload
    },
  }
})

export const {
  addTrendingMovie,
  addTrailerVideo,
  addNowPlayingMovie,
  addUpcomingMovie,
  addPopularMovie,
  addTopRatedMovie
} = movieSlice.actions

export default movieSlice.reducer