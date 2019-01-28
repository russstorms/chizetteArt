import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import Parallax from '../parallax/parallax'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'
import Contact from '../contact-me/contactme'
import Footer from '../footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax'

// process.env.REACT_APP_API ||
const API = "http://localhost:3000"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: [],
      filteredTerm: '',
      artPosters: [],
      userId: '',
      actualToken: '',
      secretLogIn: false,
      contactMe: false
    }
  }

  
  //// POST TO LOGIN \\\\
  loginClick = async (loginInfo) => {
    // console.log('before get call', this.state)
    const response = await fetch(`${API}/sign-in`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    
    if (response.status === 200) {
      // console.log(response.headers.get('Auth'))
      const auth = response.headers.get('Auth').slice(8, response.headers.get('Auth').length)
      // console.log(auth)
      const json = await response.json()
      this.setState({
        ...this.state,
        userId: json.id,
        actualToken: auth
      })
      this.storeToken(json.id, auth)
    }
  }

  logoutClick = async () => {
    this.setState({
      ...this.state,
      userId: ''
    })
    this.storeToken("", "")
    }


  async getToken() {
    // console.log('in getToken(), looking for TOKEN')
    const token = await localStorage.getItem('token')
    const userId = await localStorage.getItem('userId')
    // console.log(`in getToken()`, userId, token)
    const parsed = JSON.parse(userId)
    this.setState({
      ...this.state,
      userId: parsed || "",
      actualToken: token || ""
    })
  }

  async storeToken(userId = this.state.userId, token = this.state.actualToken) {
    // console.log(userId, token)
    await localStorage.setItem('userId', JSON.stringify(userId))
    await localStorage.setItem('token', token)
  }

  componentDidMount = async () => {
    await this.getArtList()
    await this.getToken()
    // await this.getPrintfulAPI()
  }

  // CONNECT TO PRINTFUL \\\\
  // getPrintfulAPI = async () => {
    // const orders = await fetch(`${PRINTFULAPI}/orders`, {
    //   method: "GET",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Authorization": 'Base64 encoded API key'
    //   }
    // })
  // }

  //// GET THE ART \\\\
  getArtList = async () => {
    const artListJson = await fetch(`${API}/chizetteart`)
    const artList = await artListJson.json()
    this.setState({
      ...this.state,
      artList
    })
  }


  //// CREATE NEW ART \\\\
  postArt = async (title, year, medium, url, price) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url,
      price: price
    }
    // console.log(JSON.stringify(artBody))
    const response = await fetch(`${API}/chizetteart`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": this.state.actualToken
      },
      body: JSON.stringify(artBody)
    })
    if (response.status !== 200) {
      alert(`Post Art: Invalid post`)
    } else {
      alert(`Art Created!`)
    }
    this.setState({
      ...this.state,
      artList: [artBody, ...this.state.artList]
    })
  }


    //// EDIT ART \\\\
    editArt = async (id, title, year, medium, url) => {
      const artBody = {
        title: title,
        year: year,
        medium: medium,
        poster: url
      }

      let newList = this.state.artList.slice()
      let indexToEdit = newList.findIndex(art => art.id === +id)
  
      let response = await fetch(`${API}/chizetteart/${id}`, {
        method: "PUT",
        body: JSON.stringify(artBody),
        headers: {
          "Accept": "application/JSON",
          "Content-Type": "application/json",
          "token": this.state.actualToken
        },
      })
      if (response.status !== 200) {
        alert(`Couldn't edit this masterpiece.`)
      }
      newList.splice(indexToEdit, 1, { id, ...artBody})
      this.setState({
        ...this.state,
        artList: newList
      })
    }


  //// DELETE ART \\\\
  deleteArt = async (id) => {
    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": this.state.actualToken
      },
    })
    if (response.status !== 200) {
      alert(`Couldn't delete this masterpiece.`)
    }
    return this.getArtList()
  }

  //// TOGGLE SECRET LOGIN FORM \\\\
  toggleLoginForm = () => {
    if (this.state.secretLogIn) {
    this.setState({
      ...this.state,
      secretLogIn: false
    })
    } else {
      this.setState({
        ...this.state,
        secretLogIn: true
      })
    }
  }

  //// FILTER BY MEDIUM \\\\
  filterArt = (ev) => {
    ev.preventDefault()
    let searchTerm = ev.currentTarget.children[0].children[0].dataset.medium

    if (searchTerm === 'All') {
      this.setState({
        ...this.state,
        filteredTerm: 'All',
        counter: 0
      })
    } else if (searchTerm === 'Photography') {
      this.setState({
        ...this.state,
        filteredTerm: 'Photography',
        counter: 0
      })
    } else if (searchTerm === 'Jewelry') {
      this.setState({
        ...this.state,
        filteredTerm: 'Jewelry',
        counter: 0
      })
    } else {
      this.setState({
        ...this.state,
        filteredTerm: 'Art',
        counter: 0
      })
    }
  }

  //// TOGGLE CONTACT FORM \\\\
  toggleContactMe = () => {
    if (this.state.contactMe) {
    this.setState({
      ...this.state,
      contactMe: false
    })
    } else {
      this.setState({
        ...this.state,
        contactMe: true
      })
    }
  }

  render() {
    return (
      <ParallaxProvider className="App container">
        <Header filterArt={this.filterArt} logoutClick={this.logoutClick} token={this.state.actualToken} toggleLoginForm={this.toggleLoginForm} toggleContactMe={this.toggleContactMe} contactMe={this.state.contactMe} postArt={this.postArt} />
        {!this.state.filteredTerm ? <Parallax /> : <i><h4 className="filteredTitle">{this.state.filteredTerm}</h4></i>}
        {this.state.secretLogIn ? <Login loginClick={this.loginClick} userId={this.state.userId}/> : null}
        <br />
        <br />
        <ArtList artList={this.state.artList.filter((art) => {
          //// FILTER BY MEDIUM \\\\
          if (this.state.filteredTerm === 'All') {
            return art.medium
          }
          if (this.state.filteredTerm === 'Art') {
            return !art.medium.includes('Photography') && !art.medium.includes('Jewelry')
          } else {
            return art.medium.includes(this.state.filteredTerm)
          }
        })
        } 
        artPosters={this.state.artList.filter((art) => {
          if (this.state.filteredTerm === 'All') {
            return art.medium
          }
          if (this.state.filteredTerm === 'Art') {
            return !art.medium.includes('Photography') && !art.medium.includes('Jewelry')
          } else {
            return art.medium.includes(this.state.filteredTerm)
          }
        })
        } 
        token={this.state.actualToken} editArt={this.editArt} deleteArt={this.deleteArt} />
        {this.state.contactMe ? <Contact contactMe={this.state.contactMe} /> : null}
        <Footer />
      </ParallaxProvider>
    )
  }
}


{/* <ArtList artList={this.state.artList.filter((art) => {
  if (!this.state.filteredTerm) {
    if (!art.medium.includes('Jewelry') && !art.medium.includes('Photography') && artCounter < 3){
      artArr.push(art)
      artCounter++
      return artArr
    }
    if (art.medium.includes('Jewelry') && jewelryCounter < 3) {
      jewelryArr.push(art)
      jewelryCounter++
      combinedList = artArr.concat(jewelryArr)
      return combinedList
    }
    if (art.medium.includes('Photography') && photographyCounter < 3) {
      photoArr.push(art)
      photographyCounter++
      splashList = combinedList.concat(photoArr)
      console.log(splashList)
      return splashList
    }
    
  } else if (this.state.filteredTerm === 'Art') {
    return !art.medium.includes('Photography') && !art.medium.includes('Jewelry')
  } else {
    return art.medium.includes(this.state.filteredTerm)
  }
  })
}  */}