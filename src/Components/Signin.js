import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../context/UserContext";

function Signin() {
  // for getting value from username and password by using action
  const [userName, setuserName] = React.useState("");
  const [userPassword, setuserPassword] = React.useState("");

  // this is to redirect to cart page. // usenavigate is a builtin component
  const navigate = useNavigate();

  const { handleAuthChange } = useCreateAuthDispatchContext();

  // this is function which one is callign on submit button
  const handleOnclick = () => {
    console.log(userName, userPassword);
    if (userName !== "1" && userPassword !== "1") {
      return;
    }

    // it will keep session save untill logout
    handleAuthChange(true);
    // this is to redirect link

    navigate("/cart");
  };

  return (
    // we will get value of the input field with setting a dummy variable e. and then store to its state variable

    <div className="form" style={{ marginTop: "10px", marginLeft: "20px" }}>
      <input
        type="text"
        placeholder="Write Text Here"
        value={userName}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Write Text Here"
        value={userPassword}
        onChange={(e) => {
          setuserPassword(e.target.value);
        }}
      />
      <button onClick={handleOnclick}>Sign In</button>
    </div>
  );
}

export default Signin;
