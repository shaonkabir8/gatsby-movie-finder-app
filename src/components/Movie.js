import React from "react"
import { Link } from 'gatsby'


const Movie = ({ movie }) => {
  const {
    poster_path,
    original_title,
    vote_average,
    id,
    release_date,
  } = movie

  return (
    <Link to={`/movie/${id}`} className="movie">
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title} />
      <p>
        <strong>{original_title}</strong>
      </p>
      <div className="img-info-container">
        <p>
          <strong>Category</strong>
        </p>
        <p>
          <strong>{release_date}</strong>
        </p>
      </div>
      <p className="rating">{vote_average}</p>
    </Link>
  )
}

export default Movie
