import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import SpanMaker from '../helpers/SpanMaker'

// Styles
import "animate.css/animate.css"
import './styles/Crystal.css'
import './styles/CrystalDark.css'
import './styles/CrystalForeGround.css'

export default function Crystal() {
  const foreGroundSparkles = SpanMaker(40, i => <span key={i} />)
  const darkStripes = SpanMaker(14, i => <span key={i} />)
  const stripes = SpanMaker(19, i => <span key={i} />)

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
      <div className="Crystal">
        <div id="foreGround">
          {foreGroundSparkles}
        </div>
        <div id="darkStripes">
          {darkStripes}
        </div>
        <div id="stripes">
          {stripes}
        </div>
      </div>
    </ScrollAnimation>
  )
}

