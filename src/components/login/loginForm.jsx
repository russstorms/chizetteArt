import React from 'react'
import './loginForm.css'
// import { Row, Col } from 'react-materialize'

const handleChange = (e) => {
	this.setState({ value: e.target.value })
}

const handleSubmit = ({ handleChange }) => {
	alert('a name was submitted: ' + this.state.value)
	e.preventDefault()
}

render() {
	
}
export default LoginForm

// const onLogin = () => {
// 	const onSubmit = (e) => {
// 		e.preventDefault()
// 		console.log(e.target.value)
// 		// checkLogin({
// 		// 	username: e.target.subject.value,
// 		// 	pass: e.target.
// 		// })
// 	}
// }
// const onSubmit = (e) => {
// 	e.preventDefault()
// 	console.log(e.target)
// }

// return (
// 	<Row className="loginForm">
// 		<Col className="s6 push-s3">
// 			<form>
// 				<label htmlFor="icon_prefix">
// 				<i className="material-icons prefix"></i>
// 				<input id="icon_prefix" autoComplete="off" placeholder="Username" type="text" name="username" value={this.state.value} />
// 				</label>
// 				<label htmlFor="icon_lock">
// 				<i className="material-icons prefix"></i>
// 				<input id="icon_lock" autoComplete="off" placeholder="Password" type="password" name="password" value={this.state.value} />
// 				</label>
// 				<button className="goButton">GO</button>
// 			</form>
// 		</Col>
// 	</Row>
// )
