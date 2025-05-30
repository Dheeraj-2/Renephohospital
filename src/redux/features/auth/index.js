// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getItemFromStore, setItemToStore } from "../../../utils";

const initialState = {
  token: getItemFromStore("renepho") || null,
  isAuthenticated: !!getItemFromStore("renepho"),
  role: (getItemFromStore("renepho") && getItemFromStore("role")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      const { token, isAuthenticated, role } = action.payload;
      state.token = token;
      state.isAuthenticated = isAuthenticated;
      state.role = role;


      setItemToStore("renepho", token);
      setItemToStore("role", role);
      setItemToStore("isAuthenticated", isAuthenticated);
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
