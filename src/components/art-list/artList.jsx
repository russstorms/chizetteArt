import React from 'react'
import Art from './art'
import './artList.css'
import { Row } from 'react-materialize'

const ArtList = (props) => {
  return (
    <Row className="artList">
      {props.artList.map(
        (art, idx) => {
          return <Art key={idx} art={art} editArt={props.editArt} deleteArt={props.deleteArt} />
        }
      )}
    </Row>
  )
}

export default ArtList