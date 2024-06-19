import "./index.css";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode, createTheme, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AnimatedSection from "../animations/AnimatedSection";
import Header from "./Header";
import Home from "./Hero";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import WorkEx from "./WorkEx";
import About from "./About";
import Footer from "./Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  let theme: PaletteMode = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
    typography: {
      fontFamily: "monospace",
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 600,
        md: 960,
        lg: 99999999,
        xl: 99999999,
      },
    },
  });
  function HandleChange() {
    setDarkMode((prevState) => {
      return !prevState;
    });
  }
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container
          disableGutters
          sx={{
            // backgroundColor: "orange",
            maxWidth: "80%",
            minWidth: "600px",
            //margin: "50px 50px",
          }}
        >
          <Header dark={darkMode} HandleChange={HandleChange} />
          <AnimatedSection>
            <Home />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <WorkEx />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
