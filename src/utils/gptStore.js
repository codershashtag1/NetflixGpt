import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false
  },
  reducers: {
    isShowGPT: (state) => {
      state.showGPT = !state.showGPT
    }
  }
})

export const { isShowGPT } = gptSlice.actions

export default gptSlice.reducer