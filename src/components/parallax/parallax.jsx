import React from 'react'
import './parallax.css'

const Parallax = (props) => {
  const img = "https://images.unsplash.com/photo-1524215358253-2a0988a55a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  return (
    <div>
      <img className="parallax" src={img} alt="https://placekitten.com/200/300"></img>
      <br />
      <br />
    </div>
  )
}

export default Parallax

// https://images.unsplash.com/photo-1524215358253-2a0988a55a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80