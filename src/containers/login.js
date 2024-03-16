import axios from "axios";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../configs";
import { AuthContext } from "../provider/authProvider";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const value = useContext(AuthContext);

  return (
    <div
      onClick={async () => {
        try {
          // Make API call to authenticate user
          const response = await axiosInstance.post(
            "http://localhost:4000/auth/login",
            {
              email: "indlevel50@gmail.com",
              password: "12345",
            }
          );
          let token = Cookies.get("access_token");
          value.setToken(token);
          navigate("/app");
        } catch (error) {
          console.error("Login failed", error);
        }
      }}
    >
      <button>Login to access</button>
    </div>
  );
};

export default Login;
