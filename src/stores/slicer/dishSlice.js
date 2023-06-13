import { createSlice } from "@reduxjs/toolkit";
import { dishes } from "mock-data/dish";

const dishesData = dishes;

export const dishSlice = createSlice({
  name: "dishItemList",
  initialState: {
    dishesList: dishesData.dishItems,
  },
  reducers: {},
});

export default dishSlice.reducer;
