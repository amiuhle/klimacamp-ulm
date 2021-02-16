import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h2>Herzlich Willkommen</h2>
      <p>
        Ende August 2020 haben sich mehrere tolle Menschen aus unterschiedlichen
        Organisationen zusammengefunden, um für mehr Klimagerechtigkeit in Ulm
        zu protestieren. Um die Dringlichkeit des Handlungsbedarfs vorzuführen
        haben wir am 10. September unsere Zelte auf dem Marktplatz direkt vor
        dem Rathaus Ulm aufgeschlagen und sind 54 Tage dort geblieben. Daraus
        ist das Klimacamp Ulm/Neu-Ulm geworden.
      </p>
      <p>
        Wir haben unser Camp immer weiter ausgebaut, Vorträge und Workshops
        gehalten und Gespräche mit Bürger:innen und Politiker:innen geführt.
      </p>
      <p>
        Schweren Herzens haben wir uns aufgrund des Lockdowns Anfang November
        entschlossen, das Camp wieder abzubauen.
      </p>
      <p>
        Aber keine Sorge - wir sind noch immer da und kämpfen weiterhin für
        konsequenten Klimaschutz lokal hier in Ulm und Neu-Ulm!
      </p>
      <h3>Aktuelles</h3>
      <p>
        Wir führen aktuell einen{' '}
        <Link to="/germanzero">
          GermanZero Klimaentscheid in Ulm und Neu-Ulm
        </Link>{' '}
        durch!
      </p>
    </Layout>
  )
}

export default IndexPage
