import React from 'react'
import { Modal, Button } from 'react-materialize'

const ComposeArt = ({postArt}) => {
  const createArt = (ev) => {
    ev.preventDefault()
    let title = ev.target[0].value
    let year = ev.target[1].value
    let medium = ev.target[2].value
    let url = ev.target[3].value

    return postArt(title, year, medium, url)
  }
  return <div>
  <br />
    <Modal className="Modal"
    header='Create Art!'
    trigger={<Button className="waves-effect waves-red">Create Art</Button>}>
    <form onSubmit={createArt}>
      <label>Title</label>
      <input type="text" name="Title" />
      <label>Year</label>
      <input type="text" name="Year" />
      <label>Medium</label>
      <input type="text" name="Medium" />
      <label>Url</label>
      <input type="url" name="Url" />
      <Button className="waves-effect waves-red btn modal-close" name="submit">Add Art</Button>
    </form>
    </Modal>
  </div>
}

export default ComposeArt