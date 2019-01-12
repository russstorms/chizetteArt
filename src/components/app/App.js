import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import Parallax from '../parallax/parallax'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'
import Footer from '../footer/footer'


const API = process.env.API || 'http://localhost:3000'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: [],
      filteredTerm: '',
      artPosters: [],
      userId: '',
      actualToken: '',
      secretLogIn: false
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
  }


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
  postArt = async (title, year, medium, url) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url
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

  filterArt = (ev) => {
    ev.preventDefault()
    let searchTerm = ev.currentTarget.children[0].children[0].dataset.medium.toLowerCase()
    if (searchTerm === 'photography') {
      this.setState = {
        ...this.state,
        filteredTerm: 'photography'
      }
    }

    this.setState = {
      ...this.state,
      filteredTerm: searchTerm
    }
  }

  render() {
    return (
      <main className="App container">
        <Header filterArt={this.filterArt} logoutClick={this.logoutClick} token={this.state.actualToken} toggleLoginForm={this.toggleLoginForm} postArt={this.postArt} />
        <Parallax artList={this.state.artList.map((art) => art.poster)} />
        {this.state.secretLogIn ? <Login loginClick={this.loginClick} userId={this.state.userId}/> : null}
        <ArtList artList={this.state.artList} artPosters={this.state.artList} token={this.state.actualToken} editArt={this.editArt} deleteArt={this.deleteArt} />
        <Footer />
      </main>
    )
  }
}

{/* <ArtList artList={this.state.artList.filter((art) => {art.medium.includes(this.state.filteredTerm)})} */}