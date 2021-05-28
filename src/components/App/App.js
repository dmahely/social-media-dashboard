import { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { ThemeContext } from "../../ThemeContext";
import cx from "classnames";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = { isDark, setIsDark };
  return (
    <div
      className={cx(
        "App--container",
        { "theme-light": !isDark },
        { "theme-dark": isDark }
      )}
    >
      <ThemeContext.Provider value={theme}>
        <Header />
      </ThemeContext.Provider>
      @nathanf 1987 Followers 12 Today @nathanf 1044 Followers 99 Today
      @realnathanf 11k Followers 1099 Today Nathan F. 8239 Subscribers 144 Today
      Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile
      Views 52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views
      1407 12%
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};

export { App };
