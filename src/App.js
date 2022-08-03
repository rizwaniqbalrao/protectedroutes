import React from "react";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import "./App.css";
import Cart from "./Components/Cart";
import CartRoute from "./Components/ProtectedRoute/CartRoute";
import { useCreateAuthStateContext } from "./context/UserContext";
import SignInRoute from "./Components/ProtectedRoute/SignInRoute";
import SignOutRoute from "./Components/ProtectedRoute/SignInRoute";

//import Header from "";
function App() {
  const value = useCreateAuthStateContext();
  console.log("value", value);
  // const [user, setUser] = React.useState(null);

  // const handleLogin = () => setUser({ id: "1", name: "robin" });
  // const handleLogout = () => setUser(null);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <Signin />
            </SignInRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <CartRoute>
              <Cart />
            </CartRoute>
          }
        />
        <Route path="/signout" element={<SignOutRoute />} />
      </Routes>
    </div>
  );
}

export default App;
