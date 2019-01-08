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
          {/* <Parallax className="parallax" id="paraID" imgSrc="https://placekitten.com/200/300" /> */}
          <div className="parallax">
            <img className="img" src={this.props.artList[this.state.counter]} alt="" />
          </div>
          <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
        </div>
    )
  }
}