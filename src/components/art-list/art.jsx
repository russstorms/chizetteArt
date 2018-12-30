import React from 'react'
import './art.css'
import { Col, Button, Modal } from 'react-materialize'

export default class Art extends React.Component {

  editSubmit = (ev) => {
    ev.preventDefault()
    let editArtID = ev.target.id
    let editArtTitle = ev.target[0].value
    let editArtYear = ev.target[1].value
    let editArtMedium = ev.target[2].value
    let editArtPoster = ev.target[3].value

    if (editArtTitle.length === 0) {
      editArtTitle = ev.target[0].placeholder
    }
    if (editArtYear.length === 0) {
      editArtYear = ev.target[1].placeholder
    }
    if (editArtMedium.length === 0) {
      editArtMedium = ev.target[2].placeholder
    }
    if (editArtPoster.length === 0) {
      editArtPoster = ev.target[3].placeholder
    }
    this.props.editArt(editArtID, editArtTitle, editArtYear, editArtMedium, editArtPoster)
  }

  deleteArt = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.props.deleteArt(ev.target.id)
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

          <Modal className="Modal"
          header={`Edit Art ${artList.id}`}
          trigger={<Button className="waves-effect waves-red"><i className="material-icons icon">edit</i></Button>}>
          <form id={artList.id} onSubmit={this.editSubmit}>
            <label>Title</label>
            <input type="text" placeholder={artList.title} name="Title" />
            <label>Year</label>
            <input type="text" placeholder={artList.year} name="Year" />
            <label>Medium</label>
            <input type="text" placeholder={artList.medium} name="Medium" />
            <label>Url</label>
            <input type="text" placeholder={artList.url} name="Url" />
            <Button className="waves-effect waves-red btn modal-close" name="submit">Edit</Button>
            <br />
          </form>
        </Modal>
        </div>
      </Col>
    )
  }
}