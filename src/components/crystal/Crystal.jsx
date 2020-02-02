import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Styles
import "animate.css/animate.css"
import './styles/Crystal.css'
import './styles/CrystalDark.css'
import './styles/CrystalForeGround.css'

const spanCreator = (num) => {
  let spans = [];
  for (let i = 0; i < num; i++) {
    spans.push(<span key={i}></span>);
  }
  return spans;
}

export default function Crystal() {

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
      <div className="Crystal">
        <div id="foreGround">
          {spanCreator(40)}
        </div>
        <div id="darkStripes">
          {spanCreator(14)}
        </div>
        <div id="stripes">
          {spanCreator(19)}
        </div>
      </div>
    </ScrollAnimation>
  )
}

