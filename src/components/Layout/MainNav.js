import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Icon from '../Icon'

const Nav = styled.nav`
  flex: 1;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  align-items: baseline;
`

const activeClassName = 'active'

const NavItem = styled(Link).attrs({ activeClassName })`
  text-decoration: none;

  color: ${(props) => props.theme.colors.gray};

  &.${activeClassName} {
    color: ${(props) => props.theme.colors.text};
  }
`

const MainNav = () => (
  <Nav>
    <NavList>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/germanzero">GermanZero</NavItem>
      </li>
      <li>
        <NavItem to="/news">News</NavItem>
      </li>
    </NavList>
    <Icon name="menu" />
  </Nav>
)

export default MainNav
