import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom"
 
function Navbar(props) {
  return (
    <div className="nav">
      <div>
        <h1>Ski Rental App</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {props.currentUser && (
          <>
            <li>
              <NavLink to="/rentals" activeClassName="active">
                Rentals
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                activeClassName="active"
                onClick={props.handleLogout}
              >
                Logout
              </NavLink>
            </li>
            <li>
              <span className="user">
                Welcome {props.currentUser.firstName}
              </span>
            </li>
          </>
        )}
        {!props.currentUser && (
          <>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
 
export default Navbar