import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/actions/authActions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const user = useSelector((state) => state.auth);
  console.log(user?.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // throw new Error("regreg");
  }, []);
  return (
    <div>
      <button
        onClick={async () => {
          console.log("clicked");

          let res = await dispatch(userLogin());
          console.log("after action");
          navigate("/");
        }}
      >
        Login here please
      </button>
    </div>
  );
};
