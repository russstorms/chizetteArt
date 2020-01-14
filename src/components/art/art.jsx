import React, { useState } from 'react'
import EditArt from '../edit-art/editart'
import { Modal, Button, Backdrop, Fade} from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll'
import StripeCheckout from 'react-stripe-checkout'

// Styles
import './styles/art.css'
import 'animate.css/animate.min.css'
import { makeStyles } from '@material-ui/core/styles'

// Stripe Test Key
const stripeKey = `pk_test_b8uyn2so9v4rOyipsgG5bYfB00kuYClQ0V`

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: 'none',
    padding: '10px',
  },
}))

export default function Art({ id, art, artList, filterTerm, editArt, deleteArt, token }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  // Check counter to ensure it isn't longer than array
  let counter = count >= artList.length ? 0 : count

  const handleOpen = () => {
    setOpen(true)
    setCount(id)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Single view — Next click
  const nextClick = () => {
    const trackArtPosters = count === artList.length - 1 ? 0 : count + 1
    setCount(trackArtPosters)
  }

  // Single view — Prev click
  const prevClick = () => {
    const trackArtPosters = count === 0 ? artList.length - 1 : count - 1
    setCount(trackArtPosters)
  }

  // TODO — Swap test key for live key
  const stripeBtn = async (token) => {
    // const API = process.env.REACT_APP_API
    const API = 'http://localhost:3000'
    const artList = artList[setCount]
    console.log('TOKEN>>>', token.card)
    
    await fetch(`${API}/stripe`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: artList.price * 100,
        email: token.email,
        artPiece: artList.title,
        artMedium: artList.medium,
        artYear: artList.year,
        art: artList.poster,
        stripeToken: token.id
      }),
    })
    .then(response => response.json())
      .then(charge => {
        console.log('charge>>>', charge)
      })
  }

  // Admin — Delete art
  const removeArt = (ev) => {
    ev.preventDefault()
    return deleteArt(ev.target.id)
  }

  // // Logic to remove 'Purchase Print' button from Jewelry and Photos
  // const handleArtWithoutPrintAndOtherMediums =
  //   //  Current Print of 'Gold + Blue' does not have proper resolution to sell
  //   !artList[counter].title.includes('Gold + Blue') 
  //   && !artList[counter].medium.includes('Jewelry') 
  //   && !artList[counter].medium.includes('Photo')

  return (
    // Art piece
    <ScrollAnimation
      animateIn="zoomInUp"
      animateOut="fadeOut"
    >
      <div className="Art">
        {token ? 
          <Button
            id={art.id}
            onClick={(ev) => removeArt(ev)}
            className="deleteButton waves-effect waves-light btn-flat delButton">
              <i 
                id={art.id}
                className="large material-icons icon deleteIcon"
              >
                delete
              </i>
          </Button>
          : null
        }
        {filterTerm === '' ? 
          <img
            className="poster"
            src={art.poster}
            alt="n/a"
          />
          :
          <div>
            <img
              className="poster"
              onClick={handleOpen}
              src={art.poster}
              alt="n/a"
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 2500,
              }}
              disableAutoFocus={true}
              disableEnforceFocus
            >
              <Fade in={open}>
                <div>
                  <img
                    className="posterSingleView"
                    src={artList[counter].poster}
                    alt="n/a"
                  />

                  <div className="artInfoContainer">
                    <div className="singleViewTitle">
                      <i>{artList[counter].title}</i>
                      <span className="singleViewYear">{artList[counter].year}</span>
                    </div>
                    <div className="singleViewMedium animated fadeInRight delay-1s">{artList[counter].medium}</div>
                    {/* {handleArtWithoutPrintAndOtherMediums &&
                      <div className="singleViewPrice">${artList[counter].price} USD</div> 
                    }
                    {handleArtWithoutPrintAndOtherMediums && 
                      <StripeCheckout className="singleViewPriceButton" 
                        token={stripeBtn}
                        stripeKey={stripeKey}
                        name="chizetteArt"
                        description="Purchase Print"
                        image={artList.poster}
                        amount={artList.price * 100}
                        currency="USD"
                        locale="auto"
                        shippingAddress
                        billingAddress={true}
                        zipCode={true}
                        >
                        <div>
                          <button className="singleViewPriceButton">
                            Purchase Print
                          </button>
                        </div>
                      </StripeCheckout>
                    } */}
                  </div>
                  <div className="ctrlButtons">
                    <div onClick={prevClick} className="prevButton">
                      <i className="carouselArrow large material-icons icon animated fadeInLeft delay-1s">
                        chevron_left
                      </i>
                    </div>
                    <div onClick={nextClick} className="nextButton">
                      <i className="carouselArrow large material-icons icon animated fadeInRight delay-1s">chevron_right</i>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        }

        {/* Scrolling Art Title */}
        <ScrollAnimation
          animateIn="fadeInDown"
          animateOut="fadeOutUp"
          offset={125}
        >
          <div className="artTitle">
            <b>{art.title}</b>
          </div>
        </ScrollAnimation>

        {/* ADMIN CONTROLS */}
        {
          token &&
          <EditArt
            id={id}
            editArt={editArt}
          />
        }
      </div>
    </ScrollAnimation>
  )
}

