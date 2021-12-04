import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import rentalService from "../../services/rentalService";
import "./RentalList.css"
 
function RentalList() {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  useEffect(async () => {
    let rentals = await rentalService.getUserRentals();
    setCurrentUser(rentals);
  }, [])

  const handleDeleteRental = async (event, id) => { 
    const result = await rentalService.deleteRental(id);
  } 

  return (
    <div className="body">
      <div className="list-container">
        {currentUser?.length > 0 && (
          <ul className="card-container">
            {currentUser?.map((rental, idx) => (
              <li className="rental" key={idx}>
                <div>
                  <div className="card-top">
                    <button className="btn btn-danger delete-button" onClick = {e => handleDeleteRental(e, rental._id)}>X</button>
                    <h4>Rental {idx+1}</h4>
                  </div>
                  <div className="rental-dates">
                    <p><h5>Rental Date: {rental.dateRented.split('T')[0]}</h5></p>
                    <p><h5>Return Date: {rental.returnDate.split('T')[0]}</h5></p>
                  </div>
                </div>
                <div>
                  <ul className="equipment-list">
                      {rental?.equipment?.map((set, idx) => (
                          <li key={idx} className="equipment-set">
                              <div><h5>Equipment Set {idx+1}</h5></div>
                              <div>Skis: {set.skis}</div>
                              <div>Poles: {set.poles}</div>
                              <div>Helmet: {set.helmet}</div>
                              <div>Boots: {set.boots}</div>
                          </li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
        {currentUser?.length === 0 && (
          <div><h1>You haven't rented any equipment</h1></div>
        )}
      </div>
    </div>
  )
}
 
export default RentalList