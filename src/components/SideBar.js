import React from "react"
import {
  SideBarNav,
  SideBarNavList,
  SideBarNavItem,
  SideBarNavLink,
  FooterArea,
  FooterContent
} from "../styles/SideBarStyle"
import MovieDB from "../images/MovieDb.png"

const sidebar = () => (
  <SideBarNav>
    <SideBarNavList>
      <SideBarNavItem>
        <SideBarNavLink>All Genres</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Adventure</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Action</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Drama</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Comedy</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Fiction</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Romantic</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Horror</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Crime</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Documentary</SideBarNavLink>
      </SideBarNavItem>
      <SideBarNavItem>
        <SideBarNavLink>Animation</SideBarNavLink>
      </SideBarNavItem>
    </SideBarNavList>
    <FooterArea>
      <a
        href="https://themovie.com"
        target="_blank"
        rel="noopener noreferrer"
        className="movidb-credit"
      >
        <img src={MovieDB} alt="MovieDB_Logo" />
      </a>
      <FooterContent>
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
      </FooterContent>
    </FooterArea>
  </SideBarNav>
)

export default sidebar
