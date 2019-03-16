import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import './crystal.css'

export default class Body extends Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
        <div className="bG">
          <div id="darkStripes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="stripes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}