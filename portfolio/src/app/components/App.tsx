import "./index.css";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  PaletteMode,
  createTheme,
  Container,
  Button,
  Typography,

} from "@mui/material";
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
import DownloadIcon from "@mui/icons-material/Download";
import WiggleComponent from "../animations/WiggleComponent";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme: PaletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: darkTheme,
    },
    typography: {
      fontFamily: "monospace",
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 700,
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header dark={darkMode} HandleChange={HandleChange} />
        <Container
          disableGutters
          sx={{
            // backgroundColor: "orange",
            maxWidth: "80%",
            minWidth: "500px",
            //margin: "50px 50px",
          }}
        >
          <Button
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
            }}
            sx={{
              color: "primary.main",
              borderRadius: "20px",
              borderWidth: "2px",
              borderColor: "primary.main",
            }}
            variant="outlined"
          >
            <WiggleComponent>
              <DownloadIcon sx={{ mr: 1 }} />
            </WiggleComponent>
            <Typography variant="body1" sx={{ mr: 1 }}>
              Resume
            </Typography>
          </Button>
          <AnimatedSection>
            <Home />
          </AnimatedSection>
          <AnimatedSection>
            <section id="about">
              <About />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="skills">
              <Skills />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="education">
              <Education />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="workex">
              <WorkEx />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="projects">
              <Projects />
            </section>
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
