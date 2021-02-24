import React from "react";
import { BrowserRouter } from "react-router-dom";


import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header.js"
import HeroBanner from "./HeroBanner"
import About from "./About"
import Tech from "./Tech"
import Contact from "./Contact"
import Experience from "./Experience"
import Footer from "./Footer"

export default function App() {
  return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <HeroBanner />
                <About />
                <Tech />
                <Contact />
                <Experience />
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
  );
}
