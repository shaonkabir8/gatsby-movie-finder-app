import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import Movie from "./Movie"
import { showGenres } from '../utils/genres'

const MovieStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	padding: 3rem;
	background: ${props => props.theme.color.light};
`;


const Movies = () => {
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
    return showGenres().map(m => (m.id === movie.genre_ids[0] ? m.name : null));
  };



  return (
    <MovieStyle>
      {movies.map(movie => {
		  return <Movie movie={movie} showGenres={handleGenres}/>
	  })}
    </MovieStyle>
  )
}

export default Movies
