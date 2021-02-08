import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './styles'
import logo from '../../assets/images/logo.png'

const Container = styled.div`
  display: grid;

  height: 100%;
  margin: 0;
  width: 100%;

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

export default ({title, children}) => (
  <Container>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Logo src={logo} />
        <h1>
          Klimacamp Ulm
        </h1>
      </Header>
      <Main>
        {children}
        <Footer>
          <a href="/imprint">Impressum</a>
        </Footer>
      </Main>
    </ThemeProvider>
  </Container>

)
