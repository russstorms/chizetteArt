import React from 'react'
import './contactme.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    this.scrollToMyRef()
  }

  render() {
    return (
      <div className="contactContainer">
        <h3 ref={this.myRef} className="contactPage"></h3>
        <h5 className="contact"><span className="bigLetter">T</span>hank you for visiting, I hope you enjoyed!</h5>
        <a href="/chizetteart" target="blank" className="instagram"><span className="instagramIcon"><i className="fab fa-instagram"></i></span><i>instagram</i></a>
        <a href="/chizetteart" target="blank" className="email"><span className="emailIcon"><i className="far fa-envelope"></i></span><i>email</i></a>
        <br />
        <br />
        <h5 className="quote">"Great art picks up where nature ends." ~Chagall</h5>
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