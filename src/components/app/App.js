import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'

// import CreateArt from '../create-art/createart'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: []
    }
  }

  componentDidMount = async () => {
    await this.getArtList()
  }

  getArtList = async () => {
    //// GET ART \\\\
    const artListJson = await fetch(`http://localhost:3000/chizetteart`)
    let artList = await artListJson.json()
    this.setState({ artList })
  }

  render() {
    return (
      <main className="App container">
        <Header />
        <ArtList artList={this.state.artList} />
        <Login />
      </main>
    )
  }
}
