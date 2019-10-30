import React, { Component } from 'react';
import { registerUser } from '../redux/reducers/userReducer';
import { connect } from 'react-redux';

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
        };
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password, passwordAgain, first_name, email, city, myState } = this.state;
        const str = city;
        let formattedCity = str.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        if (password === passwordAgain) {
            this.props.registerUser({ username, password, first_name, email, city: formattedCity, myState });
            this.setState({
                username: '',
                password: '',
                passwordAgain: '',
                first_name: '',
                email: '',
                city: '',
                myState: ''
            })
        };
    };

    render() {
        return (
            <div id='reg-bg'>
                <form className='register-form'>
                    <h1 id='reg-title'>Create an account</h1>
                    <label>Username<input required className='register-input' name='username' onChange={this.handleInput} /></label>
                    <label>Password<input required className='register-input' name='password' onChange={this.handleInput} /></label>
                    <label>Verify password<input required className='register-input' name='passwordAgain' onChange={this.handleInput} /></label>
                    <label>First name<input required className='register-input' name='first_name' onChange={this.handleInput} /></label>
                    <label>Email address<input required className='register-input' name='email' onChange={this.handleInput} /></label>
                    <label>City<input required className='register-input' name='city' onChange={this.handleInput} /></label>
                    <button id='reg-btn' onClick={this.handleSubmit}>Sign up</button>
                </form>
            </div>
        )
    };
};

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    };
};

export default connect(mapStateToProps, { registerUser })(Register);