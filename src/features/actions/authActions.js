import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../configs";

export const userLogin = createAsyncThunk("auth/login", async () => {
  try {
    const { data } = await axiosInstance.post(
      `http://localhost:4000/auth/login`,
      { email: "indlevel50@gmail.com", password: "12345" }
    );
    // localStorage.setItem("userToken", data.userToken);
    console.log("during action");
    return data;
  } catch (error) {
    // return custom error message from API if any
    throw new Error(error);
  }
});
