import tokenService from './tokenService'
const BASE_URL = '/api/rentals'

export async function createRental(data){
    console.log(data);
    return fetch('http://localhost:4000/api/rentals', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export async function deleteRental(id){
    return fetch(`http://localhost:4000/api/rentals/delete/${id}`, {
        method: 'Delete',
    }).then(res => res.json())
}

export async function getUserRentals(){
    
    return fetch('http://localhost:4000/api/rentals', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
        
    }).then(res => res.json())
}



export default {
    createRental,
    deleteRental,
    getUserRentals
}