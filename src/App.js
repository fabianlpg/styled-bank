import React from "react";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME, DARK_THEME } from "./Components/UI/Temas";
import { BtnTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";
import Home from "./assets/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from "./assets/Pages/Page404";

function App() {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(JSON.parse(currentTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme ? LIGHT_THEME : DARK_THEME}>
          <GlobalStyle />
          <Header />
          <BtnTheme onClick={toggleTheme}>
            <SwitchTheme theme={theme} />
          </BtnTheme>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            <Route path="/account" element={<Container theme={theme} />} />
            <Route path='*' element={<Page404 theme={theme} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;