import React, { useState, useContext, useEffect } from 'react';
import { CrudContext } from '../../context/crudContext';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';

// Styles
import '../theme.css';

// Admin — Create new art
const EditArt = ({ id, art }) => {
  const [title, setTitle] = useState(art.title);
  const [year, setYear] = useState(art.year);
  const [medium, setMedium] = useState(art.medium);
  const [url, setUrl] = useState(art.poster);
  // const [price, setPrice] = useState('')

  useEffect(() => {
    setTitle(art.title);
    setYear(art.year);
    setMedium(art.medium);
    setUrl(art.poster);
  }, [art]);

  // Contexts
  const { editArt } = useContext(CrudContext);

  // Modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editSubmit = () => {
    editArt(id, title, year, medium, url);
    setTitle('');
    setYear(0);
    setMedium('');
    setUrl('');
    setOpen(false);
  };

  return (
    <div className="EditArt">
      <button className="commonBtn" onClick={handleOpen}>
        Edit Art
      </button>
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
          <div className="CreateArtFormContainer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editSubmit(e);
              }}
            >
              <h4 className="formTitle">Edit Art</h4>
              <TextField
                variant="outlined"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
                label="Title"
                fullWidth
                required
              />
              <TextField
                type="number"
                variant="outlined"
                defaultValue={year}
                inputProps={{
                  min: '1995',
                  max: '2100',
                  step: '1',
                }}
                onChange={(e) => setYear(e.target.value)}
                margin="normal"
                label="Year"
                fullWidth
                required
              />
              <TextField
                variant="outlined"
                defaultValue={medium}
                onChange={(e) => setMedium(e.target.value)}
                margin="normal"
                label="Medium ('Photograph', 'Jewelry', else Art)"
                fullWidth
                required
              />
              <TextField
                variant="outlined"
                defaultValue={url}
                onChange={(e) => setUrl(e.target.value)}
                margin="normal"
                label="Url"
                fullWidth
                required
              />
              <button className="commonBtn" type="submit">
                Edit!
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditArt;
