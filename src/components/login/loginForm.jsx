import React from 'react'
import './loginForm.css'
import { Row, Col } from 'react-materialize'

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
			const username = ev.target.value
			const password = ev.target.value

			this.props.onSubmit({ username, password })
			this.setState({
					username: '',
					password: ''
			})
	}
	
	render() {
		return (
			<Row className="loginForm">
				<Col className="s6 push-s3">
					<form onSubmit={this.handleSubmit} >
						<label htmlFor="icon_prefix">
						<i className="material-icons prefix"></i>
						<input id="icon_prefix" onChange={this.handleChange} autoComplete="off" placeholder="Username" type="text" name="username" value={this.state.value} />
						</label>
						<label htmlFor="icon_lock">
						<i className="material-icons prefix"></i>
						<input id="icon_lock" onChange={this.handleChange} autoComplete="off" placeholder="Password" type="password" name="password" value={this.state.value} />
						</label>
						<button className="goButton">GO</button>
					</form>
				</Col>
			</Row>
		)
	}
}