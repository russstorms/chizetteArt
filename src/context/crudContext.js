import React, { createContext, useState, useEffect, useContext } from "react"
import { AdminContext } from "./adminContext"

import useFilteredTermState from '../components/hooks/useFilteredTermState'

// Node API
const API = process.env.REACT_APP_API
// const API = 'http://localhost:3000'

export const CrudContext = createContext()

export function CrudProvider(props) {
  // Grab token from AdminContext
  const token = useContext(AdminContext)

  const [artList, setArtList] = useState([])

  // Custom Hooks
  const {filteredTerm, configureFilteredTerm, filterArtList} = useFilteredTermState('Splash')

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
        "token": token
      },
      body: JSON.stringify(artBody)
    })
    if (response.status !== 200) {
      alert(`Unable to create this masterpiece!`)
    } else {
      alert(`Art Created!`)
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
        "token": token
      },
    })
    if (response.status !== 200) {
      alert(`Unable to edit this masterpiece!`)
    } else {
      alert(`Edited this masterpiece!`)
    }
    
    setArtList(newList)
  }

  // Admin — Delete art
  const deleteArt = async (id) => {
    let response = await fetch(`${API}/chizetteart/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/json",
        "token": token
      },
    })
    if (response.status !== 200) {
      alert(`Unable to erase this masterpiece!`)
    } else {
      alert(`Crumbled up and thrown away!`)
    }
    setArtList([...artList])
  }

  return (
    <CrudContext.Provider
      value={{
        artList,
        filteredTerm,
        configureFilteredTerm,
        postArt,
        editArt,
        deleteArt
      }}
    >
      {props.children}
    </CrudContext.Provider>
  )
}
