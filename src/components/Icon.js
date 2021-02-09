import PropTypes from 'prop-types'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import is from 'styled-is'

const context = require.context('../assets/icons', false, /\.svg$/)
const icons = context.keys().reduce((map, key) => {
  const name = key.replace(/.*\.\/(.*)\.svg$/, '$1')
  map[name] = context(key)
  return map
}, {})

export const Svg = styled.svg`
  width: 20px;
  height: 20px;

  ${is('bordered')`
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.border || props.theme.colors.brandPrimary};
    border-radius: 50%;
  `};

  ${is('background')`
    background-color: ${(props) => props.background};
  `};

  ${is('onClick')`
    cursor: pointer;
  `};
`
const Icon = ({
  name,
  onClick,
  theme,
  color = theme.colors.brandPrimary,
  bordered,
  border,
  background,
  ...props
}) => {
  const svg = icons[name]
  return (
    <Svg
      viewBox={svg.viewBox}
      onClick={onClick}
      stroke={color}
      bordered={bordered}
      background={background}
      border={border}
      {...props}
    >
      <use xlinkHref={`#${svg.id}`} />
    </Svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool,
}

export const names = Object.keys(icons)
export default withTheme(Icon)
