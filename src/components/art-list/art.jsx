import React from 'react'
import './art.css'
import { Col, Button } from 'react-materialize'

export default class Art extends React.Component {
  
  deleteArt = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.props.deleteArt(ev.target.id)
  }

  render () {
    console.log(this.props)
    return (
      <Col className="s4 artPiece">
        <div>
          <div><img className="poster" src={this.props.art.poster} alt="https://placekitten.com/200/300"></img></div>
          <br />
          <div><b><i>{this.props.art.title}</i></b></div>
          {/* <br />
          <div><b>Year:</b> {props.art.year}</div>
          <br />
          <div><b>Medium:</b> {props.art.medium}</div> */}
          <br />
          <span><Button id={this.props.art.id} onClick={this.deleteArt} className="waves-effect waves-teal btn-small delButton"><i id={this.props.art.id} className="material-icons icon">delete</i>DELETE</Button></span>
        </div>
      </Col>
  )
  }
}