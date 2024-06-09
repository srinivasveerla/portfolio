import "./index.css";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode, createTheme, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AnimatedSection from "../animations/AnimatedSection";
import Header from "./Header";
import Home from "./Home";
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
        <Container sx={{ maxWidth:"100%"}}>
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
            <Projects />
          </AnimatedSection>
          {/* <AnimatedSection>
            <WorkEx />
          </AnimatedSection> */}
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
