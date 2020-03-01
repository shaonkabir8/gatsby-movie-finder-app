import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import Movie from "./Movie"

const MovieStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	padding: 3rem;
	background: ${props => props.theme.color.light};
`;


const Movies = ({ movies, handleGenres }) => {
  
  return (
    <MovieStyle>
      {movies.map(movie => {
		  return <Movie movie={movie} showGenres={handleGenres}/>
	  })}
    </MovieStyle>
  )
}

export default Movies
