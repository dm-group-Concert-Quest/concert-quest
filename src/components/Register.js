import React, { Component } from 'react'

export default class Register extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div id='reg-bg'>
                <form id='register-form'>
                    <h1 id='reg-title'>Create an account</h1>
                    <label>Username<input classname='register-input' name='username'/></label>
                    <label>Password<input classname='register-input' name='password'/></label>
                    <label>Verify password<input classname='register-input' name='password-again'/></label>
                    <label>Email address<input classname='register-input' name='email'/></label>
                    <label>City<input classname='register-input' name='city'/></label>
                    <label>State<input classname='register-input' name='state'/></label>
                    <button id='reg-btn'>Sign up</button>
                </form>
            </div>
        )
    }Í
}