import React from 'react'
import Art from './art'
import './artList.css'

export default class ArtList extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0, 1)
  }

  columnCheck = () => {
    let column = ''
    if (this.props.filterTerm === '') {
      return this.props.splashList.map(
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
          return <div key={idx} className={column}><Art art={art} id={idx} artPosters={this.props.splashList.filter((art) => {
              return art.medium
          })} 
          token={this.props.token} editArt={this.props.editArt} deleteArt={this.props.deleteArt} /></div>
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
      <div className="wrapper">
        { this.columnCheck() }
      </div>
    )
  }
}