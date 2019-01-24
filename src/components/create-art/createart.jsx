import React from 'react'
import { Modal, Button } from 'react-materialize'
import './createart.css'

const ComposeArt = ({postArt}) => {
  const createArt = (ev) => {
    ev.preventDefault()
    let title = ev.target[0].value
    let year = ev.target[1].value
    let medium = ev.target[2].value
    let url = ev.target[3].value
    let price = ev.target[4].value

    return postArt(title, year, medium, url, price)
  }
  return <div>
  <br />
    <Modal className="Modal createModal"
    header='Create Art!'
    trigger={<i className="medium material-icons icon createArtButton">add_circle</i>}>
    <form onSubmit={createArt} autoComplete="off">
      <label>Title</label>
      <input type="text" name="Title" required/>
      <label>Year</label>
      <input type="text" name="Year" required/>
      <label>Medium</label>
      <input type="text" name="Medium" required/>
      <label>Url</label>
      <input type="url" name="Url" required/>
      <label>Price</label>
      <input type="number" name="Price" />
      <Button className="createArt waves-effect waves-light btn modal-close" name="submit"><i className="large material-icons icon">brush</i>Create Art!</Button>
    </form>
    </Modal>
  </div>
}

export default ComposeArt