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
import RentalList from "../RentalList/RentalList";
import NewRental from "../../components/NewRental/NewRental";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

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
          <ProtectedRoute exact path='/rentals'>
            <RentalList currentUser = {this.state.user}/>
          </ProtectedRoute>
          <ProtectedRoute path='/rentals/new'>
            <NewRental currentUser = {this.state.user}/>
          </ProtectedRoute>
          {/* Could Not get single line protected routes to work when passing props into the component
          <ProtectedRoute exact path='/rentals' component={<RentalList currentUser = {this.state.user}/>}/>
          <ProtectedRoute path='/rentals/new' component={<NewRental currentUser={this.state.user}/>}/> */}
          <Route path='/signup' render={
            ({history}) =>
            <SignupPage history={history}/>
          }>
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
