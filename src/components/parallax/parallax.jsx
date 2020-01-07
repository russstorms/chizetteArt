import React from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import './styles/parallax.css'

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    this.intervalID = setInterval(() => {
      const parallaxPosters = [
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434625/chizetteArt%20-%20Compressed/amethyst.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434629/chizetteArt%20-%20Compressed/aragonite_necklace.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434635/chizetteArt%20-%20Compressed/Citrine%20%2B%20Amethyst%20Necklace.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434634/chizetteArt%20-%20Compressed/geode_slice.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434665/chizetteArt%20-%20Compressed/hale'iwa%20evening.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/v1552434640/chizetteArt%20-%20Compressed/gold%2Bblue.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434663/chizetteArt%20-%20Compressed/constellations.jpg",
        "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434670/chizetteArt%20-%20Compressed/sunset_beach.jpg"
      ]
      this.setState({
        ...this.state,
        counter: this.state.counter === parallaxPosters.length - 1 ? 0 : this.state.counter + 1
      })
    }, 4000)
  }

  render () {
    const parallaxPosters = [
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434625/chizetteArt%20-%20Compressed/amethyst.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434629/chizetteArt%20-%20Compressed/aragonite_necklace.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434635/chizetteArt%20-%20Compressed/Citrine%20%2B%20Amethyst%20Necklace.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434634/chizetteArt%20-%20Compressed/geode_slice.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434665/chizetteArt%20-%20Compressed/hale'iwa%20evening.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/v1552434640/chizetteArt%20-%20Compressed/gold%2Bblue.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1500/v1552434663/chizetteArt%20-%20Compressed/constellations.jpg",
      "https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1300/v1552434670/chizetteArt%20-%20Compressed/sunset_beach.jpg"
    ]
    return (
      <div className="Parallax">
        <ParallaxBanner className="parallaxBanner"
          layers={[
            {
              image: `${parallaxPosters[this.state.counter]}`,
              amount: 0.5,
              slowerScrollRate: false,
            },
              
          ]}
          style={{
            height: '85vh',
          }}>
        </ParallaxBanner>
        <Parallax
          offsetYMax={300}
          offsetYMin={-300}
          tag="figure"
        >
          <div className="parallaxAbout">
            <h5>
              <span className="firstLetter">
                H
              </span>
              i! My name is Chizette and art is my passion. I wish to share my art with the world. Please enjoy!
            </h5>
          </div>
        </Parallax>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}