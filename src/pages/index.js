import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

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

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <div className="wrapper">
        <div className="flex-container">
          <SideBar />
          <div
            className="col-md-6 offset-md-3 text-right"
            style={{ height: "50vh" }}
          >
            <h1 className="text-center my-3">Movie Card will go here</h1>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default Index
