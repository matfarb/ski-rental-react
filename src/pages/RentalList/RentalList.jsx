import React, { Component } from "react"
import "./RentalList.css"
import { Link } from "react-router-dom"
//import { getRentals } from "../../services/rentalService";
 
function RentalList({ currentUser }) {
  return (
    <div className="body">
      <div className="list-container">
        {currentUser.rentals.length > 0 && (
          <ul>
            {currentUser.rentals.map((rental, idx) => (
              <li key={idx}>
                <ul>
                    {rental.equipment.map((set, idx) => (
                        <li key={idx}>
                            <div>{set.skis}</div>
                            <div>{set.poles}</div>
                            <div>{set.helmet}</div>
                            <div>{set.boots}</div>
                        </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        {currentUser.rentals.length === 0 && (
          <div>You haven't rented any equipment</div>
        )}
      </div>
      <div className="new-button">
        <button>
          <Link to={"/rentals/new"}>Create a Rental</Link>
        </button>
      </div>
    </div>
  )
}
 
export default RentalList