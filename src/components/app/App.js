import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Header from '../header/header'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'

// import CreateArt from '../create-art/createart'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: []
    }
  }

  componentDidMount = async () => {
    await this.getArtList()
  }

  getArtList = async () => {
    //// GET ART \\\\
    const artListJson = await fetch(`http://localhost:3000/chizetteart`)
    let artList = await artListJson.json()
    this.setState({ artList })
  }

  render() {
    return (
      <Router>
        <main className="App container">
          <Header />
          <ArtList artList={this.state.artList} />
            <div>
              <ul>
                <li><Link to="/login">Login Page</Link></li>
              </ul>
              <Route path="/login" />
              {/* <PrivateRoute path='/admin' component={Admin} /> */}
            </div>
          {/* <Login /> */}
        </main>
      </Router>
    )
  }
}
