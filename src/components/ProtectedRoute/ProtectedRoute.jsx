import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import userService from '../../services/userService'


function ProtectedRoute({component: Component, ...restOfProps}){
    const isAuthenticated = userService.getUser()

    return (
        <Route
            {...restOfProps}
                render={(props) => 
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />    
            }
        />
    )
}

export default ProtectedRoute