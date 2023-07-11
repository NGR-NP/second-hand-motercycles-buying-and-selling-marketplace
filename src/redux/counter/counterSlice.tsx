import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, color: null },

  reducers: {
    Increment: (state, action) => {
      const { title } = action.payload;
      state.count += 1;
    },
    Decrement: (state, action) => {
      if (state.count >= 1) {
        state.count -= 1;
      }
    },
    setColor: (state, action) => {
      const { color } = action.payload;
      state.color = color;
    },
  },
});

export const { Increment, Decrement, setColor } = counterSlice.actions;
export default counterSlice.reducer;
