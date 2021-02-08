import React from 'react'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <h2>GermanZero Klimaentscheid</h2>
      <p>
        Wir werden sowohl in Ulm als auch Neu-Ulm einen{' '}
        <a href="https://www.germanzero.de/">GermanZero Klimaentscheid</a>{' '}
        durchführen und haben darüber am 12.01.2021 in einer{' '}
        <a href="https://youtu.be/-HAgdbEQFaY"> Online Pressekonferenz</a>{' '}
        informiert.
      </p>
      <p>
        GermanZero hat für beide Städte einen Klimastadtplan erstellt, der als
        Leitfaden für notwendige Massnahmen dient, um in beiden Städten
        Klimaneutralität bis 2030 zu erreichen. Die Details sollen nach dem
        Sammeln der benötigten Unterschriften in Ulm durch ein Planungsbüro, in
        Neu-Ulm durch einen gelosten Bürger:innenrat ausgearbeitet werden. Die
        Wahl, in welcher Stadt welches Verfahren angewendet wird, haben wir
        ebenfalls gelost. Ausführliches dazu in der Online Pressekonferenz.
      </p>
      <p>
        Die Unterschriftenliste für Ulm ist noch in Arbeit, für Neu-Ulm können
        wir bereits Unterschriften sammeln. Das ist im Moment wegen Corona
        leider nicht so einfach, deswegen findet ihr die Unterschriftenliste
        unten verlinkt. Druckt sie gerne aus und animiert Bekannte oder
        Arbeitskoleg:innen zu unterschreiben, sofern das im Moment möglich ist.
      </p>
      <h3>Downloads</h3>
      <ul>
        <li>
          <a href="https://cloudstore.uni-ulm.de/s/Yc8wwRTMY54WcHA">
            Klimastadtplan Ulm
          </a>
        </li>
        <li>
          <a href="https://cloudstore.uni-ulm.de/s/qySt3ajJbWXosi8">
            Klimastadtplan Neu-Ulm
          </a>
        </li>
        <li>
          <a href="https://cloudstore.uni-ulm.de/s/f5MM9nca6asPYqi">
            Unterschriftenliste Neu-Ulm
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
