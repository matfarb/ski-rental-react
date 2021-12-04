import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { createRental } from '../../services/rentalService'
import style from './NewRental.module.css'

function NewRental(props){

    const [dateRented, setDateRented] = useState('')
    const [returnDate, setReturnDate] = useState('')
    const [equipment, setEquipment] = useState([])
    const history = useHistory()

    const handleDateRentedChange = (event) => {
        
        setDateRented(event.target.value)
    }

    const handleReturnDateChange = (event) => {

        setReturnDate(event.target.value)
    }

    const handleAddEquipmentSet = (event) => {
        event.preventDefault()
        setEquipment([
            ...equipment,
            { skis: '', poles: '', helmet: '', boots: '' }
            ])
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            dateRented,
            returnDate,
            equipment,
            isReturned: false
        }
        const result = await createRental(formData)
        history.push('/rentals')
    }
    
    return(
        <div className={style.rental}>
         <h3>Add New Rental</h3>   
        <form>
            <div className="form-group">
                <label>Date Rented</label>
                <input value={dateRented} type="date" className="form-control" onChange={handleDateRentedChange}/>
            </div>
            <div className="form-group">
                <label>Return Date</label>
                <input value={returnDate} type="date" className="form-control" onChange={handleReturnDateChange}/>
            </div>
            <div>
                {equipment.map((set, idx) => (
                    <div key={idx} className="form-group">
                        <label>Equipment Set {idx+1}</label>
                        <div className="form-group">
                            <label>Skis</label>
                            <select value={set.skis} onChange={(evt) => {
                                setEquipment([
                                    ...equipment.slice(0, idx),
                                    {
                                        ...equipment[idx],
                                        skis: evt.target.value
                                    },
                                    ...equipment.slice(idx+1)  
                                ])
                            }} name="skis">
                                <option value=''>-</option>
                                <option value="Salomon">Salomon</option>
                                <option value="K2">K2</option>
                                <option value="Volkl">Volkl</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Poles</label>
                            <select value={set.poles} onChange={(evt) => {
                                setEquipment([
                                    ...equipment.slice(0, idx),
                                    {
                                        ...equipment[idx],
                                        poles: evt.target.value
                                    },
                                    ...equipment.slice(idx+1)  
                                ])
                            }} name="poles">
                                <option value=''>-</option>
                                <option value="Salomon">Salomon</option>
                                <option value="K2">K2</option>
                                <option value="Volkl">Volkl</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label >Helmet</label>
                            <select value={set.helmet} onChange={(evt) => {
                                setEquipment([
                                    ...equipment.slice(0, idx),
                                    {
                                        ...equipment[idx],
                                        helmet: evt.target.value
                                    },
                                    ...equipment.slice(idx+1)  
                                ])
                            }} name="helmet">
                                <option value=''>-</option>
                                <option value="Salomon">Salomon</option>
                                <option value="K2">K2</option>
                                <option value="Volkl">Volkl</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Boots</label>
                            <select value={set.boots} onChange={(evt) => {
                                setEquipment([
                                    ...equipment.slice(0, idx),
                                    {
                                        ...equipment[idx],
                                        boots: evt.target.value
                                    },
                                    ...equipment.slice(idx+1)  
                                ])
                            }} name="boots">
                                <option value=''>-</option>
                                <option value="Salomon">Salomon</option>
                                <option value="K2">K2</option>
                                <option value="Volkl">Volkl</option>
                            </select>
                        </div> 
                    </div>        
                ))}
                <button className="btn btn-primary" onClick={handleAddEquipmentSet}>Add Equipment</button>
            </div>
            <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default NewRental