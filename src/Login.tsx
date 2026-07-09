import React from "react";
import LoginCoverImage from "./assets/login_page_img.jpg";
import "./App.css";

export const LoginComponent = () => {
  return (
    <div>
      <div className="login-page-section">
        <div className="login-detail-section">
          <h3 style={{ color: "#000" }}>Welcome Back 👋</h3>
          <p style={{ textAlign: "start", color: "#000" }}>
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
        </div>
        <div className="login-cover">
          <img src={LoginCoverImage} />
        </div>
      </div>
    </div>
  );
};
