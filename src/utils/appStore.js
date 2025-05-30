import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice"
import movieSlice from "../utils/moviesStore"
import gptSlice from "../utils/gptStore"

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice
  }
})

export default appStore