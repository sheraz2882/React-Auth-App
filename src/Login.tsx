import React, { useState } from "react";
import LoginCoverImage from "./assets/login_page_img.jpg";
import "./App.css";

export const LoginComponent = () => {
  return (
    <div>
      <div className="login-page-section">
        <div className="login-detail-section">
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#000", marginBottom: 0 }}>Welcome Back 👋</h3>
            <p style={{ textAlign: "start", color: "#000", fontSize: "14px" }}>
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>
          <LoginForm />
        </div>
        <div className="login-cover">
          <img src={LoginCoverImage} />
        </div>
      </div>
    </div>
  );
};

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.prevantDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit} className="login-form-section">
        <label style={{ color: "#000", fontSize: "16px" }}>Email</label>

        <input
          type="text"
          value={data.email}
          placeholder="Example@gmail.com"
          required
        />

        <label style={{ color: "#000", fontSize: "16px" }}>Password</label>

        <input
          type="text"
          value={data.password}
          placeholder="Example@gmail.com"
          required
        />
      </form>

      <div className="submit-form">
        <p style={{ color: "#000000", fontSize: "16px" }}>Forgot Password?</p>

        <button className="button-css">Sign in</button>
      </div>
    </div>
  );
}
