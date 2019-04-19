import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import Parallax from '../parallax/parallax'
import ArtList from '../art-list/artList'
import Crystal from '../crystal/crystal'
import Login from '../login/loginForm'
import Contact from '../contact-me/contactme'
import Footer from '../footer/footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'animate.css/animate.min.css'
// env on site
const API = process.env.REACT_APP_API

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
      // console.log(auth)
      const json = await response.json()
      this.setState({

        userId: json.id,
        actualToken: auth
      })
      this.storeToken(json.id, auth)
    }
  }

  logoutClick = async () => {
    this.setState({
      userId: ''
    })
    this.storeToken("", "")
    }


  async getToken() {
    const token = await localStorage.getItem('token')
    const userId = await localStorage.getItem('userId')
    const parsed = JSON.parse(userId)
    this.setState({
      userId: parsed || "",
      actualToken: token || ""
    })
  }

  async storeToken(userId = this.state.userId, token = this.state.actualToken) {
    await localStorage.setItem('userId', JSON.stringify(userId))
    await localStorage.setItem('token', token)
  }

  componentDidMount = async () => {
    await this.getArtList()
    await this.getToken()
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
      mode: "cors",
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
    newList.splice(indexToEdit, 1, {id, ...artBody})
    this.setState({
      artList: newList
    })
  }


  //// DELETE ART \\\\
  deleteArt = async (id) => {
    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "DELETE",
      mode: "cors",
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
      secretLogIn: false
    })
    } else {
      this.setState({
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
        filteredTerm: 'All',
        counter: 0
      })
    } else if (searchTerm === 'Photography') {
      this.setState({
        filteredTerm: 'Photography',
        counter: 0
      })
    } else if (searchTerm === 'Jewelry') {
      this.setState({
        filteredTerm: 'Jewelry',
        counter: 0
      })
    } else {
      this.setState({
        filteredTerm: 'Art',
        counter: 0
      })
    }
  }

  //// FILTER BY MEDIUM \\\\
  splashFilterArt = (ev) => {
    ev.preventDefault()
    let searchTerm = ev.target.dataset.medium
      
    if (searchTerm === 'Photography') {
      this.setState({
        filteredTerm: 'Photography',
        counter: 0
      })
    }
    if (searchTerm === 'Jewelry') {
      this.setState({
        filteredTerm: 'Jewelry',
        counter: 0
      })
    }
    if (searchTerm === 'Art') {
      this.setState({
        filteredTerm: 'Art',
        counter: 0
      })
    }
  }

  //// TOGGLE CONTACT FORM \\\\
  toggleContactMe = () => {
    if (this.state.contactMe) {
    this.setState({
      contactMe: false
    })
    } else {
      this.setState({
        contactMe: true
      })
    }
  }

  render() {
    let artCounter = 0
    let jewelryCounter = 0
    let photoCounter = 0
    let artArr = []
    let jewelryArr = []
    let photoArr = []
    let splashList = []
    if (!this.state.filteredTerm) {
      for (let art of this.state.artList) {
        //// ART \\\\
        if (!art.medium.includes('Jewelry') && !art.medium.includes('Photography') && artCounter < 3) {
          artCounter++
          artArr.push(art)
        }

        //// JEWELRY \\\\
        if (art.medium.includes('Jewelry') && jewelryCounter < 3) {
          jewelryCounter++
          jewelryArr.push(art)
        }

        //// PHOTOGRAPHY \\\\
        if (art.medium.includes('Photography') && photoCounter < 3) {
          photoCounter++
          photoArr.push(art)
        }
        splashList = artArr.concat(jewelryArr, photoArr)
      }
    }
    
    return (
      <ParallaxProvider className="App container">
        <Header filterArt={this.filterArt} logoutClick={this.logoutClick} token={this.state.actualToken} toggleLoginForm={this.toggleLoginForm} toggleContactMe={this.toggleContactMe} contactMe={this.state.contactMe} postArt={this.postArt} />
        {!this.state.filteredTerm ? <Parallax /> : <i><h4 className="filteredTitle">{this.state.filteredTerm}</h4></i>}
        {this.state.secretLogIn ? <Login loginClick={this.loginClick} userId={this.state.userId}/> : null}
        <br />
        <br />
        <ArtList splashFilter={this.splashFilterArt} contactMe={this.state.contactMe} filterTerm={this.state.filteredTerm} splashList={splashList} artList={this.state.artList.filter((art) => {
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
        {!this.state.contactMe ? <Crystal /> : null}
        {this.state.contactMe ? <Contact contactMe={this.state.contactMe} /> : null}
        <Footer />
      </ParallaxProvider>
    )
  }
}