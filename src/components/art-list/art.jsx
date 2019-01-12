import React from 'react'
import './art.css'
import { Button, Modal } from 'react-materialize'

export default class Art extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      counter: 0
    }
  }

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

  nextClick = (ev) => {
    console.log(`next`)
    const artPosters = this.props.artPosters

    this.setState({
      ...this.state,
      counter: this.state.counter === artPosters.length - 1 ? 0 : this.state.counter + 1
    })
  }

  prevClick = (ev) => {
    console.log(`prev`)
    const artPosters = this.props.artPosters

    this.setState({
      ...this.state,
      counter: this.state.counter === 0 ? artPosters.length - 1 : this.state.counter - 1
    })
  }
  
  modalClick = (ev) => {
    this.setState({
      ...this.state,
      counter: this.props.id
    })
  }

  render() {
    //// LIST OF ART \\\\
    let art = this.props.art
    //// LIST OF URLS \\\\
    let artPosters = this.props.artPosters
    return (
      //// ART PIECE \\\\
      <div className="artPiece">
        <span>
          <Modal className="modalFullView"
            header=''
            trigger={<a href="/"><img className="poster" onClick={this.modalClick} src={art.poster} alt="https://placekitten.com/200/300"></img></a>}>
            <img className="posterSingleView" src={artPosters[this.state.counter].poster} alt="https://placekitten.com/200/300"></img>
            <br />
            <div onClick={this.prevClick} className="prevButton"><i className="large material-icons icon">chevron_left</i></div>
            <div onClick={this.nextClick} className="nextButton"><i className="large material-icons icon">chevron_right</i></div>
            <div className="artInfoContainer">
              <div className="singleViewTitle"><i>{artPosters[this.state.counter].title}</i><span className="singleViewYear">{artPosters[this.state.counter].year}</span></div>
              <div className="singleViewMedium">{artPosters[this.state.counter].medium}</div>
            </div>
          </Modal>
        </span>

        <div><b><i>{art.title}</i></b></div>
        {this.props.token ?
          <span>
            <Modal className="Modal"
              header={`Touch up on: ${art.title}`}
              trigger={<span><Button className="editButton btn-flat waves-effect waves-light"><i className="large material-icons icon brushIcon">brush</i></Button></span>}>
              <form id={art.id} onSubmit={this.editSubmit}>
                <label>Title</label>
                <input type="text" placeholder={art.title} name="Title" />
                <label>Year</label>
                <input type="text" placeholder={art.year} name="Year" />
                <label>Medium</label>
                <input type="text" placeholder={art.medium} name="Medium" />
                <label>Url</label>
                <input type="text" placeholder={art.url} name="Url" />
                <Button className="waves-effect waves-red btn modal-close" name="submit">Touch Up!</Button>
              </form>
            </Modal>
            {this.props.token ? <Button id={art.id} onClick={(ev) => this.deleteArt(ev)} className="deleteButton waves-effect waves-light btn-flat delButton"><i id={art.id} className="large material-icons icon deleteIcon">delete</i></Button> : null}
          </span> : null}
      </div>
    )
  }
}