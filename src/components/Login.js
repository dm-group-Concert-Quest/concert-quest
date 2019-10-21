import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Auth extends Component {
    render(props) {
        return (
            <div className={`hidden-by-default ${this.props.boxStatus}`}>
                <h1 id='login-header'>Login</h1>
                <label className='login-label'>Username<input className='login-input' name='username'/></label>
                <label className='login-label'>Password<input className='login-input' name='password' type='password'/></label>
                <button className='login-btn'>Log In</button>
                <div>
                    <h4>Don't have an account?</h4>
                    <h4>Sign up <Link id='login-register' to='/register'>here!</Link></h4>
                </div>
            </div>
        )
    }
}
