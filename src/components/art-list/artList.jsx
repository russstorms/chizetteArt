import React from 'react'
import Art from './art'
import { Row, Col } from 'react-materialize'
import './art.css'

const ArtList = (props) => {
  return (
    <Row>
      <Col s={6}>
        <h1 className="artList">Art List</h1>
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