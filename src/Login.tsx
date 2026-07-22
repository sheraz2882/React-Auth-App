import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginCoverImage from "./assets/login_page_img.jpg";
import ORImage from "./assets/Or.png";
import GOOGLEICON from "./assets/google_icon.png";
import "./css/App.css";
import "./css/spinner.css";

export const LoginComponent = () => {
  return (
    <div>
      <div className="login-page-section">
        <div className="login-detail-section">
          <div
            style={{
              width: "70%",
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
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const validationErrors = {
      email: "",
      password: "",
    };

    if (!data.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!data.password.trim()) {
      validationErrors.password = "Password is required.";
    } else if (data.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters.";
    }

    return validationErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      try {
        const loginFetchResponse = await fetch(
          "http://localhost:5000/api/auth/login",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
          },
        );

        const responseData = await loginFetchResponse.json();

        // const text = loginFetchResponse.text(); // read as text first, not .json()
        // console.log("Status:", loginFetchResponse.status);
        // console.log("Raw response:", text);

        if (!loginFetchResponse.ok) {
          throw new Error(responseData.message || "Login Failed");
        }

        localStorage.setItem("loginToken", responseData.token);

        //navigation to home page
        navigate("/home");
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
  }

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
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Example@gmail.com"
          />
          {errors.email ? <p className="error-text">{errors.email}</p> : null}
        </div>

        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <label style={{ color: "#000", fontSize: "16px" }}>Password</label>

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
          />
          {errors.password ? (
            <p className="error-text">{errors.password}</p>
          ) : null}
        </div>

        <div className="submit-form">
          <p
            className="forgot-password"
            style={{ color: "#1d2ff7", fontSize: "16px" }}
          >
            Forgot Password?
          </p>

            {loading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span className="sr-only">Signing in...</span>
              </>
            ) : (
              "Sign in"
            )}
          </button>

          {error && (
            <p style={{ color: "crimson", marginBottom: 12 }}>{error}</p>
          )}
        </div>
      </form>

      <div className="social-logins">
        <img style={{ margin: "20px", width: "75%" }} src={ORImage} />

        <button className="leading-icon-button">
          <img src={GOOGLEICON} />
          <span style={{ fontSize: "16px" }}>Sign in with Google</span>
        </button>

        <p style={{ marginTop: "12px" }}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
