import React from 'react'
import './art.css'
import { Button, Modal } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'


export default class Art extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      counter: 0
    }
  }

  //// EDIT ART \\\\
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

  //// DELETE ART \\\\
  deleteArt = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.props.deleteArt(ev.target.id)
  }

  //// SINGLE VIEW NEXT BUTTON \\\\
  nextClick = (ev) => {
    const artPosters = this.props.artPosters

    this.setState({
      ...this.state,
      counter: this.state.counter === artPosters.length - 1 ? 0 : this.state.counter + 1
    })
  }

  //// SINGLE VIEW PREV BUTTON \\\\
  prevClick = (ev) => {
    const artPosters = this.props.artPosters
    
    this.setState({
      ...this.state,
      counter: this.state.counter === 0 ? artPosters.length - 1 : this.state.counter - 1
    })
  }
  
  //// OPEN SINGLE VIEW \\\\
  modalClick = (ev) => {
    this.setState({
      ...this.state,
      counter: this.props.id
    })
  }

  componentWillUnmount() {
    let artPosters = this.props.artPosters
    this.setState({
      ...this.state,
      counter: this.state.counter > artPosters.length ? 0 : 0
    })
  }

  render() {
    //// LIST OF ART \\\\
    let art = this.props.art
    //// LIST OF URLS \\\\
    let artPosters = this.props.artPosters
    //// CHECK COUNTER TO MAKE SURE IT ISN'T LONGER THAN ARRAY \\\\
    let counter = this.state.counter >= artPosters.length ? 0 : this.state.counter
    // console.log(artPosters[counter].poster, this.state.counter)
    return (
      //// ART PIECE \\\\
    <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
      <div className="artPiece">
        <span>
          <Modal className="modalFullView animated fadeIn"
            header=''
            trigger={<a className="anchor" href="/"><img className="poster" onClick={this.modalClick} src={art.poster} alt="https://placekitten.com/200/300"></img></a>}>
            <i className="fas fa-times modal-close close"></i>
            <img className="posterSingleView" src={artPosters[counter].poster} alt="https://placekitten.com/200/300"></img>
            <br />
            <div onClick={this.prevClick} className="prevButton"><i className="large material-icons icon animated fadeInLeft delay-1s">chevron_left</i></div>
            <div onClick={this.nextClick} className="nextButton"><i className="large material-icons icon animated fadeInRight delay-1s">chevron_right</i></div>
            {!artPosters[counter].medium.includes('Jewelry') && !artPosters[counter].medium.includes('Photography') ? <a href="https://www.printful.com" target="blank" className="singleViewPriceButton">Purchase Print</a> : null}
            <div className="artInfoContainer">
              <div className="singleViewTitle"><i>{artPosters[counter].title}</i><span className="singleViewYear">{artPosters[counter].year}</span></div>
              <div className="singleViewMedium animated fadeInRight delay-1s">{artPosters[counter].medium}</div>
              {!artPosters[counter].medium.includes('Jewelry') && !artPosters[counter].medium.includes('Photography') ? <div className="singleViewPrice">${artPosters[counter].price} USD</div> : null}
            </div>
          </Modal>
        </span>

        <div><b><i>{art.title}</i></b></div>
        {this.props.token ?
          <span>
            <Modal className="Modal editModal"
              header={`Edit: ${art.title}`}
              trigger={<span><Button className="editButton btn-flat waves-effect waves-light"><i className="large material-icons icon brushIcon">brush</i></Button></span>}>
              <i className="fas fa-times modal-close createClose"></i>
              <form autoComplete="off" id={art.id} onSubmit={this.editSubmit}>
                <label>Title</label>
                <input type="text" placeholder={art.title} name="Title" />
                <label>Year</label>
                <input type="text" placeholder={art.year} name="Year" />
                <label>Medium</label>
                <input type="text" placeholder={art.medium} name="Medium" />
                <label>Url</label>
                <input type="text" placeholder={art.url} name="Url" />
                <Button className="editArt waves-effect waves-red btn modal-close" name="submit">Edit!</Button>
              </form>
            </Modal>
            {this.props.token ? <span><Button id={art.id} onClick={(ev) => this.deleteArt(ev)} className="deleteButton waves-effect waves-light btn-flat delButton"><i id={art.id} className="large material-icons icon deleteIcon">delete</i></Button></span> : null}
          </span> : null}
      </div>
    </ScrollAnimation>
    )
  }
}