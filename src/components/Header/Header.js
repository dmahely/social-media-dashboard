import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext";

const Header = () => {
  const { setIsDark } = useContext(ThemeContext);

  const handleClick = (e) => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <div className="Header--container">
      <div className="Header--inner-container">
        <h1 className="Header--heading">Social Media Dashboard</h1>
        <span className="Header--follower-count">Total Followers: 23,004</span>
      </div>
      <hr className="Header--divider" />
      <div className="Header--toggle-container">
        <span className="Header--toggle-label" aria-hidden="true">
          Dark Mode
        </span>
        <input
          className="Header--toggle"
          id="Header--toggle"
          onClick={handleClick}
          type="checkbox"
        />
        <label className="Header--toggle-label-hidden" for="Header--toggle">
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export { Header };
