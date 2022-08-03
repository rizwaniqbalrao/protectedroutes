import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../../context/UserContext";

const SignInRoute = ({ children }) => {
  const checkUser = useCreateAuthStateContext();

  if (checkUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default SignInRoute;
