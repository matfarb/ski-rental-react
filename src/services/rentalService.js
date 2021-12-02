export function createRental(data){
    console.log(data);
    return fetch('http://localhost:4000/api/rentals', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}