import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext"

// Styles
import './styles/Footer.css'

const Footer = () => {
  // Contexts
  const { darkTheme, lightThemeStyles, darkThemeStyles } = useContext(ThemeContext)

  return (
    <main className="Footer" id="Footer">
      <div className="footer">
        <h1
          className="chizetteArtFooter"
          style={
            darkTheme ? darkThemeStyles : lightThemeStyles
          }
        >
            chizetteArt
        </h1>
        <h6 className="copyRight">©2019</h6>
      </div>
    </main>
  )
}

export default Footer