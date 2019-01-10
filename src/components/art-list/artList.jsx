import React from 'react'
import Art from './art'
import './artList.css'

const ArtList = (props) => {
  return (
    <div className="wrapper">
      {props.artList.map(
        (art, idx) => {
          return <Art key={idx} art={art} artPosters={props.artPosters} token={props.token} editArt={props.editArt} deleteArt={props.deleteArt} />
        }
      )}
    </div>
  )
}

export default ArtList