import React from 'react'
import './art.css'

const Art = (props) => {
  return (
    <div>
      <div><img className="poster" src={props.art.poster} alt="https://placekitten.com/200/300"></img></div>
      <br />
      <div><b>Title:</b> <i>{props.art.title}</i></div>
      <br />
      <div><b>Year:</b> {props.art.year}</div>
      <br />
      <div><b>Medium:</b> {props.art.medium}</div>
      <br />
    </div>
  )
}

export default Art