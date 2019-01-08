import React from 'react'
import './parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {

    setInterval(() => {
        this.setState({
          ...this.state,
          counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1
        })
    }, 5000)
  }

  render () {
    return (
      <div>
        <div className="parallax-container">
          <img className="section parallax" src={this.props.artList[this.state.counter]} alt="" />
        </div>
          <div className="about"><h5><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5></div>
      </div>
    )
  }
}

{/* <img className="img" src={this.props.artList[this.state.counter]} alt="" /> */}