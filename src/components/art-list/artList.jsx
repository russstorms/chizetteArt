import React from 'react'
import Art from './art'
import './artList.css'
import { Row } from 'react-materialize'

const ArtList = (props) => {

  return (
    <Row>
      <h1 className="artList">Art</h1>
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


{/* <Row>
<Col>
  <h1 className="artList">Art</h1>
  <ul>
    {props.artList.map(
      (art, idx) => {
        return <Art key={idx} art={art} />
      }
    )}
  </ul>
</Col>
</Row> */}