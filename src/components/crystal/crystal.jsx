import React, { Component } from 'react'
import './crystal.css'

export default class Body extends Component {

  render() {
    return (
      <div id="stripes">
        <div className="bG">
          <span></span>
          <span></span> 
          <span></span> 
          <span></span>
          <span></span>
        </div>
        <div className="bG">
          <span></span>
          <span></span> 
          <span></span> 
          <span></span>
          <span></span>
        </div>
        <div className="bG">
          <span></span>
          <span></span> 
          <span></span>
        </div>
        <div className="bG">
          <span></span>
          <span></span> 
          <span></span> 
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}