import React, { useState } from "react";
import ProfileIcon from "./assets/profile_icon.png";
import { useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    // add logout logic here

    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:5000/api/auth/logout");

      const logoutResponseData = await response.json();

      if (!response.ok) {
        throw new Error(logoutResponseData.message || "");
      }

      navigate("/");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(message);
    } finally {
      setLoading(false);
    }

    setMenuOpen(false);
  };

  return (
    <header className="home-header">
      <div className="home-header__spacer" />
      <h1 className="home-header__title">Home</h1>
      <div className="home-header__profile-wrap">
        <button
          className="home-header__profile-button"
          type="button"
          aria-label="Profile"
          onClick={toggleMenu}
        >
          <img src={ProfileIcon} alt="Profile" />
        </button>

        {menuOpen && (
          <div className="home-header__profile-menu">
            <button type="button" className="home-header__profile-menu-item">
              Profile
            </button>
            <button
              type="button"
              className="home-header__profile-menu-item"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
