import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "gatsby"

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
        // console.log(data)
        setMovie(data)
      })
      .catch(error => console.log(error))
  }, [])

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
    id
  } = movie
  return (
    <>
      {/* <Header /> */}
      <div className="movie--info">
        <div className="movie--info__header">
          <h3 className="movie--info__til">{original_title}</h3>
          <p className="ratings">
            <i className="fas fa-star"></i>
            {vote_average}
          </p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={original_title}
          className="movie--info__img"
        />
        <h3 className="movie--info__tagline">{tagline}</h3>
        <div className="movie--info__body">
          <Link to="/">
            <i className="fas fa-long-arrow-alt-left"></i>Home
          </Link>
          <a href={`https://www.themoviedb.org/movie/${id}/cast`}>Full Cast</a>
          <a href="https:/tmd.com">
            <i className="fas-fa-play"></i>Watch Trailer
          </a>
        </div>
        <p className="movie--info__overview">{overview}</p>
        <div className="movie--info__table">
          <hr />
          <p>Budget: {budget}</p>
          <p>Popularity: {popularity}</p>
          <p>Released on: {release_date}</p>
          <a href={homepage}>
            More Inforamtion <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default MovieInfo
