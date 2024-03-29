import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { loginUser, getSession } from '../redux/reducers/userReducer';
import { connect } from 'react-redux';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.getSession();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.boxStatus !== this.props.boxStatus && this.props.boxStatus === 'closed') {
            this.setState({ username: '', password: '' })
        };
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;

        this.props.loginUser({ username, password });
        this.setState({ username: '', password: '' })
        this.props.toggle();
    };

    render(props) {
        if (this.props.user_id) {
            return <Redirect to='/home' />
        }
        return (
            <div id='login-container'>
                <form className={`hidden-by-default ${this.props.boxStatus}`}>
                    <h1 id='login-header'>Login</h1>
                    <label className='login-label'>
                        Username
                        <input className='login-input'
                            name='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleInput} />
                    </label>
                    <label className='login-label'>
                        Password
                        <input className='login-input'
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleInput}
                        />
                    </label>
                    <button className='login-btn' onClick={this.handleSubmit}><Link to={this.props.user_id ? '/home' : '/'}>Log In</Link></button>
                    <div>
                        <h4>Don't have an account?</h4>
                        <h4>Sign up <Link id='login-register' to='/register' onClick={this.props.closeOnButtonClick}>here!</Link></h4>
                    </div>
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

export default connect(mapStateToProps, { loginUser, getSession })(Login);