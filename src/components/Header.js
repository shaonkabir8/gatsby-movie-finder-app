import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "../styles/HeaderStyle"
import Head from "./Head"

const Header = () => (
  <HeaderStyle>
    <Head />
    <header className="header">
      <div className="logo">
        <Link to="/">Movie Finder</Link>
      </div>
      <div className="search-bar">
        <form action="" className=" search-form">
          <input
            type="text"
            placeholder="Search Movie"
            className="fo"
          />
        </form>
      </div>
      <div className="dropdown_item text-center">
        <p>Popular</p>
      </div>
    </header>
  </HeaderStyle>
)

export default Header

//TODO:
// Dropdown Items should be added later. now only a hard coded item available on DOM as (Popular)
