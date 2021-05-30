import { useContext, useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { OverviewContainer } from "../OverviewContainer/OverviewContainer";
import { ThemeContext } from "../../ThemeContext";
import cx from "classnames";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = { isDark, setIsDark };
  return (
    <main className={cx({ "theme-light": !isDark }, { "theme-dark": isDark })}>
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
        <OverviewContainer />
        @nathanf 1987 Followers 12 Today @nathanf 1044 Followers 99 Today
        @realnathanf 11k Followers 1099 Today Nathan F. 8239 Subscribers 144
        <div>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </main>
  );
};

export { App };
