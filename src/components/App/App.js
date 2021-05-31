import { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { OverviewContainer } from "../OverviewContainer/OverviewContainer";
import { PlatformContainer } from "../PlatformContainer/PlatformContainer";
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
        <PlatformContainer />
        <OverviewContainer />
        <div className="App--attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/dmahely">Doaa Mahely</a>.
        </div>
      </div>
    </main>
  );
};

export { App };
