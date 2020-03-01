import React from "react"
import { Link } from 'react-router-dom'
import {
  MovieStyle,
  MovieTitle,
  Infocontainer,
  MovieRatings
} from "../styles/MovieStyles"


const Movie = ({ movie , showGenres}) => {
  const { poster_path, original_title, vote_average, id, release_date } = movie

  return (
    <MovieStyle>
      <Link to={`/movie/${id}`} className="movie">
        <img
          className="movie__img"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
        <MovieTitle>
          <strong>{original_title}</strong>
        </MovieTitle>
        <Infocontainer>
          <p>
            <strong>{showGenres(movie)}</strong>
          </p>
          <p>
            <strong>{release_date}</strong>
          </p>
        </Infocontainer>
        <MovieRatings><i className="fas fa-star"></i>{vote_average}</MovieRatings>
      </Link>
    </MovieStyle>
  )
}

export default Movie
