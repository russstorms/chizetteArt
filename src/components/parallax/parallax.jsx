import React from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import './parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    const parallaxPosters = [
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/amethyst.jpeg",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/aragonite_necklace.JPG",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/citrine_amethyst.JPG",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/geode.jpeg",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/north_shore.jpeg",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/rainbow_man.jpeg",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/self_portrait.jpeg",
      "https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/sunset_beach.jpeg"
    ]
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
        <ParallaxBanner className="parallax"
          layers={[
            {
              image: `${this.props.artList[this.state.counter]}`,
              amount: 0.5,
              slowerScrollRate: false,
            },
              
          ]}
          style={{
        height: '85vh',
        }}>
      </ParallaxBanner>
      <Parallax offsetYMax={300} offsetYMin={-300} tag="figure"><h5 className="about"><span className="firstLetter">H</span>i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!</h5></Parallax>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}