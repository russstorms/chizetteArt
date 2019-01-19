import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import './parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        ...this.state,
        counter: this.state.counter === this.props.artList.length - 1 ? 0 : this.state.counter + 1
      })
    }, 4000)
  }

  render () {
    return (
      <div className="parallaxContainer">
        <Parallax className="parallax" offsetYMax={20} offsetYMin={-20} tag="figure"><img src={this.props.artList[this.state.counter]}/></Parallax>
        <h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}


{/* <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://foo.com/foo.jpg',
            amount: 0.1,
            slowerScrollRate: false,
        },
        {
            image: 'https://foo.com/bar.png',
            amount: 0.2,
            slowerScrollRate: false,
        },
    ]}
    style={{
        height: '500px',
    }}
>
    <h1>Banner Children</h1>
</ParallaxBanner> */}