import React from 'react'

// Styles
import './styles/SplashList.css'

const SplashList = ({ configureFilteredTerm }) => {

  return (
    <div className="SplashList">
        <div onClick={configureFilteredTerm} className="viewArt" data-medium="Art">
            View Art
        </div>
        <div onClick={configureFilteredTerm} className="viewJewelry" data-medium="Jewelry">
            View Jewelry
        </div>
        <div onClick={configureFilteredTerm} className="viewPhotography" data-medium="Photos">
            View Photos
        </div>
    </div>
  )
}

export default SplashList

