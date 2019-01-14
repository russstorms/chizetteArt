import React from 'react'
import { Parallax } from 'react-materialize'
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
        counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1,
      })
    }, 4000)
  }

  render () {
    return (
      <div>
        <Parallax className="parallax" imageSrc={this.props.artList[this.state.counter]} />
        <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
      </div>
    )
  }
}