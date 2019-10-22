import React, { Component } from 'react'
import {registerUser} from '../redux/reducers/userReducer';
import {connect} from 'react-redux';

export default class Register extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div id='reg-bg'>
                <form id='register-form'>
                    <h1 id='reg-title'>Create an account</h1>
                    <label>Username<input className='register-input' name='username'/></label>
                    <label>Password<input className='register-input' name='password'/></label>
                    <label>Verify password<input className='register-input' name='password-again'/></label>
                    <label>Email address<input className='register-input' name='email'/></label>
                    <div id='reg-location'>
                        <label>City<input className='register-input' name='city'/></label>
                        <label>State<input className='register-input' name='state'/></label>
                    </div>
                    <button id='reg-btn'>Sign up</button>
                </form>
            </div>
        )
    }Í
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect()