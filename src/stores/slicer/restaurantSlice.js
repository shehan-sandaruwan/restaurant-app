import { createSlice } from "@reduxjs/toolkit";
import { restaurantData } from "mock-data/restaurant";
import { restaurantWithHigherRates } from "mock-data/highestRatingRestaurant";

const restauranyMockData = restaurantData;

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantList: restauranyMockData.restaurants,
    highestRatedRestaurant: restaurantWithHigherRates,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
