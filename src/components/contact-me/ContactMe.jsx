import React, { useContext } from 'react'
import { AdminContext } from "../../context/adminContext"
import ScrollAnimation from 'react-animate-on-scroll'
import ComposeArt from '../create-art/CreateArt'

// Styles
import './styles/ContactMe.css'

const Contact = () => {
  // Contexts
  const { token } = useContext(AdminContext)

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div
        className='Contact'
        id='contact'
      >
        <div 
          className="contactContainer"
        >
          <p className="contact">
            <span className="bigLetter">C</span>
              hizette grew up in a pink house on a little island with two artist parents who taught her to draw and paint.
              She works primarily with gouache and crayon, and with gemstones, natural fibers, seashells, glass, clay, & photography.
              Currently, she lives in the mountains.
          </p>
          <i>
            <p className="contact">Please email for commissions, collaboration, or questions.</p>
          </i>
            <div className="contactIconContainer">
              <a
                href="https://www.instagram.com/chizette/"
                target="blank"
                className="instagram"
              >
                <span className="instagramIcon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
              <a
                href="mailto:chizetteart@gmail.com"
                target="blank"
                className="email"
              >
                <span className="emailIcon">
                  <i className="far fa-envelope"></i>
                </span>
              </a>
            </div>
          <h5 className="quote">
            <i>
              "Great art picks up where nature ends."
            </i>
              ~Chagall
          </h5>
          {
            token !== '' &&
            <ComposeArt />
          }
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Contact

