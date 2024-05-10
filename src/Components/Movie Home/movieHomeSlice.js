import { createSlice } from "@reduxjs/toolkit";

export const movieHomeSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    email: "",
    wishlist: [],
  },
  reducers: {
    handleClickCreateAccount: (state) => {
      const key = "registeredUser";
      const previousUsers = [...(JSON.parse(localStorage.getItem(key)) || [])];
      let registeredUser = [...previousUsers];
      localStorage.setItem(key, JSON.stringify([...registeredUser, state]));
      let recheckUsers = localStorage.getItem(key);
      let parsing = JSON.parse(recheckUsers);
    },
    handleChangeName: (state, e) => {
      state.name = e.payload;
    },
    handleChangeEmail: (state, e) => {
      state.email = e.payload;
    },
  },
});

export const { handleClickCreateAccount, handleChangeName, handleChangeEmail } =
  movieHomeSlice.actions;

export default movieHomeSlice.reducer;
