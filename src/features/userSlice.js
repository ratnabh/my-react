import { createAction, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./actions/authActions";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false,
  isAuthenticated: false,
  permissions: ["user"],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // login user
    // [userLogin.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(action, "action");
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.userToken;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });

    // [userLogin.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.userInfo = payload;
    //   state.userToken = payload.userToken;
    // },
    // [userLogin.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
