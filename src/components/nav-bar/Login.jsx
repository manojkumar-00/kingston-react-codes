import React, { useState } from "react";

import "./Login.css";

function Login() {
  let [isLogged, setIsLogged] = useState(false);

  function handleButtonClick() {
    setIsLogged(!isLogged);
    console.log("is logged value : ", isLogged);
  }

  return (
    <div>
      <h3>{isLogged ? "You have successfully logged in" : "Please login"}</h3>
      <button
        className={isLogged ? "on-login" : ""}
        onClick={handleButtonClick}
      >
        {isLogged ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default Login;
