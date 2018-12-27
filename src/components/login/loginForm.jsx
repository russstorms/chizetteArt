import React from 'react'
import './loginForm.css'
import { Button } from 'react-materialize'

export default class LoginForm extends React.Component {

	constructor(props){
		super(props)
			this.state = {
				...this.state,
				username: '',
				password: ''
			}
  }

	onUsernameChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
			const username = this.state.username
			const password = this.state.password

			this.props.loginClick({ username, password })
			this.setState({
					username: '',
					password: ''
			})
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="icon_prefix">
				<i className="material-icons prefix"></i>
				<input id="icon_prefix" onChange={this.onUsernameChange} name="username" autoComplete="off" placeholder="Username" type="text" name="username" />
				</label>
				<label htmlFor="icon_lock">
				<i className="material-icons prefix"></i>
				<input id="icon_lock" onChange={this.onUsernameChange} name="password" autoComplete="off" placeholder="Secret Code" type="password" name="password" />
				</label>
				<Button className="goButton">GO</Button>
			</form>
		)
	}
}