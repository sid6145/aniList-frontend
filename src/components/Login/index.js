import React from "react";
import "./style.css";

function Login() {
  return (
    <div className="login-container">
      <video autoPlay muted loop id="background-video">
        <source src="login-background.mp4" type="video/mp4" />
      </video>

        <div className="login">
            <h3 className="login-heading">Login</h3>
            <div>
            <input type="text" className="inputs"/>
            </div>
            <div>

            <input type="text" className="inputs"/>
            </div>
            <button className="login-btn">Login</button>
        </div>
    </div>
  );
}

export default Login;
