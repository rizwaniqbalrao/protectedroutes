import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

export const Header = () => {
  return (
    <>
      <div className="main">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">signin</Link>
        <Link to="/signout">signout</Link>
      </div>
    </>
  );
};
