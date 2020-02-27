import React from "react"
import { Link } from "gatsby"
import {SideBarNav, SideBarNavList, SideBarNavItem, SideBarNavLink } from "../styles/SideBarStyle"

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
          <SideBarNavLink >Fiction</SideBarNavLink>
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
          <SideBarNavLink >Animation</SideBarNavLink>
        </SideBarNavItem>
        </SideBarNavList>
  </SideBarNav>
)

export default sidebar
