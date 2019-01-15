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
        <h3 ref={this.myRef} className="contact">contact page</h3>
    )
  }
  scrollToMyRef = () => {
    window.scrollTo({
      top:this.myRef.current.offsetTop,
      behavior: "smooth"
    })
  }
}