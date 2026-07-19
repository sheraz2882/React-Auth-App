import React, { useState } from "react";
import ProfileIcon from "./assets/profile_icon.png";

export const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // add logout logic here
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
