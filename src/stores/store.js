import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./slicer/restaurantSlice";
import menuListReducer from "./slicer/menuSlice";
import dishesReducer from "./slicer/dishSlice";
import authDataReducer from "./slicer/authSlice";

export default configureStore({
  reducer: {
    restaurants: restaurantReducer,
    menuList: menuListReducer,
    dishItemList: dishesReducer,
    authData: authDataReducer,
  },
});
