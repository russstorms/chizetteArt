import React from 'react'
import './loginForm.css'

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
			<form className="loginForm" onSubmit={this.onSubmit}>
				<label htmlFor="icon_prefix">
				<i className="material-icons prefix"></i>
				<i className="fas fa-user loginIcons"></i><input id="icon_prefix" className="inputs" onChange={this.onUsernameChange} name="username" autoComplete="off" placeholder="Username" type="text" />
				</label>
				<label htmlFor="icon_lock">
				<i className="material-icons prefix"></i>
				<i class="fas fa-user-secret loginIcons"></i><input id="icon_lock" className="inputs" onChange={this.onUsernameChange} name="password" autoComplete="off" placeholder="Secret Code" type="password" />
				</label>
				<button className="goButton">GO</button>
			</form>
		)
	}
}