import React from "react";
import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card__header">
          <h1>Login</h1>
        </div>
        <div className="login__card__content">
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Login;
