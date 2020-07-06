import React, { useState, useContext } from 'react';
import { AdminContext } from '../../context/adminContext';
import { CrudContext } from '../../context/crudContext';
import EditArt from '../edit-art/EditArt';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ScrollAnimation from 'react-animate-on-scroll';
import StripeCheckout from 'react-stripe-checkout';

// Styles
import './styles/Art.css';
import 'animate.css/animate.min.css';

// Stripe Test Key
const stripeKey = `pk_test_b8uyn2so9v4rOyipsgG5bYfB00kuYClQ0V`;

const Art = ({ id, modalId, art, artList, filteredTerm }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Contexts
  const { token } = useContext(AdminContext);
  const { deleteArt } = useContext(CrudContext);

  // Check counter to ensure it isn't longer than array
  let counter = count >= artList.length ? 0 : count;

  const handleOpen = () => {
    setOpen(true);
    setCount(modalId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Single view — Next click
  const nextClick = () => {
    const trackArtPosters = count === artList.length - 1 ? 0 : count + 1;
    setCount(trackArtPosters);
  };

  // Single view — Prev click
  const prevClick = () => {
    const trackArtPosters = count === 0 ? artList.length - 1 : count - 1;
    setCount(trackArtPosters);
  };

  // Admin — Delete art
  const removeArt = (ev) => {
    ev.preventDefault();
    return deleteArt(ev.target.id);
  };

  // TODO — Swap test key for live key
  const stripeBtn = async (token) => {
    // const API = process.env.REACT_APP_API
    const API = 'http://localhost:3000';
    const artList = artList[counter];
    console.log('TOKEN>>>', token.card);

    await fetch(`${API}/stripe`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: artList.price * 100,
        email: token.email,
        artPiece: artList.title,
        artMedium: artList.medium,
        artYear: artList.year,
        art: artList.poster,
        stripeToken: token.id,
      }),
    })
      .then((response) => response.json())
      .then((charge) => {
        console.log('charge>>>', charge);
      });
  };

  // Logic to remove 'Purchase Print' button from Jewelry and Photos
  const handleArtWithoutPrintAndOtherMediums =
    //  Current Print of 'Gold + Blue' does not have proper resolution to sell
    !artList[count].title.includes('Gold + Blue') &&
    !artList[count].medium.includes('Jewelry') &&
    !artList[count].medium.includes('Photo');

  return (
    // Art piece
    <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
      <div className="Art">
        {filteredTerm === 'Splash' ? (
          <img
            className="poster"
            src={art.poster}
            alt={`${art.title}, ${art.year}, ${art.medium}`}
            title={art.title}
          />
        ) : (
          <div>
            <img
              className="poster"
              onClick={handleOpen}
              src={art.poster}
              alt={`${art.title}, ${art.year}, ${art.medium}`}
              title={art.title}
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="modalStyle"
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
                    alt={`${art.title}, ${art.year}, ${art.medium}`}
                    title={art.title}
                  />
                  <div className="artInfoContainer">
                    <div className="singleViewTitle">
                      <i>{artList[counter].title}</i>
                      <span className="singleViewYear">
                        {artList[counter].year}
                      </span>
                    </div>
                    <div className="singleViewMedium animated fadeInRight delay-1s">
                      {artList[counter].medium}
                    </div>
                    {handleArtWithoutPrintAndOtherMediums && (
                      <div className="singleViewPrice">
                        ${artList[counter].price} USD
                      </div>
                    )}
                    {/* {handleArtWithoutPrintAndOtherMediums && (
                      <StripeCheckout
                        token={stripeBtn}
                        stripeKey={stripeKey}
                        name="chizetteArt"
                        description="Purchase Print"
                        image={artList[counter].poster}
                        amount={artList[counter].price * 100}
                        currency="USD"
                        locale="auto"
                        shippingAddress
                        billingAddress={true}
                        zipCode={true}
                        sameSite="None"
                      >
                        <div className="printContainer">
                          <h6 style={{ color: 'white' }}>
                            Prints Unavailable — Test Mode
                          </h6>
                          <button className="commonBtn singleViewPriceButton">
                            Purchase Print
                          </button>
                        </div>
                      </StripeCheckout>
                    )} */}
                  </div>
                  <div className="ctrlButtons">
                    <div
                      onClick={prevClick}
                      className="prevButton animated fadeInLeft delay-1s"
                    >
                      <ArrowLeftIcon
                        fontSize="large"
                        style={{
                          fontSize: '8em',
                        }}
                      />
                    </div>
                    <div
                      onClick={nextClick}
                      className="nextButton animated fadeInRight delay-1s"
                    >
                      <ArrowRightIcon
                        fontSize="large"
                        style={{
                          fontSize: '8em',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        )}

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
        {token !== '' && (
          <div>
            <EditArt id={id} art={art} />
            <div className="deleteContainer">
              <DeleteForeverIcon
                id={art.id}
                onClick={(ev) => removeArt(ev)}
                className="deleteIcon"
                fontSize="large"
              />
            </div>
          </div>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default Art;
