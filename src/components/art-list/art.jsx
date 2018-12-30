import React from 'react'
import './art.css'
import { Col, Button } from 'react-materialize'

export default class Art extends React.Component {

  deleteArt = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.deleteArt(ev.target.id)
  }

  render () {
    let artList = this.props.art
    return (
      <Col className="s4 artPiece">
        <div>
          <div><img className="poster" src={artList.poster} alt="https://placekitten.com/200/300"></img></div>
          <br />
          <div><b><i>{artList.title}</i></b></div>
          <br />
          {/* <div><b>Year:</b> {artList.year}</div>
          <br />
          <div><b>Medium:</b> {artList.medium}</div>
          <br /> */}
          <span><Button id={artList.id} onClick={(ev) => this.deleteArt(ev)} className="waves-effect waves-teal btn-small delButton"><i id={artList.id} className="material-icons icon">delete</i></Button></span>
        </div>
      </Col>
  )
  }
}