import React, { useState, useContext } from 'react'
import { AdminContext } from "../../context/adminContext"
import { TextField } from "@material-ui/core"

// Styles
import './styles/LoginForm.css'

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	// Contexts
	const { loginSubmit } = useContext(AdminContext)

  return (
    <div className="LoginForm">
			<form 
				onSubmit={e => {
					e.preventDefault()
					loginSubmit({ username, password })
					setUsername('')
					setPassword('')
				}}
			>
				<h4 className="formTitle loginTitle">Login</h4>
        <TextField
					variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin="normal"
          label="Username"
					fullWidth
					required
        />
				<TextField
					type="password"
					variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
          label="Secret Code"
					fullWidth
					required
        />
				<button
					className="commonBtn"
					type="submit">
						Go
				</button>
      </form>
    </div>
  )
}

export default LoginForm

