import React from "react";
import MoviesLoader from "./MoviesLoader";
import MovieCard from "./MovieCard";
import SideBar from "./SideBar";
import Header from "./Header";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import PhoneNav from "./PhoneNav";
import PhoneFooter from "./PhoneFooter";

const Movies = ({
  filtered,
  genres,
  pageSize,
  currentPage,
  sortValue,
  loading,
  bounce,
  selectedGenre,
  searchQuery,
  onPageChange,
  onGenreSelect,
  onSearch,
  onGenres,
  onSortValue
}) => {
  const movies = paginate(filtered, currentPage, pageSize);

  return (
    <div className="container">
      <div className="phone-fixed-header">
        <Header
          value={searchQuery}
          onSearch={onSearch}
          onValueSelect={onSortValue}
          sortValue={sortValue}
        />
        <PhoneNav
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={onGenreSelect}
        />
      </div>
      <main className="flex-container">
        <SideBar
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={onGenreSelect}
        />
        <div className="content-flex">
          <MoviesLoader
            movies={movies}
            loading={loading}
            bounceEffect={bounce}
          />
          <MovieCard movies={movies} showGenres={onGenres} />
          <Pagination
            numberOfItems={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </main>
      <PhoneFooter />
    </div>
  );
};

export default Movies;
