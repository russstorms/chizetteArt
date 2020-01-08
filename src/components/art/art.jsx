import React, { useState, useEffect } from 'react'
import { Modal, Button, Backdrop, Fade} from '@material-ui/core/'
import ScrollAnimation from 'react-animate-on-scroll'
import StripeCheckout from 'react-stripe-checkout'

// Styles
import './styles/art.css'
import 'animate.css/animate.min.css'
import { makeStyles } from '@material-ui/core/styles';

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

// Stripe Test Key
const stripeKey = `pk_test_b8uyn2so9v4rOyipsgG5bYfB00kuYClQ0V`

export default function Art({ id, art, artPosters, filterTerm, token }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  // Check counter to ensure it isn't longer than array
  let counter = count >= artPosters.length ? 0 : count

  const handleOpen = () => {
    setOpen(true)
    setCount(id)
  }

  const handleClose = () => {
    setOpen(false)
    setCount(0)
  }

  // Admin — Edit art
  const editSubmit = (ev) => {
    ev.preventDefault()
    let editArtID = ev.target.id
    let editArtTitle = ev.target[0].value
    let editArtYear = ev.target[1].value
    let editArtMedium = ev.target[2].value
    let editArtPoster = ev.target[3].value

    if (editArtTitle.length === 0) {
      editArtTitle = ev.target[0].placeholder
    }
    if (editArtYear.length === 0) {
      editArtYear = ev.target[1].placeholder
    }
    if (editArtMedium.length === 0) {
      editArtMedium = ev.target[2].placeholder
    }
    if (editArtPoster.length === 0) {
      editArtPoster = ev.target[3].placeholder
    }
    this.props.editArt(editArtID, editArtTitle, editArtYear, editArtMedium, editArtPoster)
  }

  // Admin — Delete art
  const deleteArt = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.props.deleteArt(ev.target.id)
  }

  // Single view — Next click
  const nextClick = () => {
    const trackArtPosters = count === artPosters.length - 1 ? 0 : count + 1
    setCount(trackArtPosters)
  }

  // Single view — Prev click
  const prevClick = () => {
    const trackArtPosters = count === 0 ? artPosters.length - 1 : count - 1
    setCount(trackArtPosters)
  }


  // TODO — Swap test key for live key
  const stripeBtn = async (token) => {
    // const API = process.env.REACT_APP_API
    const API = 'http://localhost:3000'
    const artPosters = this.props.artPosters[setCount]
    console.log('TOKEN>>>', token.card)
    
    await fetch(`${API}/stripe`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: artPosters.price * 100,
        email: token.email,
        artPiece: artPosters.title,
        artMedium: artPosters.medium,
        artYear: artPosters.year,
        art: artPosters.poster,
        stripeToken: token.id
      }),
    })
    .then(response => response.json())
      .then(charge => {
        console.log('charge>>>', charge)
      })
  }

  return (
    // Art piece
    <ScrollAnimation
      animateIn="zoomInUp"
      animateOut="fadeOut"
    >
      <div className="Art">
        {filterTerm === '' ? 
          <img className="poster" src={art.poster} alt="n/a" /> 
          :
          <div>
            <img
              className="poster"
              onClick={handleOpen}
              src={art.poster}
              alt="https://placekitten.com/200/300"
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
                    src={artPosters[counter].poster}
                    alt="https://placekitten.com/200/300"
                  />

                  <div className="artInfoContainer">
                    <div className="singleViewTitle">
                      <i>{artPosters[counter].title}</i>
                      <span className="singleViewYear">{artPosters[counter].year}</span>
                    </div>
                    <div className="singleViewMedium animated fadeInRight delay-1s">{artPosters[counter].medium}</div>
                    {!artPosters[counter].title.includes('Gold + Blue') && !artPosters[counter].medium.includes('Jewelry') && !artPosters[counter].medium.includes('Photo') ? 
                      <div className="singleViewPrice">${artPosters[counter].price} USD</div> 
                      : null}
                    {!artPosters[counter].title.includes('Gold + Blue') && !artPosters[counter].medium.includes('Jewelry') && !artPosters[counter].medium.includes('Photo') ? 
                      <StripeCheckout className="singleViewPriceButton" 
                        token={stripeBtn}
                        stripeKey={stripeKey}
                        name="chizetteArt"
                        description="Purchase Print"
                        image={artPosters.poster}
                        amount={artPosters.price * 100}
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
                      </StripeCheckout> : null
                    }
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
            {this.props.token ? 
              <Button
                id={art.id}
                onClick={(ev) => this.deleteArt(ev)}
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
          </span> 
          : null
        } */}
      </div>
    </ScrollAnimation>
  )
}
