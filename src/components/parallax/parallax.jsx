import React from 'react'
import { Parallax } from 'react-materialize'
import './parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      style: null
    }
  }

  componentDidMount() {
    const imgOpaque = {
      opacity: 0,
      transition: 'opacity 1 .3s ease-in-out'
    }

    const imgNotOpaque = {
      opacity: 1,
      transition: 'opacity 0 .3s ease-in-out'
    }

    setInterval(() => {
      if (this.state.style === imgNotOpaque) {
        this.setState({
          ...this.state,
          counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1,
          style: imgOpaque
        })
      } else {
        this.setState({
          ...this.state,
          counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1,
          style: imgNotOpaque
        })
      }
    }, 3000)
  }

  render () {
    console.log(this.state)
    return (
      <div style={this.state.style}>
        <Parallax className="parallax" imageSrc={this.props.artList[this.state.counter]} />
        <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
      </div>
    )
  }
}