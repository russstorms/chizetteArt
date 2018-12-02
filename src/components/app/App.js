import React, { Component } from 'react'
import './App.css'
import Header from '../header/header'
import ArtList from '../art-list/artList'

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
    console.log(artList)

    this.setState({ artList })
  }

  render() {
    return (
      <main className="App container">
        <Header />
      <hr />
        <ArtList artList={this.state.artList} />
      </main>
    )
  }
}
