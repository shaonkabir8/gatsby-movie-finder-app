import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import MovieInfoStyle from "../styles/MovieInfoStyle"
import Head from './Head'

const MovieInfo = props => {
  // Define our state
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const apiKey = "8beeb3840481b08aae693a269c46433e"
    const id = props.match.params.id
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    // Fetch data from the url
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovie(data)
      })
      .catch(error => console.log(error))
  }, [props.match.params.id])

  const {
    backdrop_path,
    budget,
    homepage,
    original_title,
    overview,
    popularity,
    release_date,
    tagline,
    vote_average,
    id,
  } = movie

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`
  }

  return (
    <MovieInfoStyle>
      <Head />
      <div className="section-bg" style={backgroundImage}>
        <div className="movie--info">
          <div className="movie--info__header">
            <h3 className="movie--info__header--title">{original_title}</h3>
            <p className="movie--info__header--ratings">
              <i className="fas fa-star"></i>
              {vote_average}
            </p>
          </div>
          <div className="movie--info__image-container"  style={backgroundImage}>
            <div className="movie--info__image-container-overlay"></div>
            <h3 className="movie--info__tagline">{tagline}</h3>
          </div>
          <div className="movie--info__body">
            <Link to="/">
              <i className="fas fa-long-arrow-alt-left"></i>Home
            </Link>
            <a href="https:/tmd.com">
            Watch Trailer
              <i className="far fa-play-circle"></i>
            </a>
          </div>
          <p className="movie--info__overview">{overview}</p>
        </div>
      </div>
    </MovieInfoStyle>
  )
}

export default MovieInfo
