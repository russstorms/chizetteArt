import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import './crystal.css'

export default class Body extends Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100}>
        <div className="bG">
          <div id="stripes">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}