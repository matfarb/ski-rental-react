import React, { Component } from 'react'

import userService from '../../services/userService'
import './LoginPage.css'

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        /**send data to api by calling the signup function in your userService */
        try {
            await userService.login(this.state)
            this.props.handleSignupOrLogin()
            //redirect to home page
            this.props.history.push('/')
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return (
            <div className="LoginPage">
            <form onSubmit={this.handleSubmit}>
                <h3>Log In</h3>
                <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-default">Log in</button>
                </div>
            </form>
            </div>
        )
    }
}
export default LoginPage