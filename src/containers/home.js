import React, { useEffect, useContext } from "react";
import { axiosInstance } from "../configs";
import { AuthContext } from "../provider/authProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const navigate = useNavigate();
  const value = useContext(AuthContext);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:4000/auth/home")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Home
      <button
        onClick={() => {
          value.setToken(null);
          Cookies.remove("access_token");
          navigate("/app", { replace: true });
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
