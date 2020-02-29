import React, { useState, useEffect } from "react"
import Movie from "./Movie"
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

  return (
    <section className="movies">
      {movies.map(movie => {
		  return <Movie movie={movie}/>
	  })}
    </section>
  )
}

export default Movies
