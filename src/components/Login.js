import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Auth extends Component {
    render(props) {
        return (
            <div className={`hidden-by-default ${this.props.boxStatus}`}>
                <label className='login-label'>Username<input className='login-input' name='username'/></label>
                <label className='login-label'>Password<input className='login-input' name='password'/></label>
                <button className='login-btn'>Log In</button>
                <div>
                    <h4>Don't have an account?</h4>
                    <Link id='login-register' to='/register'><h4>Sign up here!</h4></Link>
                </div>
            </div>
        )
    }
}
