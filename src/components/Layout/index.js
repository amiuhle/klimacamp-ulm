import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './styles'
import logo from '../../assets/images/logo.png'

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
  align-items: center;
  margin: auto 1em;
  grid-area: header;
`

const Logo = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 1em;
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
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <h1>Klimacamp Ulm</h1>
      </Header>
      <Main>
        {children}
        <Footer>
          <Link href="/imprint">Impressum</Link> | <Link to="/privacy">Datenschutz</Link>
        </Footer>
      </Main>
    </ThemeProvider>
  </Container>
)
