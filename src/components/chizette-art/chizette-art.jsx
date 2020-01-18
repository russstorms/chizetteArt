import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Drawer from '../drawer/drawer'
import Parallax from '../parallax/parallax'
import ArtList from '../art-list/artList'
import Crystal from '../crystal/crystal'
import LoginForm from '../loginForm/loginForm'
import Contact from '../contact-me/contactme'
import Footer from '../footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'animate.css/animate.min.css'
import '../responsive.css'

// const API = process.env.REACT_APP_API
const API = 'http://localhost:3000'

export default function ChizetteArt() {
  const [artList, setArtList] = useState([])
  const [filteredTerm, setFilteredTerm] = useState('Splash')
  const [contactMe, setContactMe] = useState(false)
  const [secretLogIn, setSecretLogIn] = useState(false)
  const [userId, setUserId] = useState('')
  const [token, setToken] = useState('')

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
    getToken()
  }, [filteredTerm])

  // Filter artList based on filteredTerm
  const filterArtList = (artList) => {
    // Track splashList
    let artCounter = 0
    let jewelryCounter = 0
    let photoCounter = 0
    let artArr = []
    let jewelryArr = []
    let photoArr = []
    let splashList = []

    if (filteredTerm === 'Splash') {
      for (let art of artList) {
        // Art
        if (!art.medium.includes('Jewelry') && !art.medium.includes('Photograph') && artCounter < 3) {
          artCounter++
          artArr.push(art)
        }
        // Jewelry
        if (art.medium.includes('Jewelry') && jewelryCounter < 3) {
          jewelryCounter++
          jewelryArr.push(art)
        }
        // Photography
        if (art.medium.includes('Photograph') && photoCounter < 3) {
          photoCounter++
          photoArr.push(art)
        }
        splashList = artArr.concat(jewelryArr, photoArr)
      }
      return splashList
    } else {
      let filteredArtArray = artList.filter((art) => {
        // Filter by Photos
        if (filteredTerm === 'Photos') {
          return art.medium.includes('Photograph')
          // Filter by Art
        } else if (filteredTerm === 'Art') {
          return !art.medium.includes('Photograph') 
                  && !art.medium.includes('Jewelry')
          // Filter by Jewelry
        } else if (filteredTerm === 'Jewelry') {
          return art.medium.includes('Jewelry')
          // Don't Filter
        } else if (filteredTerm === 'All') {
          return art.medium
        }
      })
      return filteredArtArray
    }
  }

  // Alter filteredTerm based on Drawer
  const configureFilteredTerm = (ev) => {
    ev.preventDefault()
    let updateFilteredTerm = ev.currentTarget.children[0].innerText

    if (updateFilteredTerm === 'All') {
      setFilteredTerm('All')
    } else if (updateFilteredTerm === 'Art') {
      setFilteredTerm('Art')
    } else if (updateFilteredTerm === 'Jewelry') {
      setFilteredTerm('Jewelry')
    } else if (updateFilteredTerm === 'Photos'){
      setFilteredTerm('Photos')
    } else {
      setFilteredTerm('All')
    }
  }

  // Toggle contact form
  const toggleContactMe = () => {
    setContactMe(!contactMe)
  }

  // Admin — Toggle login form
  const toggleLoginForm = () => {
    setSecretLogIn(!secretLogIn)
  }

  // Admin login
  const loginSubmit = async (loginInfo) => {
    const response = await fetch(`${API}/sign-in`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    
    if (response.status === 200) {
      const auth = response.headers.get('Auth').slice(8, response.headers.get('Auth').length)
      const json = await response.json()

      setUserId(json.id)
      setToken(auth)

      storeToken(json.id, auth)
    }
  }

  // Creates token from admin and stores in local storage
  const storeToken = (userId, token) => {
    localStorage.setItem('userId', JSON.stringify(userId))
    localStorage.setItem('token', token)
  }

  // Grab token on reload
  const getToken = () => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    setUserId(userId || "")
    setToken(token || "")
  }

  // Admin Logout
  const logoutClick = () => {
    setToken('')
    setUserId('')
    localStorage.clear()
  }

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
      <Navbar
        toggleLoginForm={toggleLoginForm}
        token={token}
      />
      <Drawer 
        configureFilteredTerm={configureFilteredTerm}
        toggleContactMe={toggleContactMe}
        contactMe={contactMe}
        logoutClick={logoutClick}
        token={token}
      />
      {filteredTerm === 'Splash' ? <Parallax /> : <i><h4 className="filteredTitle">{filteredTerm}</h4></i>}
      {secretLogIn && 
        <LoginForm 
          loginSubmit={loginSubmit}
          userId={userId}
        />
      }
      <br />
      <br />
      <ArtList
        artList={artList}
        editArt={editArt}
        deleteArt={deleteArt}
        token={token}
        filteredTerm={filteredTerm}
      />
      {contactMe ? 
        null 
        : 
        <Crystal />
      }
      {
        contactMe && 
        <Contact 
          contactMe={contactMe} 
          token={token}
          postArt={postArt}
        />
        }
      <Footer />
    </ParallaxProvider>
  )
}

