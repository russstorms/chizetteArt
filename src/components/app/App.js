import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'
import ComposeArt from '../create-art/createart'


const API = process.env.API || 'http://localhost:3000'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: [],
      filteredArt: [],
      singleView: false,
      userId: '',
      actualToken: '',
      logIn: false
    }
  }

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
        logIn: false,
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

  logIn(){
    if(this.state.logIn){
      this.setState({
        ...this.state,
        logIn: false
      })
    }
    if(!this.state.logIn){
      this.setState({
        ...this.state,
        logIn: true
      })
    }
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

  async storeToken(userId=this.state.userId, token=this.state.actualToken) {
    // console.log(userId, token)
    await localStorage.setItem('userId', JSON.stringify(userId))
    await localStorage.setItem('token', token)
  }

  componentDidMount = async () => {
    await this.getArtList()
    await this.getToken()
  }

  getArtList = async () => {
    //// GET ART \\\\
    const artListJson = await fetch(`${API}/chizetteart`)
    const artList = await artListJson.json()
    this.setState({
      artList
    })
  }

  postArt = async (title, year, medium) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium
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
    }
    setTimeout(()=>this.getArtList(), 100)
  }

  newArt(art){
    // TIES INTO STATE WHEN LOGGED IN
    art.userId = this.state.userId
    console.log(`IN newArt()>>>>`, art)
    this.postArt(art)
  }














  render() {
    return (
      <main className="App container">
        <Header />
        <ArtList artList={this.state.artList} />
        <ComposeArt postArt={this.postArt} />
        <footer>
        <Login loginClick={this.loginClick} logIn={this.logIn.bind(this)} userId={this.state.userId} />
        </footer>
      </main>
    )
  }
}