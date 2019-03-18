import React from 'react'
import Art from './art'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import './artList.css'

export default class ArtList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      contactMe: null,
      counter: 0,
      filteredTerm: ''
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 1)
  }

  columnCheck = () => {
    const splashList = this.props.splashList
    let column = ''
    let splashArt = splashList.splice(0, 3)
    let splashJewelry = splashList.splice(0, 3)
    let splashPhoto = splashList.splice(0, 3)

    if (this.props.filterTerm === '') {
      return splashArt.map(
        (art, idx) => {
          switch (column) {
            case 'first':
              column = 'second'
              break
            case 'second':
              column = 'third'
              break
            default:
              column = 'first'
              break
          }
            return <div key={idx} className={column}>
              <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
                <div className="art">
                  <span className="artA">A</span>
                  <span className="artR">r</span>
                  <span className="artT">t</span>
                </div>
              </ScrollAnimation>
              <Art art={art} id={idx} artPosters={art} filterTerm={this.props.filterTerm} />
              <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
                <div onClick={this.splashFilterArt} className="viewArt">
                  <span className="view" data-medium="Art">
                    View Art
                    <span className="arrowIcons">
                      <i className="small material-icons icon viewAllIcons">chevron_right</i>
                    </span>
                  </span>
                </div>
              </ScrollAnimation>
            </div>
        }
      )
    }

    return this.props.artList.map(
      (art, idx) => {
        switch (column) {
          case 'first':
            column = 'second'
            break
          case 'second':
            column = 'third'
            break
          default:
            column = 'first'
            break
        }
        return <div key={idx} className={column}><Art art={art} id={idx} artPosters={this.props.artPosters} token={this.props.token} editArt={this.props.editArt} deleteArt={this.props.deleteArt} /></div>
      }
    )
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          { this.columnCheck() }
        </div>
      </div>

    )
  }
}



{/* <div className="wrapper2">

<ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
  <div className="jewelry">
    <span className="jewelryJ">J</span>
    <span className="jewelryE">e</span>
    <span className="jewelryW">w</span>
    <span className="jewelryE2">e</span>
    <span className="jewelryL">l</span>
    <span className="jewelryR">r</span>
    <span className="jewelryY">y</span>
  </div>
  <div onClick={this.splashFilterArt} className="viewJewelry">
    <span className="view" data-medium="Jewelry">View Jewelry</span>
    <span className="arrowIcons">
      <i className="small material-icons icon viewAllIcons">chevron_right</i>
    </span>
  </div>
</ScrollAnimation>
<ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
  <div className="photography">
    <span className="photographyP">P</span>
    <span className="photographyH">h</span>
    <span className="photographyO">o</span>
    <span className="photographyT">t</span>
    <span className="photographyO2">o</span>
    <span className="photographyG">g</span>
    <span className="photographyR">r</span>
    <span className="photographyA">a</span>
    <span className="photographyP2">p</span>
    <span className="photographyH2">h</span>
    <span className="photographyY">y</span>
  </div>
  <div onClick={this.splashFilterArt} className="viewPhotography">
    <span className="view" data-medium="Photography">View Photography</span>
    <span className="arrowIcons">
      <i className="small material-icons icon viewAllIcons">chevron_right</i>
    </span>
  </div>
</ScrollAnimation>
</div> */}


//// FILTER BY MEDIUM \\\\
// splashFilterArt = (ev) => {
//   ev.preventDefault()
//   let searchTerm = ev.target.dataset.medium
  
//   if (searchTerm === 'Photography') {
//     this.setState({
//       filteredTerm: 'Photography',
//       counter: 0
//     })
//   } else if (searchTerm === 'Jewelry') {
//     this.setState({
//       filteredTerm: 'Jewelry',
//       counter: 0
//     })
//   } else {
//     this.setState({
//       filteredTerm: 'Art',
//       counter: 0
//     })
//   }
// }