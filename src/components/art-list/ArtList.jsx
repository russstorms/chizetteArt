import React, { useEffect, useContext } from 'react'
import { ArtListContext } from "../../context/artListContext"
import Art from '../art/Art'

import useFilteredTermState from '../hooks/useFilteredTermState'

// Styles
import 'animate.css/animate.min.css'
import './styles/ArtList.css'

const ArtList = ({ filteredTerm }) => {
  // Contexts
  const { data } = useContext(ArtListContext)

  // Custom Hooks
  const { filterArtList } = useFilteredTermState('Splash')

  // Scroll to the top to animate artList
  useEffect(() => {
    if (filteredTerm !== 'Splash') {
      document.getElementById('artList').scrollIntoView({ behavior: "smooth" })
    }
  }, [filteredTerm])

  // Differing CSS classes to unalign CSS Grid columns
  const alterColumns = () => {
    let column = ''
    if (data !== undefined) {
      const artList = filterArtList(data)
      // console.log(artList)
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
                // editArt={editArt}
                // deleteArt={deleteArt}
                filteredTerm={filteredTerm}
              />
            </div>
          )
        }
      )
    }
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

