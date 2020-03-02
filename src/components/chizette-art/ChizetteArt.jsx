import React, { useContext } from 'react'
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
import { CrudContext, CrudProvider } from "../../context/crudContext"

// Custom Hooks
import useContactState from '../hooks/useContactState'
import useSecretLogInState from '../hooks/useSecretLogInState'

// Styles
import 'animate.css/animate.min.css'
import '../responsive.css'

const ChizetteArt = () => {

  // Custom Hooks
  // const {filteredTerm, configureFilteredTerm, filterArtList} = useFilteredTermState('Splash')
  const {contactMe, toggleContactMe} = useContactState(false)
  const {secretLogIn, toggleLoginForm} = useSecretLogInState(false)

  // Contexts
  const { 
    artList,
    filteredTerm,
    configureFilteredTerm,
    postArt,
    editArt,
    deleteArt 
  } = useContext(CrudContext)


  return (
    <ParallaxProvider className="App container">
      <AdminProvider>
        <Navbar
          toggleLoginForm={toggleLoginForm}
        />
        <Drawer 
          configureFilteredTerm={configureFilteredTerm}
          toggleContactMe={toggleContactMe}
          contactMe={contactMe}
        />
        <CrudProvider>
          {
            filteredTerm === 'Splash' ?
              <Parallax /> 
            : 
            <i><h4 className="filteredTitle">{filteredTerm}</h4></i>
          }
          {
            secretLogIn && 
              <LoginForm />
          }
          { filteredTerm === 'Splash' &&
            <SplashList
              configureFilteredTerm={configureFilteredTerm}
            />
          }
          <ArtList
            artList={artList}
            editArt={editArt}
            deleteArt={deleteArt}
            filteredTerm={filteredTerm}
          />
          <Contact 
            postArt={postArt}
          />
        </CrudProvider>
        {/* <Crystal /> */}
        <Footer />
      </AdminProvider>
    </ParallaxProvider>
  )
}

export default ChizetteArt

