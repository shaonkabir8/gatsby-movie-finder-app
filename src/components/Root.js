import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Container, FlexContainer } from '../styles/LayoutStyles';
import Header from "./Header"
import Footer from "./Footer"
import SideBar from "./SideBar";
import Movies from './Movies';

// Define Theme Options
const theme = {
  color: {
    bg: "#0c0f26",
    light: "#171934",
    yellow: "#faca31",
    link: "#7678fb",
  },
  transition: "all .3s linear",
}

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <FlexContainer>
          <SideBar />
          <Movies />
        </FlexContainer>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Root
