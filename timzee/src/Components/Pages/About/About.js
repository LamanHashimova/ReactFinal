import React from 'react'

import BreadCrump from './AboutComponents/BreadCrumpAbout/BreadCrumpAbout.js'
import WatchStyle from './AboutComponents/watchstyle/watchstyle.js'
import Journey from './AboutComponents/journey/journey.js'
import GiveUp from './AboutComponents/giveup/giveup.js'
import Team from './AboutComponents/Team/Team.js'

function About() {
  return (
    <div>
        <BreadCrump />
        <WatchStyle />
        <Journey />
        <GiveUp />
        <Team />
    </div>
  )
}

export default About