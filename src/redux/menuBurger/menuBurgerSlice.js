import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: true,
};

const menuBurgerSlice = createSlice({
  name: "menuBurger",
  initialState: INITIAL_STATE,
  reducers: {
    toggleOcultarMenuBurger: (state) => {
      return { ...state, hidden: !state.hidden };
    },
  },
});

export const { toggleOcultarMenuBurger } = menuBurgerSlice.actions;

export default menuBurgerSlice.reducer;
