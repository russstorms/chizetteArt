import React from 'react'
import './loginForm.css'
import { Row, Col } from 'react-materialize'

const Login = (props) => {
	return (
		<Row className="loginForm">
			<Col className="s6 push-s3">
				<h2></h2>
				<form>
					<label>
					  Email:
					  <input type="text" name="email" />
					</label>
					<label>
					  Password:
					  <input type="text" name="email" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</Col>
		</Row>
	)
}

export default Login