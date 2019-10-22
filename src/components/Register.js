import React, { Component } from 'react'
import {registerUser} from '../redux/reducers/userReducer';
import {connect} from 'react-redux';

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            first_name: '',
            passwordAgain: '',
            email: '',
            city: '',
            myState: ''
        }
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, password, passwordAgain, first_name, email, city, myState } = this.state;

        if(password === passwordAgain) {
            this.props.registerUser({ username, password, first_name, email, city, myState });
            this.setState({ 
            username: '', 
            password: '', 
            passwordAgain: '',
            first_name: '',
            email: '',
            city: '',
            myState: '' })
        }
        
    }

    render() {
        return (
            <div id='reg-bg'>
                <form id='register-form'>
                    <h1 id='reg-title'>Create an account</h1>
                    <label>Username<input className='register-input' name='username' onChange={this.handleInput}/></label>
                    <label>Password<input className='register-input' name='password' onChange={this.handleInput}/></label>
                    <label>First name<input className='register-input' name='first_name' onChange={this.handleInput}/></label>
                    <label>Verify password<input className='register-input' name='passwordAgain' onChange={this.handleInput}/></label>
                    <label>Email address<input className='register-input' name='email' onChange={this.handleInput}/></label>
                    <div id='reg-location'>
                        <label>City<input className='register-input' name='city' onChange={this.handleInput}/></label>
                        <label>State<input className='register-input' name='myState' onChange={this.handleInput}/></label>
                    </div>
                    <button id='reg-btn' onClick={this.handleSubmit}>Sign up</button>
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

export default connect(mapStateToProps, {registerUser})(Register);