import React, { createContext, useState, useEffect } from "react"

// Node API
const API = process.env.REACT_APP_API
// const API = 'http://localhost:3000'

export const AdminContext = createContext()

export function AdminProvider(props) {
  
  const [userId, setUserId] = useState('')
  const [token, setToken] = useState('')

  // Creates token from admin and stores in local storage
  const storeToken = (userId, token) => {
    localStorage.setItem('userId', JSON.stringify(userId))
    localStorage.setItem('token', token)
  }

  // Grab token on reload
  const getToken = () => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    
    setUserId(userId || "")
    setToken(token || "")
  }

  useEffect(() => {
    getToken()
  }, [])

  // Admin login
  const loginSubmit = async (loginInfo) => {
    const response = await fetch(`${API}/sign-in`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    
    if (response.status === 200) {
      const auth = response.headers.get('Auth').slice(8, response.headers.get('Auth').length)
      const json = await response.json()

      setUserId(json.id)
      setToken(auth)

      storeToken(json.id, auth)
    }
  }
  
  // Admin Logout
  const logoutClick = () => {
    setToken('')
    setUserId('')
    localStorage.clear()
  }

  return (
    <AdminContext.Provider
      value={{
        userId,
        token,
        getToken,
        loginSubmit,
        logoutClick
      }}
    >
      {props.children}
    </AdminContext.Provider>
  )
}

