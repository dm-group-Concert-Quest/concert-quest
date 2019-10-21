import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Auth extends Component {
    render() {
        return (
            <div id='login-container'>
                <input className='login-input' name='username' placeholder='username'/>
                <input className='login-input' name='password' placeholder='password'/>
                <button className='login-btn'>Log In</button>
                <div>
                    <h4>Don't have an account?</h4>
                    <Link id='login-register' to='/register'><h4>Sign up here!</h4></Link>
                </div>
            </div>
        )
    }
}
