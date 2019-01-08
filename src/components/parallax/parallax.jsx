import React from 'react'
import { Parallax } from 'react-materialize'
import './parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    const imgOpaque = {
      opacity: 1,
      transition: '.5s ease-out-in'
    }
    
    this.state = {
      counter: 0,
      style: imgOpaque
    }
  }

  componentDidMount() {
    const imgOpaque = {
      opacity: 0,
      transition: '1.5s ease-in-out'
    }

    const imgNotOpaque = {
      opacity: 1,
      transition: '1.5s ease-in-out'
    }

    setInterval(() => {
      if (this.state.style === imgOpaque) {
        this.setState({
          ...this.state,
          counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1,
          style: imgNotOpaque
        })
      } else {
        this.setState({
          ...this.state,
          counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1,
          style: imgOpaque
        })
      }
    }, 3000)
  }

  render () {
    console.log(this.state.style)
    return (
      <div>
        <img className="parallax" style={this.state.style} src={this.props.artList[this.state.counter]} />
        <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
      </div>
    )
  }
}