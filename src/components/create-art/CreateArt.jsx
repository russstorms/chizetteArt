import React, { useState } from 'react'
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import './styles/CreateArt.css'
import '../theme.css'

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

// Admin — Create new art
export default function ComposeArt({ postArt }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [medium, setMedium] = useState('')
  const [url, setUrl] = useState('')
  const [price, setPrice] = useState('')

  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const createArt = (ev) => {
    let title = ev.title
    let year = ev.year
    let medium = ev.medium
    let url = ev.url
    let price = ev.price

    return postArt(title, year, medium, url, price)
  }

  return (
    <div className="CreateArt">
      <button
        className="commonBtn"
        onClick={handleOpen}
      >
          Create Art
      </button>
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
          <div className="CreateArtFormContainer">
            <form 
              onSubmit={e => {
                e.preventDefault()
                console.log('created')
                createArt({title, year, medium, url, price})
                setTitle('')
                setYear('')
                setMedium('')
                setUrl('')
                setPrice('')
              }}
            >
              <h4 className="formTitle">Create Art</h4>
              <TextField
                variant="outlined"
                value={title}
                onChange={e => setTitle(e.target.value)}
                margin="normal"
                label="Title"
                fullWidth
                required
              />
              <TextField
                type="number"
                variant="outlined"
                value={year}
                onChange={e => setYear(e.target.value)}
                margin="normal"
                label="Year"
                fullWidth
                required
              />
              <TextField
                variant="outlined"
                value={medium}
                onChange={e => setMedium(e.target.value)}
                margin="normal"
                label="Medium"
                fullWidth
                required
              />
              <TextField
                variant="outlined"
                value={url}
                onChange={e => setUrl(e.target.value)}
                margin="normal"
                label="Url"
                fullWidth
                required
              />
              <TextField
                type="number"
                variant="outlined"
                value={price}
                onChange={e => setPrice(e.target.value)}
                margin="normal"
                label="Price"
                fullWidth
                required
              />
              <button
                className="commonBtn"
                type="submit">
                  Create!
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

