import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import content from "./components/styled/Contents.Cards";
import Footer from "./components/footer/Footer";

const theme = {
  colors: {
    header: "",
    body: "#efff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
