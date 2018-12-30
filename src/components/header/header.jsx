import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <main className="container">
        <div className="nav">
          <h1 className="chizetteArt">chizetteArt</h1>
        </div>
        <i className="small material-icons icon iconBack">reply</i>
      </main>
    )
  }
}