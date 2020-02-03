import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import SpanMaker from '../helpers/SpanMaker'

// Styles
import "animate.css/animate.css"
import './styles/Crystal.css'
import './styles/CrystalDark.css'
import './styles/CrystalForeGround.css'

export default function Crystal() {

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
      <div className="Crystal">
        <div id="foreGround">
          <SpanMaker 
            num={40}
          />
        </div>
        <div id="darkStripes">
          <SpanMaker 
            num={14}
          />
        </div>
        <div id="stripes">
          <SpanMaker 
            num={19}
          />
        </div>
      </div>
    </ScrollAnimation>
  )
}

