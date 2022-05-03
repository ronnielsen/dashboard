import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { locations } from "./data";

import { GlobalStyles, Sidebar, Content } from "./components";

const Window = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  color: ${p => p.theme.text};
  @media (max-width: 768px) {
  }
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentPage, setCurrentPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(true);
  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  useEffect((isMobile) => {
    // eslint-disable-next-line
    var isMobile = window.matchMedia("(max-width: 767px)");
    function closeMenu() {
      if (isMobile.matches) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    }
    closeMenu(isMobile);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles>
        <Window>
          <Sidebar
            locations={locations}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            toggleTheme={toggleTheme}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Content
            toggleTheme={toggleTheme}
            theme={theme}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            title={currentPage}
            currentPage={currentPage}
          />
        </Window>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
