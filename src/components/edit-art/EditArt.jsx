import React, { useState, useContext } from 'react'
import { CrudContext } from "../../context/crudContext"
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core'

// Styles
// import { makeStyles } from '@material-ui/core/styles'
import '../theme.css'

// const useStyles = makeStyles(() => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     border: 'none',
//     padding: '10px',
//   },
// }))

// Admin — Create new art
const EditArt = ({ id }) => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState(0)
  const [medium, setMedium] = useState('')
  const [url, setUrl] = useState('')
  // const [price, setPrice] = useState('')

  const [open, setOpen] = useState(false)
  // const classes = useStyles();

  // Contexts
  const { editArt } = useContext(CrudContext)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const editSubmit = () => {
    editArt(id, title, year, medium, url)
    setTitle('')
    setYear(0)
    setMedium('')
    setUrl('')
  }

  return (
    <div className="EditArt">
      <button
        className="commonBtn"
        onClick={handleOpen}
      >
          Edit Art
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modalStyle'
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
                editSubmit(e)
              }}
            >
              <h4 className="formTitle">Edit Art</h4>
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
                inputProps={{
                  min: "1995",
                  max: "2100",
                  step: "1"
                }}
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
              <button
                className="commonBtn"
                type="submit">
                  Edit!
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default EditArt

