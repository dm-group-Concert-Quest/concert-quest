import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSession, updateUsername, updatePassword, updateFirstName, updateCity, updateState, updateEmail, deleteUser } from "../redux/reducers/userReducer";

import "../styles/_Settings.scss";

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            firstName: "",
            city: "",
            state: "",
            email: "",
            editStatus: false
        };
    };

    componentDidMount() {
        console.log(this.props.firstName)
        this.props.getSession();
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleEditStatus = () => {
        this.setState({ editStatus: true })
    };

    handleDeleteUser = () => {
        const {firstName} = this.props;

        const result = window.confirm(`${firstName}: Your account will be deleted if you click OK!`);
        if (result) {
            this.props.deleteUser();
            this.props.history.push("/");
        };
    };

    handleCancelEdit = () => {
        this.setState({editStatus: false})
    };

    handleEditUpdate = () => {
        const { username, password, firstName, city, state, email } = this.state;

        if (username === "") {
            this.setState({ username: this.props.username })
        } else {
            this.props.updateUsername({ username })
        };

        if (password === "") {
            this.setState({ password: this.props.password })
        } else {
            this.props.updatePassword({ password });
        };

        if (firstName === "") {
            this.setState({ password: this.props.firstName })
        } else {
            this.props.updateFirstName({ firstName });
        };

        if (city === "") {
            this.setState({ phoneNumber: this.props.city })
        } else {
            this.props.updateCity({ city });
        };

        if (state === "") {
            this.setState({ location: this.props.state })
        } else {
            this.props.updateState({ state });
        };

        if (email === "") {
            this.setState({ email: this.props.email })
        } else {
            this.props.updateEmail({ email });
        };
        this.setState({editStatus: false})
    };

    render() {
        const { username, password, firstName, city, state, email } = this.props;
        return (
            <main className="Settings-main-container">
                <div className="Settings-settings-title">
                    <h1>Settings</h1>
                </div>
                {this.state.editStatus ?
                    <>
                        <div className="Settings-input-fields">
                            <div className="Settings-input-box">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    name="username" 
                                    defaultValue={username} 
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password" 
                                    defaultValue={password}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={firstName}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label>City:</label>
                                <input
                                    type="text"
                                    name="city"
                                    defaultValue={city}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label>State:</label>
                                <input
                                    type="text"
                                    name="state"
                                    defaultValue={state}
                                    pattern="[A-Z]{2}"
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <button onClick={this.handleEditUpdate}>Update</button>
                                <button onClick={this.handleCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="Settings-input-fields">
                            <div className="Settings-input-box">
                                <h1>Username:</h1>
                                <h3>{username}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1>Password:</h1>
                                <h3>{password}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1>First Name:</h1>
                                <h3>{firstName}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1>Email:</h1>
                                <h3>{email}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1>City:</h1>
                                <h3>{city}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1>State:</h1>
                                <h3>{state}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <button onClick={this.handleEditStatus}>Edit</button>
                                <button onClick={this.handleDeleteUser}>Delete</button>
                            </div>
                        </div>
                    </>
                }
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.userReducer.username,
        password: reduxState.userReducer.password,
        firstName: reduxState.userReducer.firstName,
        city: reduxState.userReducer.city,
        state: reduxState.userReducer.state,
        email: reduxState.userReducer.email
    };
};

export default connect(mapStateToProps, 
    { 
        getSession, 
        updateUsername, 
        updatePassword, 
        updateFirstName, 
        updateCity, 
        updateState, 
        updateEmail, 
        deleteUser 
    })(Settings);