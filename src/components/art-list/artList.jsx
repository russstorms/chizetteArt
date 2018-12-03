import React from 'react'
import Art from './art'
import './art.css'
import { Container, Row, Col } from 'react-materialize'

const ArtList = (props) => {
  return (
    <Container>
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
    </Container>
  )
}

export default ArtList