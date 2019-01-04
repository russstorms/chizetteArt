import React from 'react'
import { Parallax } from 'react-materialize'
import './parallax.css'

const ParallaxImage = (props) => {
  return (
    <div>
      <Parallax className="parallax" imageSrc="https://images.unsplash.com/photo-1524215358253-2a0988a55a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
      <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
    </div>
  )
}

export default ParallaxImage