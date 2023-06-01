import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
