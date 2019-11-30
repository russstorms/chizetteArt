import React, { Component } from 'react'
import './styles/footer.css'

export default class footer extends Component {
  render() {
    return (
      <main className="container">
        <div className="footer">
          <h1 className="chizetteArtFooter">chizetteArt</h1>
          <h6 className="copyRight">©2019</h6>
        </div>
      </main>
    )
  }
}