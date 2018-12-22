import React from 'react'
import './loginForm.css'
import { Button } from 'react-materialize'

export default class LoginForm extends React.Component {

	constructor(props){
		super(props)
			this.state = {
				username: '',
				password: ''
			}
  }

	handleChange = (e) => {
		e.preventDefault()
		this.setState({
			...this.state,
			username: e.target.value,
			password: e.target.value
		})
	}

	onSubmit = (ev) => {
			ev.preventDefault()
			console.log(`CLICKED THE BUTTON`)
			const username = ev.target.value
			const password = ev.target.value

			this.onSubmit({ username, password })
			this.setState({
					username: '',
					password: ''
			})
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit} >
				<label htmlFor="icon_prefix">
				<i className="material-icons prefix"></i>
				<input id="icon_prefix" onChange={this.handleChange} autoComplete="off" placeholder="Username" type="text" name="username" />
				</label>
				<label htmlFor="icon_lock">
				<i className="material-icons prefix"></i>
				<input id="icon_lock" onChange={this.handleChange} autoComplete="off" placeholder="Secret Code" type="password" name="password" />
				</label>
				<Button onSubmit={this.props.loginClick} className="goButton">GO</Button>
			</form>
		)
	}
}