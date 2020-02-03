import React, { useState } from 'react'
import { TextField } from "@material-ui/core"

// Styles
import './styles/LoginForm.css'

const LoginForm = ({ loginSubmit }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
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

