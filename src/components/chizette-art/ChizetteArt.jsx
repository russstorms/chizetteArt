import React from 'react'
import Navbar from '../navbar/Navbar'
import Drawer from '../drawer/Drawer'
import Parallax from '../parallax/Parallax'
import ArtList from '../art-list/ArtList'
import SplashList from '../splash-list/SplashList'
// import Crystal from '../crystal/Crystal'
import LoginForm from '../login-form/LoginForm'
import Contact from '../contact-me/ContactMe'
import Footer from '../footer/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

import { AdminProvider } from "../../context/adminContext"
import { ArtListProvider } from "../../context/artListContext"

// Custom Hooks
import useContactState from '../hooks/useContactState'
import useSecretLogInState from '../hooks/useSecretLogInState'
import useFilteredTermState from '../hooks/useFilteredTermState'

// Styles
import 'animate.css/animate.min.css'
import '../responsive.css'

const ChizetteArt = () => {

  // Custom Hooks
  const {filteredTerm, configureFilteredTerm} = useFilteredTermState('Splash')
  const {contactMe, toggleContactMe} = useContactState(false)
  const {secretLogIn, toggleLoginForm} = useSecretLogInState(false)

  return (
    <ParallaxProvider className="App container">
      <AdminProvider>
        <Navbar
          toggleLoginForm={toggleLoginForm}
        />
        <Drawer
          toggleContactMe={toggleContactMe}
          contactMe={contactMe}
          configureFilteredTerm={configureFilteredTerm}
        />
          {
            filteredTerm === 'Splash' ?
              <Parallax />
            : 
            <i>
              <h4 className="filteredTitle">
                {filteredTerm}
              </h4>
            </i>
          }
          {
            secretLogIn &&
              <LoginForm />
          }
          <ArtListProvider>
            { filteredTerm === 'Splash' &&
              <SplashList />
            }
            <ArtList
              filteredTerm={filteredTerm}
              // artList={data}
              // editArt={editArt}
              // deleteArt={deleteArt}
            />
            <Contact 
              // postArt={postArt}
            />
          </ArtListProvider>
        {/* <Crystal /> */}
        <Footer />
      </AdminProvider>
    </ParallaxProvider>
  )
}

export default ChizetteArt

