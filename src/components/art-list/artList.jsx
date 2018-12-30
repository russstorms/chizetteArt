import React from 'react'
import Art from './art'
import './artList.css'
import { Row, Button } from 'react-materialize'

const ArtList = (props) => {

  return (
    <Row className="artList">
      {props.artList.map(
        (art, idx) => {
          return <Art key={idx} art={art} />
        }
      )}
    </Row>
  )
}

export default ArtList