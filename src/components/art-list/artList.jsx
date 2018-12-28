import React from 'react'
import Art from './art'
import './artList.css'
import { Row } from 'react-materialize'

const ArtList = (props) => {

  return (
    <Row className="artList">
      <ul>
        {props.artList.map(
          (art, idx) => {
            return <Art key={idx} art={art} />
          }
        )}
      </ul>
    </Row>
  )
}

export default ArtList