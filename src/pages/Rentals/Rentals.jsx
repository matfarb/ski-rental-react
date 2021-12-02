import React, { Component } from 'react';
import './Rentals.css'
import { Link } from "react-router-dom";
//import { getRentals } from "../../services/rentalService";

class Rentals extends Component{
    constructor(props){
        super(props)
    }

    async componentDidMount(){
        
    }

    render(){
        return (
            <div className='body'>
                <div className="list-container">
                    {
                    this.props.currentUser.rentals.length > 0 &&
                    <ul>
                        {this.props.currentUser.rentals.map((rental, idx) => 
                        <li key={idx}>
                            <Link to={ `/rentals/${rental.id}` }> 
                            <div>{rental.equipment.skis}</div> 
                            <div>{rental.equipment.poles}</div>
                            <div>{rental.equipment.boots}</div>
                            <div>{rental.equipment.helmet}</div>
                            </Link>
                        </li>)}
                    </ul>
                    }
                    {
                        this.props.currentUser.rentals.length === 0 &&
                        <div>You haven't rented any equipment</div>
                    }
                    
                </div>
                <div className='new-button'>
                    <button><Link to={'/rentals/new'}>Create a Rental</Link></button>
                </div>
            </div>
        )
    }
}

export default Rentals