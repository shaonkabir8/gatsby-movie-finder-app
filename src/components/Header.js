import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "../styles/HeaderStyle"
import Head from './Head'

const Header = () => (
  <HeaderStyle>
    <Head/>
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <Link to="/">Movie Finder</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search-bar">
              <form action="" className="form search-form">
                <input
                  type="text"
                  placeholder="Search Movie"
                  className="form-control"
                />
              </form>
            </div>
          </div>
          <div className="col-md-2">
            <div className="dropdown_item text-center">
              <p>Popular</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </HeaderStyle>
)

export default Header

//TODO:
// Dropdown Items should be added later. now only a hard coded item available on DOM as (Popular)
