import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../../context/UserContext";

const CartRoute = ({ children }) => {
  const checkUser = useCreateAuthStateContext();

  if (!checkUser) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default CartRoute;
