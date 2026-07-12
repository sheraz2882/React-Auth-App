import React, { useState } from "react";
import SignupCoverImage from "./assets/login_page_img.jpg";
import { Link } from "react-router-dom";
import "./css/App.css";
import "./css/Signup.css";

export const SignupComponent = () => {
  return (
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
            Create Account
          </h3>
          <p
            style={{
              textAlign: "start",
              color: "#000",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Join today and manage your projects with ease.
          </p>
        </div>
        <SignupForm />
      </div>
      <div className="login-cover">
        <img src={SignupCoverImage} alt="Signup cover" />
      </div>
    </div>
  );
};

function SignupForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
  });

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
      fullName: "",
      email: "",
      password: "",
      gender: "",
      city: "",
    };

    if (!data.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

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

    if (!data.gender.trim()) {
      validationErrors.gender = "Please select your gender.";
    }

    if (!data.city.trim()) {
      validationErrors.city = "City is required.";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (
      !validationErrors.fullName &&
      !validationErrors.email &&
      !validationErrors.password &&
      !validationErrors.gender &&
      !validationErrors.city
    ) {
      alert("Signup successful!");
    }
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
          <label style={{ color: "#000", fontSize: "16px" }}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.fullName ? (
            <p className="error-text">{errors.fullName}</p>
          ) : null}
        </div>

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

        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <label style={{ color: "#000", fontSize: "16px" }}>Gender</label>
          <select name="gender" value={data.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender ? <p className="error-text">{errors.gender}</p> : null}
        </div>

        <div className="form-inputs" style={{ marginBottom: "15px" }}>
          <label style={{ color: "#000", fontSize: "16px" }}>City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
          {errors.city ? <p className="error-text">{errors.city}</p> : null}
        </div>

        <div className="submit-form">
          <button className="button-css" type="submit">
            Sign up
          </button>

          <p style={{ marginTop: "12px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
