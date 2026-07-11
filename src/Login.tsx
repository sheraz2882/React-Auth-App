import React, { useState } from "react";
import LoginCoverImage from "./assets/login_page_img.jpg";
import ORImage from "./assets/Or.png";
import GOOGLEICON from "./assets/google_icon.png";
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
              alignItems: "start",
            }}
          >
            <h3 style={{ color: "#000", marginBottom: "15px" }}>
              Welcome Back 👋
            </h3>
            <p
              style={{
                textAlign: "start",
                color: "#000",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <label style={{ color: "#000", fontSize: "16px" }}>Email</label>

          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Example@gmail.com"
            required
          />
        </div>

        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <label style={{ color: "#000", fontSize: "16px" }}>Password</label>

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            required
          />
        </div>
      </form>

      <div className="submit-form">
        <p
          className="forgot-password"
          style={{ color: "#1d2ff7", fontSize: "16px" }}
        >
          Forgot Password?
        </p>

        <button className="button-css">Sign in</button>
      </div>

      <div className="social-logins">
        <img style={{ margin: "20px", width: "75%" }} src={ORImage} />

        <button className="leading-icon-button">
          <img src={GOOGLEICON} />
          <span style={{ fontSize: "16px" }}>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
