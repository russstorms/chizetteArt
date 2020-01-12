import React, { useState } from 'react'
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

export default function Art({ id, art, artList, filterTerm, deleteArt, token }) {
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
    const artList = this.props.artList[setCount]
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

  // Admin — Edit art
  // const editSubmit = (ev) => {
  //   ev.preventDefault()
  //   let editArtID = ev.target.id
  //   let editArtTitle = ev.target[0].value
  //   let editArtYear = ev.target[1].value
  //   let editArtMedium = ev.target[2].value
  //   let editArtPoster = ev.target[3].value

  //   if (editArtTitle.length === 0) {
  //     editArtTitle = ev.target[0].placeholder
  //   }
  //   if (editArtYear.length === 0) {
  //     editArtYear = ev.target[1].placeholder
  //   }
  //   if (editArtMedium.length === 0) {
  //     editArtMedium = ev.target[2].placeholder
  //   }
  //   if (editArtPoster.length === 0) {
  //     editArtPoster = ev.target[3].placeholder
  //   }
  //   this.props.editArt(editArtID, editArtTitle, editArtYear, editArtMedium, editArtPoster)
  // }

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
        {/* {token ?
          <span>
            <Modal
              className="Modal editModal"
              header={`Edit: ${art.title}`}
              trigger={
                <span>
                  <Button className="editButton btn-flat waves-effect waves-light">
                    <i className="large material-icons icon brushIcon">
                      brush
                    </i>
                  </Button>
                </span>
              }
            >
              <i className="fas fa-times modal-close createClose"></i>
              <form
                autoComplete="off"
                id={art.id}
                onSubmit={this.editSubmit}
              >
                <label>
                  Title
                </label>
                <input
                  type="text"
                  placeholder={art.title}
                  name="Title"
                />
                <label>
                  Year
                </label>
                <input
                  type="text"
                  placeholder={art.year}
                  name="Year"
                />
                <label>
                  Medium
                </label>
                <input
                  type="text"
                  placeholder={art.medium}
                  name="Medium"
                />
                <label>
                  Url
                </label>
                <input
                  type="text"
                  placeholder={art.poster}
                  name="Url" 
                />
                <Button
                  className="editArt waves-effect waves-red btn modal-close"
                  name="submit">
                    Edit!
                </Button>
              </form>
            </Modal>
            
          </span> 
          : null
        } */}
      </div>
    </ScrollAnimation>
  )
}