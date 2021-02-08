import { createGlobalStyle } from 'styled-components'

import JostNormal from '../../assets/fonts/Jost-VariableFont_wght.ttf'
import JostItalic from '../../assets/fonts/Jost-VariableFont_wght.ttf'

const brandPrimary = '#1D7441'
const brandSecondary = '#41339A'

export const theme = {
  colors: {
    brandPrimary,
    brandSecondary,
    text: '#000',
    gray: '#979797',
    inactive: '#DFDFDF',
    background: '#FFFFFF',
    alert: '#F90505',
    brandGradient: `linear-gradient(45deg, ${brandPrimary} 0%, ${brandSecondary} 100%)`,
  },
  font: {
    body: '16px',
    h1: '20px',
    h2: '24px',
    h3: '20px',
  },
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Jost';
    src: url(${JostNormal}) format('truetype');
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jost';
    src: url(${JostItalic}) format('truetype');
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: italic;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${theme.font.body};
    line-height: 1.5;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
    overflow-y: scroll;
    min-height: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: 'Jost', sans-serif;
  }

  h1 {
    font-size: ${theme.font.h1};
    font-weight: normal;
  }

  h2 {
    font-size: ${theme.font.h2};
    font-weight: normal;
  }

  h3 {
    font-size: ${theme.font.h3};
  }

  html, body, main, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    margin: 0;
  }

  p {
    font-size: ${theme.font.body};
  }

  a {
    color: ${theme.colors.brandPrimary};
    font-weight: bold;
    text-decoration: none;
  }
`
