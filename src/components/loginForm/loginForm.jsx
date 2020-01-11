import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core"
import './styles/loginForm.css'

export default function LoginForm({ loginSubmit }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

  return (
    <div className="LoginForm">
			<form 
				onSubmit={e => {
					e.preventDefault()
					loginSubmit({username, password})
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
					variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
          label="Secret Code"
					fullWidth
					required
        />
				<Button
					className="goButton"
					type="submit">
						GO!
				</Button>
      </form>
    </div>
  )
}

// import React from 'react'
// import useInputState from "./hooks/useInputState"
// import TextField from "@material-ui/core/TextField"
// import './styles/loginForm.css'

// export default function LoginForm() {
// 	const [value, handleChange, reset] = useInputState("")

	// constructor(props){
	// 	super(props)
	// 		this.state = {
	// 			...this.state,
	// 			username: '',
	// 			password: ''
	// 		}
	// }

	// const onUsernameChange = (e) => {
	// 	this.setState({
	// 		...this.state,
	// 		[e.target.name]: e.target.value
	// 	})
	// }

	// const onSubmit = (e) => {
	// 	e.preventDefault()
	// 		const username = this.state.username
	// 		const password = this.state.password

	// 		this.props.loginClick({ username, password })
	// 		this.setState({
	// 				username: '',
	// 				password: ''
	// 		})
	// }
	
// 	return (
// 		<form className="loginForm" onSubmit={onSubmit}>
// 			<label htmlFor="icon_prefix">
// 			<i className="material-icons prefix"></i>
// 			<i className="fas fa-user loginIcons"></i><input id="icon_prefix" className="inputs" onChange={handleChange} name="username" autoComplete="off" placeholder="Username" type="text" />
// 			</label>
// 			<label htmlFor="icon_lock">
// 			<i className="material-icons prefix"></i>
// 			<i className="fas fa-user-secret loginIcons"></i><input id="icon_lock" className="inputs" onChange={handleChange} name="password" autoComplete="off" placeholder="Secret Code" type="password" />
// 			</label>
// 			<button className="goButton">GO</button>
// 		</form>
// 	)
// }