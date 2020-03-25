import React, {
  createContext,
  useState,
  useEffect,
  useContext 
} from "react"
import { AdminContext } from "./adminContext"
import { SnackbarContext } from "./snackBarContext"

import useFilteredTermState from '../components/hooks/useFilteredTermState'

// Node API
// const API = process.env.REACT_APP_API
const API = 'http://localhost:3000'

export const CrudContext = createContext()

export function CrudProvider(props) {
  // Grab token from AdminContext
  const token = useContext(AdminContext)
  // Context for Snackbar
  const {
    open,
    severity,
    message, 
    setOpen,
    setSeverity,
    setMessage, 
  } = useContext(SnackbarContext)

  const [artList, setArtList] = useState([])

  // Custom Hooks
  const {filteredTerm, filterArtList} = useFilteredTermState('All')

  // Get Art
  useEffect(() => {
    async function getArtList() {
      // Load the art collection
      const artListJson = await fetch(`${API}/chizetteart`)
      const artList = await artListJson.json()

      // Filter artList and set to current state
      setArtList(filterArtList(artList))
    }
    getArtList()
  }, [filteredTerm])

  // Admin — Create new art
  const postArt = async (title, year, medium, url, price) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url,
      price: price
    }
    const response = await fetch(`${API}/chizetteart`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token.token
      },
      body: JSON.stringify(artBody)
    })
    if (response.status !== 200) {
      setMessage("Unable to create art.")
      setOpen(true)
      setSeverity("error")
    } else {
      setMessage("Art Created!")
      setOpen(true)
      setSeverity("success")
    }
    setArtList([artBody, ...artList])
  }

  // Admin — Edit art
  const editArt = async (id, title, year, medium, url) => {
    const artBody = {
      title: title,
      year: year,
      medium: medium,
      poster: url
    }

    let newList = artList.map( art => (art.id === id) ? {id, ...artBody} : art )

    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(artBody),
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token.token
      },
    })
    if (response.status !== 200) {
      setMessage("Unable to edit this masterpiece!")
      setOpen(true)
      setSeverity("error")
    } else {
      setMessage("Edited this masterpiece!")
      setOpen(true)
      setSeverity("success")
    }
    setArtList(newList)
  }

  // Admin — Delete art
  const deleteArt = async (id) => {
    try {
      let response = await fetch(`${API}/chizetteart/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Accept": "application/JSON",
          "Content-Type": "application/json",
          "token": token.token
        },
      })
      if (response.ok) {
        setMessage("Crumbled up and thrown away!")
        setOpen(true)
        setSeverity("success")
      } else {
        setMessage("Res not OK.")
        setOpen(true)
        setSeverity("warning")
      }
    } catch (err) {
      setMessage("Unable to delete art.")
      setOpen(true)
      setSeverity("error")
    }
    setArtList([...artList])
  }

  return (
    <CrudContext.Provider
      value={{
        open,
        setOpen,
        severity,
        message,
        artList,
        filteredTerm,
        postArt,
        editArt,
        deleteArt
      }}
    >
      {props.children}
    </CrudContext.Provider>
  )
}

