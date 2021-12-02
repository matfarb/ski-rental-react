import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react'

import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import userService from "../../services/userService";
import SignupPage from '../../pages/SignupPage/SignupPage'
import LoginPage from "../LoginPage/LoginPage";
import Rentals from "../Rentals/Rentals";

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar 
            currentUser = {this.state.user} 
            handleLogout = {this.handleLogout}
          />
        </div>
        <Switch>
          <Route path='/' exact>
            <h1>Welcome to the Ski Rental App</h1>
          </Route>
          <Route path='/rentals' >
            <Rentals currentUser = {this.state.user}/>
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login' render={
            ({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
          }></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
