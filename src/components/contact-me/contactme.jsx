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
    console.log(this.props.contactMe)
    return (
      <div className="contactContainer">
        <h3 ref={this.myRef} className="contactPage"></h3>
        <h5 className="contact"><span className="bigLetter">T</span>hank you for visiting, I hope you enjoyed!</h5>
        <h6 className="instagram"><i className="small material-icons icon instaIcon">camera_roll</i><i>instagram</i></h6>
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