import tokenService from './tokenService'
const BASE_URL = '/api/users'

function signup(user){
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Email already taken')
    })
    .then( ({token}) => tokenService.setToken(token))
}

function login(credentials){
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) {return res.json()
        }else{
            throw new Error('Username or password incorrect!')
            //console.log(res.json())
        }
    })
    .then( ({token}) => tokenService.setToken(token))
}

function logout() {
    tokenService.removeToken();
}

function getUser() {
    return tokenService.getUserFromToken();
}

export default {
    signup,
    getUser,
    login,
    logout
}