import React from "react"
import { Link } from 'react-router-dom'
import MovieDB from "../images/MovieDb.png"



const sidebar = () => (
  <nav className="sidebar">
    <ul className="sidebar__list">
      <li className="sidebar__item">
        <Link className="sidebar__link">All Genres</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Adventure</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Action</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Drama</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Comedy</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Fiction</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Romantic</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Horror</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Crime</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Documentary</Link>
      </li>
      <li className="sidebar__item">
        <Link className="sidebar__link">Animation</Link>
      </li>
    </ul>
    <div className="sidebar__footer">
      <div className="sidebar__footer-image">
      <a href="https://example.com">
      <img src={MovieDB} alt="MovieDB_Logo"  className="sidebar__footer-img" />
      </a>
      </div>
      <div className="sidebar__footer-content">
      Build with <i className="fas fa-heart"></i> and
        <i className="fas fa-coffee"></i> by {""}
        <a
          href="https://shaonkabir.netlify.com"
          className="footer-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shaon Kabir
        </a>
        &copy; 2020. View Project on {""}
        <a
          href="https://github.com/shaonkabir8/gatsby-movie-finder-app"
          rel="noopener noreferrer"
          className="footer-link"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  </nav>
)

export default sidebar
