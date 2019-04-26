import React from 'react'
import './contactme.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.scrollToMyRef()
  }

  render() {
    return (
      <div className="contactContainer">
        <img ref={this.myRef} className="contactPic" src="https://res.cloudinary.com/chizetteart/image/upload/v1556310776/chizetteArt%20-%20Compressed/contactme.png" alt="#"></img>
        <h5 className="contact"><span className="bigLetter">C</span>hizette grew up in a pink house on a little island with two artist parents who taught her to draw and paint. She works primarily with gouache and crayon, and with gemstones, natural fibers, seashells, glass, clay, & photography. Currently, she lives in the mountains.</h5>
        <br />
        <br />
        <i><h5 className="contact">Please email for commissions, collaboration, or questions.</h5></i>
          <div className="contactIconContainer">
            <a href="https://www.instagram.com/chizette/" target="blank" className="instagram">
              <span className="instagramIcon">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
            <a href="mailto:chizetteart@gmail.com" target="blank" className="email">
              <span className="emailIcon">
                <i className="far fa-envelope"></i>
              </span>
            </a>
          </div>
        <br />
        <br />
        <h5 className="quote"><i>"Great art picks up where nature ends."</i> ~Chagall</h5>
        <br />
      </div>
    )
  }
  scrollToMyRef = () => {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: "smooth"
    })
  }
}