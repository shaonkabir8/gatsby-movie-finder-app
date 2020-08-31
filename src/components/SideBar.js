import React from "react";
import moviedbLogo from "../img/moviedb.png";

const SideBar = ({ items, onItemSelect, selectedItem }) => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {items.map(item => (
          <li
            key={item.id}
            className={
              item === selectedItem
                ? "side-nav__item side-nav__item--active"
                : "side-nav__item"
            }
            onClick={() => onItemSelect(item)}
          >
            <p className="side-nav__link">{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="footer">
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          className="footer__logo"
          rel="noopener noreferrer"
        >
          <img
            src={moviedbLogo}
            alt="Powered by the movie database"
            className="footer__logo-img"
          />
        </a>
        <div className="legal">
          &copy; 2019 by{" "}
          <a
            href="https://shaonkabir.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Shaon Kabir.
          </a>{" "}
          All rights reserved. View project on{" "}
          <a
            href="https://github.com/shaonkabir8/gatsby-movie-finder-app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub.
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
