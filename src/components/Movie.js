import React from "react"
import { Link } from "gatsby"
import {
  MovieLink,
  MovieStyle,
  MovieTitle,
  Infocontainer,
  MovieRatings
} from "../styles/MovieStyles"

const Movie = ({ movie }) => {
    console.log(movie)
  const { poster_path, original_title, vote_average, id, release_date } = movie

  return (
    <MovieStyle>
      <MovieLink to={`/movie/${id}`} className="movie">
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
            <strong>Category</strong>
          </p>
          <p>
            <strong>{release_date}</strong>
          </p>
        </Infocontainer>
        <MovieRatings><i className="fas fa-star"></i>{vote_average}</MovieRatings>
      </MovieLink>
    </MovieStyle>
  )
}

export default Movie
