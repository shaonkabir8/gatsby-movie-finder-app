import React from "react"
import { Link } from "gatsby"
import SideBarStyle from "../styles/SideBarStyle"

const sidebar = () => (
  <SideBarStyle>
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">All Genres</Link>
        </li>
        <li>
          <Link to="/">Adventure</Link>
        </li>
        <li>
          <Link to="/">Action</Link>
        </li>
        <li>
          <Link to="/">Drama</Link>
        </li>
        <li>
          <Link to="/">Comedy</Link>
        </li>
        <li>
          <Link to="/">Fiction</Link>
        </li>
        <li>
          <Link to="/">Romantic</Link>
        </li>
        <li>
          <Link to="/">Horror</Link>
        </li>
        <li>
          <Link to="/">Crime</Link>
        </li>
        <li>
          <Link to="/">Documentary</Link>
        </li>
        <li>
          <Link to="/">Animation</Link>
        </li>
      </ul>
    </nav>
  </SideBarStyle>
)

export default sidebar
