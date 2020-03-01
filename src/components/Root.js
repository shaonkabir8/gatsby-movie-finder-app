import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Container, FlexContainer } from "../styles/LayoutStyles"
import Header from "./Header"
import Footer from "./Footer"
import SideBar from "./SideBar"
import Movies from "./Movies"
import { showGenres } from '../utils/genres'

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
  // our API key from MovieDB
  const apiKey = "8beeb3840481b08aae693a269c46433e"

  // define our state
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/4/list/1?page=1&api_key=${apiKey}`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.log(err))
  }, [])

  // HandleGenres
  const handleGenres = movie => {
    return showGenres().map(m => (m.id === movie.genre_ids[0] ? m.name : null))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <FlexContainer>
          <SideBar />
          <Movies movies={movies} handleGenres={handleGenres} />
        </FlexContainer>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Root
