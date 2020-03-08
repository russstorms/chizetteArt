import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import times from '../helpers/times'

// Styles
import "animate.css/animate.css"
import './styles/Crystal.css'
import './styles/CrystalDark.css'
import './styles/CrystalForeGround.css'

const Crystal = () => {
  const foreGroundSparkles = times(40, i => <span key={i} />)
  const darkStripes = times(14, i => <span key={i} />)
  const stripes = times(19, i => <span key={i} />)

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

export default Crystal

