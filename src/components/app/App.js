import React, { Component, AsyncStorage } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  // withRouter
} from 'react-router-dom'
import Header from '../header/header'
import ArtList from '../art-list/artList'
import Login from '../login/loginForm'

// import CreateArt from '../create-art/createart'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artList: [],
      filteredArt: [],
      singleView: false,
      token: '',
      actualToken: '',
      logIn: false
    }
  }

  loginClick = async (loginInfo) => {

    console.log('before get call', this.state)
    const response = await fetch(`http://localhost:3000/sign-in`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(loginInfo)
    })
    if (response.status === 200) {
      const auth = response.headers.map.auth.slice(8, response.headers.map.auth.length)
      const json = await response.json()
      this.setState({
        ...this.state,
        token: json.id,
        logIn: false,
        actualToken: auth
      })
      this.storeToken(json.id, auth)
    }
  }

  async getToken() {
    console.log('in getToken(), looking for TOKEN')
    const token = await AsyncStorage.getItem('token')
    const userId = await AsyncStorage.getItem('userId')
    console.log(`in getToken()`, token, userId)
    const parsed = JSON.parse(userId)
    this.setState({
      ...this.state,
      token: parsed || "",
      actualToken: token || ""
    })
  }

  async storeToken(userId=this.state.token, token=this.state.actualToken) {
    console.log(userId, token)
    await AsyncStorage.setItem('token', token)
    await AsyncStorage.setItem(userId, JSON.stringify(userId))
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
                <li><Link to="/admin">Login Page</Link></li>
              </ul>
              <Route path="/admin" />
              {/* <PrivateRoute path='/admin' component={Admin} /> */}
            </div>
          <Login loginClick={this.state.loginClick} token={this.state.token} />
        </main>
      </Router>
    )
  }
}
