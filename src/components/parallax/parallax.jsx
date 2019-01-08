import React from 'react'
import './parallax.css'
import { Parallax } from 'react-materialize'

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
          {/* <Parallax className="parallax" imgSrc="https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" /> */}
          <div className="parallax"><img className="img" src={this.props.artList[this.state.counter]} alt="" /></div>
          <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
        </div>
    )
  }
}