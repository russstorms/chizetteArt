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

// import storageHelpers from '../../Login/localStorageHelpers'

import 'animate.css/animate.min.css'
import '../responsive.css'

// const API = process.env.REACT_APP_API
const API = 'http://localhost:3000'

export default function ChizetteArt() {
  const [artList, setArtList] = useState([])
  const [filteredTerm, setFilteredTerm] = useState('')
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

      // Filter based on filteredTerm
      let filteredArtArray = artList.filter((art) => {
        // Filter by Photography
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
        } else {
          return art.medium
        }
      })
      setArtList(filteredArtArray)
    }
    getArtList()
    getToken()
  }, [filteredTerm])

  // Alter filteredTerm based on Drawer
  const configureFilteredTerm = (ev) => {
    ev.preventDefault()
    let updateFilteredTerm = ev.currentTarget.children[1].innerText

    if (updateFilteredTerm === 'View All') {
      setFilteredTerm('All')
    } else if (updateFilteredTerm === 'Art') {
      setFilteredTerm('Art')
    } else if (updateFilteredTerm === 'Jewelry') {
      setFilteredTerm('Jewelry')
    } else {
      setFilteredTerm('Photos')
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

  // TESTING \\
  // PUT INSIDE useEFFECT()
  // Admin login
  const loginSubmit = async (loginInfo) => {
    console.log(loginInfo)
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
    localStorage.clear()
  }

  return (
    <ParallaxProvider className="App container">
      <Navbar
        toggleLoginForm={toggleLoginForm}
        // token={actualToken}
        // postArt={postArt}
      />
      <Drawer 
        configureFilteredTerm={configureFilteredTerm}
        toggleContactMe={toggleContactMe}
        contactMe={contactMe}
        logoutClick={logoutClick}
        token={token}
        // postArt={postArt}
      />
      {!filteredTerm ? <Parallax /> : <i><h4 className="filteredTitle">{filteredTerm}</h4></i>}
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
        // contactMe={contactMe}
        // filterTerm={filteredTerm}
        // splashList={splashList}
        // token={actualToken}
        // editArt={editArt}
        // deleteArt={deleteArt}
        // splashFilter={splashFilterArt}
      />
      {contactMe ? 
        null 
        : 
        <Crystal />
      }
      {contactMe && <Contact contactMe={contactMe} />}
      <Footer />
    </ParallaxProvider>
  )
}


// Below is filtering splash list and admin controls

  // Filter art into splashlist array
  // let artCounter = 0
  // let jewelryCounter = 0
  // let photoCounter = 0
  // let artArr = []
  // let jewelryArr = []
  // let photoArr = []
  // let splashList = []
  
  // if (!filteredTerm) {
  //   for (let art of artList) {
  //     const medium = art.medium
  //     // Art
  //     if (!medium.includes('Jewelry') && !medium.includes('Photograph') && artCounter < 3) {
  //       artCounter++
  //       artArr.push(art)
  //     }
  //     // Jewelry
  //     if (medium.includes('Jewelry') && jewelryCounter < 3) {
  //       jewelryCounter++
  //       jewelryArr.push(art)
  //     }
  //     // Photography
  //     if (medium.includes('Photograph') && photoCounter < 3) {
  //       photoCounter++
  //       photoArr.push(art)
  //     }
  //     splashList = artArr.concat(jewelryArr, photoArr)
  //   }
  // }

  // Filter art on landing page
  // const splashFilterArt = (ev) => {
  //   ev.preventDefault()
  //   let searchTerm = ev.target.dataset.medium
  //   if (searchTerm === 'Photos') {
  //     this.setState({
  //       filteredTerm: 'Photos',
  //       counter: 0
  //     })
  //   }
  //   if (searchTerm === 'Jewelry') {
  //     this.setState({
  //       filteredTerm: 'Jewelry',
  //       counter: 0
  //     })
  //   }
  //   if (searchTerm === 'Art') {
  //     this.setState({
  //       filteredTerm: 'Art',
  //       counter: 0
  //     })
  //   }
  // }

  // Admin — Create new art
  // const postArt = async (title, year, medium, url, price) => {
  //   const artBody = {
  //     title: title,
  //     year: year,
  //     medium: medium,
  //     poster: url,
  //     price: price
  //   }
  //   const response = await fetch(`${API}/chizetteart`, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Accept": "application/JSON",
  //       "Content-Type": "application/json",
  //       "token": this.state.actualToken
  //     },
  //     body: JSON.stringify(artBody)
  //   })
  //   if (response.status !== 200) {
  //     alert(`Post Art: Invalid post`)
  //   } else {
  //     alert(`Art Created!`)
  //   }
  //   this.setState({
  //     artList: [artBody, ...this.state.artList]
  //   })
  // }

  // Admin — Edit art
  // const editArt = async (id, title, year, medium, url) => {
  //   const artBody = {
  //     title: title,
  //     year: year,
  //     medium: medium,
  //     poster: url
  //   }

  //   let newList = this.state.artList.slice()
  //   let indexToEdit = newList.findIndex(art => art.id === +id)
  
  //   let response = await fetch(`${API}/chizetteart/${id}`, {
  //     method: "PUT",
  //     mode: "cors",
  //     body: JSON.stringify(artBody),
  //     headers: {
  //       "Accept": "application/JSON",
  //       "Content-Type": "application/json",
  //       "token": this.state.actualToken
  //     },
  //   })
  //   if (response.status !== 200) {
  //     alert(`Unable to edit this masterpiece.`)
  //   }
  //   newList.splice(indexToEdit, 1, {id, ...artBody})
  //   this.setState({
  //     artList: newList
  //   })
  // }

  // Admin — Delete art
  // const deleteArt = async (id) => {
  //   let response = await fetch(`${API}/chizetteart/${id}`, {
  //     method: "DELETE",
  //     mode: "cors",
  //     headers: {
  //       "Accept": "application/JSON",
  //       "Content-Type": "application/json",
  //       "token": this.state.actualToken
  //     },
  //   })
  //   if (response.status !== 200) {
  //     alert(`Unable to erase this masterpiece.`)
  //   }
  //   return this.getArtList()
  // }


