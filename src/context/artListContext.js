import React, { createContext } from "react"
import useSWR from 'swr'

// Node API
const API = process.env.REACT_APP_API
// const API = 'http://localhost:3000'

export const ArtListContext = createContext()


export function ArtListProvider(props) {

  const fetcher = url => fetch(url).then(r => r.json())
  const { data } = useSWR(`${API}/chizetteart`, fetcher)

  return (
    <ArtListContext.Provider
      value={{ data }}
    >
      {props.children}
    </ArtListContext.Provider>
  )
}

