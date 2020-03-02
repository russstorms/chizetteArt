import React, { useEffect } from 'react'
import Art from '../art/Art'

import useFilteredTermState from '../hooks/useFilteredTermState'

// Styles
import 'animate.css/animate.min.css'
import './styles/ArtList.css'

import useSWR from 'swr'

// Node API
const API = process.env.REACT_APP_API
// const API = 'http://localhost:3000'

const ArtList = ({ editArt, deleteArt }) => {

  // Custom Hooks
  const { filteredTerm, filterArtList } = useFilteredTermState('Splash')

  const fetcher = url => fetch(url).then(r => r.json())
  const { data } = useSWR(`${API}/chizetteart`, fetcher)

  // Scroll to the top to animate artList
  // useEffect(() => {
  //   if (filteredTerm !== 'Splash') {
  //     document.getElementById('artList').scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [filteredTerm])


  // Differing CSS classes to unalign CSS Grid columns
  const alterColumns = () => {
    let column = ''

    if (data !== undefined) {
      return filterArtList(data).map(
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
                artList={data}
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

