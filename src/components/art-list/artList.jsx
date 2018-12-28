import React from 'react'
import Art from './art'
import './artList.css'
import { Row, Col } from 'react-materialize'

const ArtList = (props) => {

  props.artList.map((art) => {
    console.log(art)
  })

  return (
    <Row>
      <Col className="s4">
        <h1 className="artList">Art</h1>
        <ul>
          {props.artList.map(
            (art, idx) => {
              return <Art key={idx} art={art} />
            }
          )}
        </ul>
      </Col>
    </Row>
  )
}

export default ArtList