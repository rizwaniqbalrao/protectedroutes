import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../../context/UserContext";

const SignOutRoute = ({ children }) => {
  const { handleAuthChange } = useCreateAuthDispatchContext();
  handleAuthChange(false);
  return <Navigate to="/" />;
};

export default SignOutRoute;
