import React from 'react'
import './parallax.css'

const Parallax = (props) => {
  const img = "https://images.unsplash.com/photo-1524215358253-2a0988a55a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  return (
    <div className="parallax">
      <img src={img} alt="https://placekitten.com/200/300"></img>
      <br />
      <br />
      <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
    </div>
  )
}

export default Parallax