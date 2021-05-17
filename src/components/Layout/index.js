import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './styles'
import germanzero from '../../assets/images/germanzero.png'
import klimacamp from '../../assets/images/klimacamp.png'

import MainNav, { CurrentPage, Logo, isGermanZero } from './MainNav'

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }

  display: grid;
  grid-template-rows: 64px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'content';
`

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  grid-area: header;
`

const Main = styled.main`
  padding: 0 1em;
  grid-area: content;
  overflow-y: auto;
`

const Footer = styled.footer`
  border-top: 1px solid ${theme.colors.gray};
  padding: 2em 0;
`

const setTitle =
(title, fallback='Klimacamp Ulm / Neu-Ulm') => title ? `${title} | ${fallback}` : fallback

export default ({ title, fallbackTitle, children }) => (
  <Container>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{setTitle(title, fallbackTitle)}</title>
      </Helmet>
      <Header>
        <Link to={isGermanZero() ? '/germanzero' : '/'}>
          <Logo brand src={isGermanZero() ? germanzero : klimacamp} />
        </Link>
        <CurrentPage />
        <MainNav />
      </Header>
      <Main>
        {children}
        <Footer>
          <Link to="/imprint">Impressum</Link> | <Link to="/privacy">Datenschutz</Link>
        </Footer>
      </Main>
    </ThemeProvider>
  </Container>
)
