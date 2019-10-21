import React, { Component } from 'react';
import { connect } from "react-redux";

import "../styles/_Settings.scss";

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            firstName: "",
            email: "",
            city: "",
            state: "",
            editStatus: false
        }
    }

    componentDidMount() {
        this.props.getSession();
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleEditButton = () => {
        const { username, password, firstName, email, city, state } = this.state;

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

    };

    render() {
        const { username, password, email, phoneNumber, city, state } = this.props;
        return (
            <main className="Settings-main-container">
                <div className="Settings-settings-title">
                    <h1>Settings</h1>
                </div>
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
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="Settings-input-box">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            defaultValue={phoneNumber}
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
                    <div>
                        <label>State:</label>
                        <input 
                        type="text"
                        name="state"
                        defaultValue={state} 
                        pattern="[A-Z]{2}" 
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="Settings-input-box">
                        <button onClick={this.handleEditButton}>Edit Settings</button>
                        <button onClick={this.handleCancelEdit}>Cancel</button>
                    </div>
                </div>
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
        email: reduxState.email.email
    };
};

export default connect(mapStateToProps, { getSession, updateUsername, updatePassword, updateFirstName, updateCity, updateState, updateEmail })(Settings);