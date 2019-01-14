import React from 'react'
import Art from './art'
import './artList.css'

export default class ArtList extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className="wrapper">
        {this.props.artList.map(
          (art, idx) => {
            return <Art key={idx} art={art} id={idx} artPosters={this.props.artPosters} token={this.props.token} editArt={this.props.editArt} deleteArt={this.props.deleteArt} />
          }
        )}
      </div>
    )
  }
}