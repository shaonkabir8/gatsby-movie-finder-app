import React from "react"
import { Link } from 'react-router-dom'


const Movie = ({ movie , showGenres}) => {
  const { poster_path, original_title, vote_average, id, release_date } = movie

  return (
    
    <div className="movies">
      <Link to={`/movie/${id}`} className="movies__link">
        <img
          className="movies__img"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
        <p className="movies__title">
          <strong>{original_title}</strong>
        </p>
        <div className="movies__info">
          <p>
            <strong>{showGenres(movie)}</strong>
          </p>
          <p>
            <strong>{release_date}</strong>
          </p>
        </div>
        <p className="movies__ratings"><i className="fas fa-star"></i>{vote_average}</p>
      </Link>
    </div>
  )
}

export default Movie
