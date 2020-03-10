import React from "react"
import Movie from "./Movie"


const Movies = ({ movies, handleGenres }) => {
  
  return (
    <div className="movies-container">
      {movies.map(movie => {
		  return <Movie movie={movie} showGenres={handleGenres}/>
	  })}
    </div>
  )
}

export default Movies
