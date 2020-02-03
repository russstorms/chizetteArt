import React, { useEffect } from 'react'
import Art from '../art/Art'

// Styles
import 'animate.css/animate.min.css'
import './styles/ArtList.css'

const ArtList = ({ artList, editArt, deleteArt, token, filteredTerm }) => {

  // Scroll to the top to animate artList
  useEffect(() => {
    if (filteredTerm !== 'Splash') {
        document.getElementById('artList').scrollIntoView({ behavior: "smooth" })
    }
  }, [filteredTerm])

  // Differing CSS classes to unalign CSS Grid columns
  const alterColumns = () => {
    let column = ''
    return artList.map(
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
        return (
          <div
            key={idx}
            className={column}
          >
            <Art
              id={art.id}
              art={art}
              modalId={idx}
              artList={artList}
              editArt={editArt}
              deleteArt={deleteArt}
              filteredTerm={filteredTerm}
              token={token}
            />
          </div>
        )
      }
    )
  }
  // Change padding depending on if SplashList
  return (
    <div
      id="artList"
      className={`ArtList ${filteredTerm !== 'Splash' ? 'artListPadding' : 'splashListPadding'}`}
    >
      <div className="wrapper">
        { alterColumns() }
      </div>
    </div>
  )
}

export default ArtList

