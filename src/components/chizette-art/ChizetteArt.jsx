import React, { useState, useEffect, useContext } from 'react'
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

import { AdminContext, AdminProvider } from "../../context/adminContext"

// Custom Hooks
import useFilteredTermState from '../hooks/useFilteredTermState'
import useContactState from '../hooks/useContactState'
import useSecretLogInState from '../hooks/useSecretLogInState'

// Styles
import 'animate.css/animate.min.css'
import '../responsive.css'

// Node API
const API = process.env.REACT_APP_API
// const API = 'http://localhost:3000'

const ChizetteArt = () => {
  const [artList, setArtList] = useState([])

  // Custom Hooks
  const {filteredTerm, configureFilteredTerm, filterArtList} = useFilteredTermState('Splash')
  const {contactMe, toggleContactMe} = useContactState(false)
  const {secretLogIn, toggleLoginForm} = useSecretLogInState(false)

  // Contexts
  const token = useContext(AdminContext)

  // Get Art
  useEffect(() => {
    async function getArtList() {
      // Load the art collection
      const artListJson = await fetch(`${API}/chizetteart`)
      const artList = await artListJson.json()

      // Filter artList and set to current state
      setArtList(filterArtList(artList))
    }
    getArtList()
  }, [filteredTerm])


  // Admin — Create new art
  const postArt = async (title, year, medium, url, price) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url,
      price: price
    }
    const response = await fetch(`${API}/chizetteart`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify(artBody)
    })
    if (response.status !== 200) {
      alert(`Unable to create this masterpiece!`)
    } else {
      alert(`Art Created!`)
    }
    setArtList([artBody, ...artList])
  }

  // Admin — Edit art
  const editArt = async (id, title, year, medium, url) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url
    }

    let newList = artList.map( art => (art.id === id) ? {id, ...artBody} : art )
  
    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(artBody),
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token
      },
    })
    if (response.status !== 200) {
      alert(`Unable to edit this masterpiece!`)
    } else {
      alert(`Edited this masterpiece!`)
    }
    
    setArtList(newList)
  }

  // Admin — Delete art
  const deleteArt = async (id) => {
    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token
      },
    })
    if (response.status !== 200) {
      alert(`Unable to erase this masterpiece!`)
    } else {
      alert(`Crumbled up and thrown away!`)
    }
    setArtList([...artList])
  }

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
        {/* <Crystal /> */}
        <Footer />
      </AdminProvider>
    </ParallaxProvider>
  )
}

export default ChizetteArt

