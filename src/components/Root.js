import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import theme from '../utils/theme'
import { Container, FlexContainer } from "../styles/LayoutStyles"
import Header from "./Header"
import SideBar from "./SideBar"
import Movies from "./Movies"
import { showGenres } from '../utils/genres'

const Root = () => {
  // our API key from MovieDB
  const apiKey = "8beeb3840481b08aae693a269c46433e"

  // define our state
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

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

  // HandleChange [for Searching]
  const handleChange = e => {
    setQuery(e.target.value);
  }
  
  // handleSubmit [for Serach form submit]
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }

  return (
    <ThemeProvider theme={theme}>
      <Header handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Container>
        <FlexContainer>
          <SideBar />
          <Movies movies={movies} handleGenres={handleGenres} />
        </FlexContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Root
