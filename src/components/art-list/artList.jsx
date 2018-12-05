import React from 'react'
import Art from './art'
import './artList.css'
import { Row, Col } from 'react-materialize'

const ArtList = (props) => {
  return (
    <Row hidden>
      <Col className="s4">
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

//only a test