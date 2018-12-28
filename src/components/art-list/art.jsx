import React from 'react'
import './art.css'
import { Col } from 'react-materialize'

const Art = (props) => {
  return (
      <Col className="s4 artPiece">
        <div>
          <div><img className="poster" src={props.art.poster} alt="https://placekitten.com/200/300"></img></div>
          <br />
          <div><b><i>{props.art.title}</i></b></div>
          {/* <br />
          <div><b>Year:</b> {props.art.year}</div>
          <br />
          <div><b>Medium:</b> {props.art.medium}</div> */}
          <br />
        </div>
      </Col>
  )
}

export default Art