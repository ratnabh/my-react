import React, { useEffect, useContext } from "react";
import { axiosInstance } from "../configs";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      You are logged in !
      <br/>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>

      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default Home;
