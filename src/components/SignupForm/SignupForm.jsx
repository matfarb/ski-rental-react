import React, { Component } from 'react'

import userService from '../../services/userService'


class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            password: '',
            confirmPassword: ''
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
            await userService.signup(this.state)
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <input type="text" placeholder="First Name" className="form-control" name="firstName" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder=" Last Name" className="form-control" name="lastName" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Pasword" name="confirmPassword" className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-default">Sign up</button>
                </div>
            </form>
        )
    }
}
export default SignupForm