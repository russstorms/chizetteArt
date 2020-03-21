import React, { useState, useContext } from 'react'
import { CrudContext } from "../../context/crudContext"
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core'
import { FormReducer, reducer } from '../reducers/formReducer'

// Styles
import './styles/CreateArt.css'
import '../theme.css'

// Admin — Create new art
const ComposeArt = () => {
  const initialState = {
    title: '',
    year: '',
    medium: '',
    url: '',
    price: '',
  }

  // State Reducer
  const [formState, dispatch] = FormReducer(reducer, initialState)
  const { title, year, medium, url, price } = formState

  const onChange = (e) => {
    dispatch({ type: 'form', field: e.target.name, value: e.target.value })
  }

  // Contexts
  const { postArt } = useContext(CrudContext)

  // Modal state
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

    postArt(title, year, medium, url, price)
    dispatch({ type: 'reset', payload: initialState })
    setOpen(false)
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
                console.log('created')
                createArt({title, year, medium, url, price})
              }}
            >
              <h4 className="formTitle">Create Art</h4>
              <TextField
                name="title"
                variant="outlined"
                value={title}
                onChange={onChange}
                margin="normal"
                label="Title"
                fullWidth
                required
              />
              <TextField
                name="year"
                type="number"
                variant="outlined"
                value={year}
                onChange={onChange}
                margin="normal"
                label="Year"
                fullWidth
                required
              />
              <TextField
                name="medium"
                variant="outlined"
                value={medium}
                onChange={onChange}
                margin="normal"
                label="Medium ('Photograph', 'Jewelry', else Art)"
                fullWidth
                required
              />
              <TextField
                name="url"
                variant="outlined"
                value={url}
                onChange={onChange}
                margin="normal"
                label="Url"
                fullWidth
                required
              />
              <TextField
                name="price"
                type="number"
                variant="outlined"
                value={price}
                onChange={onChange}
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

export default ComposeArt

