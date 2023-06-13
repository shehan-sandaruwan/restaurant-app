import { createSlice } from "@reduxjs/toolkit";
import { menuList } from "mock-data/menu";

const menuData = menuList;

export const menuSlice = createSlice({
  name: "menuList",
  initialState: {
    menuItemList: menuData.menuItem,
  },
  reducers: {
    setIsActive: (state, action) => {
      console.log(action);
      const newList = state.menuItemList.map((item) => {
        if (item.key === action.payload) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }

        return item;
      });

      state.menuItemList = newList;
    },
  },
});

export const { setIsActive } = menuSlice.actions;

export default menuSlice.reducer;
