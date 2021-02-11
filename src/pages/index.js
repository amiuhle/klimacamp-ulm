import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout title="GermanZero Klimaentscheid">
      <h2>Herzlich Willkommen</h2>
      <p>
        Unsere Website befindet sich noch im Aufbau, hier geht's zum{' '}
        <Link to="/germanzero">GermanZero Klimaentscheid</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
