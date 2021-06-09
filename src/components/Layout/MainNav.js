import React, { useState } from 'react'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import { Link } from 'gatsby'

import Icon from '../Icon'

import klimacamp from '../../assets/images/klimacamp.png'
import germanzero from '../../assets/images/germanzero.png'

export const Logo = styled.img`
  ${isNot('brand')`
    padding: 0.5rem;
  `};
  height: 48px;
  width: 48px;
`

const Nav = styled.nav`
  position: absolute;
  @media(min-width: 768px) {
    position: static;
    flex: 1;
  }
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 1em;
  margin: 0;
  background-color: ${({theme}) => theme.colors.background};

  position: fixed;
  left: 0;
  top: 64px;
  width: 100vw;
  height: calc(100vh - 64px);

  will-change: transform;
  transition: transform 0.5s ease;
  transform: translateX(102%);

  ${is('visible')`
    transform: translateX(0);
  `};

  li {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    height: 48px;
  }


  @media(min-width: 768px) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transform: none;
    position: initial;
    top: initial;
    left: initial;
    width: auto;
    height: auto;

    li {
      flex-direction: row;
      justify-content: flex-start;

      &:last-child {
        align-self: flex-end;
      }
    }
  }
`

const activeClassName = 'active'

const NavItem = styled(Link).attrs({ activeClassName })`
  display: inline-flex;
  align-items: center;

  text-decoration: none;

  color: ${(props) => props.theme.colors.gray};

  &.${activeClassName} {
    color: ${(props) => props.theme.colors.text};
  }
`

const Brand = styled.h1`
  color: ${({theme}) => theme.colors.text};
  font-weight: normal;

  @media(min-width: 768px) {
    margin-left: 1rem;
  }
`

export const pages = {
  '/': 'Home',
}

export const CurrentPage = () => (
  <Brand>{isGermanZero() ? 'Klimaentscheid' : 'Klimacamp Ulm/Neu-Ulm'}</Brand>
)

const MenuButton = styled(Icon)`
  @media(min-width: 768px) {
    display: none;
  }
`

export const isGermanZero = () => window.location.pathname.startsWith('/germanzero')

const getMainNav = () => isGermanZero() ?
  (
    <>
      <li>
        <NavItem to="/germanzero">Home</NavItem>
      </li>
      <li>
        <Logo src={klimacamp} />
        <NavItem to="/">Klimacamp</NavItem>
      </li>
    </>
  ) :
  (
    <>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/news">News</NavItem>
      </li>
      <li>
        <Logo src={germanzero} />
        <NavItem to="/germanzero">GermanZero</NavItem>
      </li>
    </>
  )

const MainNav = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <>
      <MenuButton name="menu" onClick={() => setVisible(!isVisible)} />
      <Nav>
        <NavList visible={isVisible}>
          {getMainNav()}
        </NavList>
      </Nav>
    </>
  )
}

export default MainNav
