import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleClick = (e) => setIsDark((isDark) => !isDark);
  return (
    <div className="Header--container">
      <div className="Header--inner-container">
        <h1 className="Header--heading">Social Media Dashboard</h1>
        <span className="Header--follower-count">Total Followers: 23,004</span>
      </div>
      <hr className="Header--divider" />
      <label className="Header--toggle-label">
        Dark Mode{" "}
        <input
          className="Header--toggle"
          onClick={handleClick}
          type="checkbox"
        />
      </label>
    </div>
  );
};

export { Header };
