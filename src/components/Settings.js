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
            first_name: "",
            city: "",
            state: "",
            email: "",
            menuOpenStatus:"side-menu",
            editStatus: false
        };
    };

    componentDidMount() {
        this.props.getSession();
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleEditStatus = () => {
        this.setState({ editStatus: true })
    };

    handleDeleteUser = () => {
        const { first_name } = this.props;

        const result = window.confirm(`${first_name}: Your account will be deleted if you click OK!`);
        if (result) {
            this.props.deleteUser();
            this.props.history.push("/");
        };
    };
    toggle = () => {
        
        if (this.state.menuOpenStatus === "side-menu-close" || this.state.menuOpenStatus === "side-menu"){
            this.setState({menuOpenStatus: "side-menu-open"});
        } else if (this.state.menuOpenStatus === "side-menu-open"){
            this.setState({menuOpenStatus: "side-menu-close"})
        }
    }

    handleCancelEdit = () => {
        this.setState({ editStatus: false })
    };

    handleEditUpdate = () => {
        const { username, password, first_name, city, state, email } = this.state;

        const str = city;
        let formattedCity = str.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
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

        if (first_name === "") {
            this.setState({ first_name: this.props.first_name })
        } else {
            this.props.updateFirstName({ first_name });
        };

        if (city === "") {
            this.setState({ city: this.props.city })
        } else {
            this.props.updateCity({ city: formattedCity });
        };

        if (state === "") {
            this.setState({ state: this.props.state })
        } else {
            this.props.updateState({ state });
        };

        if (email === "") {
            this.setState({ email: this.props.email })
        } else {
            this.props.updateEmail({ email });
        };
        this.setState({ editStatus: false })
    };

    render() {
        const { username, password, first_name, city, state, email } = this.props;
        return (
            <main className="Settings-main-container">
                <div className="Settings-settings-title">
                    <h1 className="main-settings-title">Settings</h1>
                </div>
                {this.state.editStatus ?
                    <>
                        <div className="Settings-input-fields">
                            <div className="Settings-input-box">
                                <label className="setting-titles">Username:</label>
                                <input
                                    className='settings-text-input-fields'
                                    type="text"
                                    name="username"
                                    defaultValue={username}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label className="setting-titles">Password:</label>
                                <input
                                    className='settings-text-input-fields'
                                    type="password"
                                    name="password"
                                    defaultValue={password}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label className="setting-titles">First Name:</label>
                                <input
                                    className='settings-text-input-fields'
                                    type="text"
                                    name="first_name"
                                    defaultValue={first_name}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label className="setting-titles">Email:</label>
                                <input
                                    className='settings-text-input-fields'
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <label className="setting-titles">City:</label>
                                <input
                                    className='settings-text-input-fields'
                                    type="text"
                                    name="city"
                                    defaultValue={city}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="Settings-input-box">
                                <button className="settings-editButton" onClick={this.handleEditUpdate}>Update</button>
                                <button className="settings-deleteButton" onClick={this.handleCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="Settings-input-fields">
                            <div className="Settings-input-box">
                                <h1 className="setting-titles">Username:</h1>
                                <h3 className="setting-credentials">{username}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1 className="setting-titles">Password:</h1>
                                <h3 className="setting-credentials">{`******`}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1 className="setting-titles">First Name:</h1>
                                <h3 className="setting-credentials">{first_name}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1 className="setting-titles">Email:</h1>
                                <h3 className="setting-credentials">{email}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <h1 className="setting-titles">City:</h1>
                                <h3 className="setting-credentials">{city}</h3>
                            </div>
                            <div className="Settings-input-box">
                                <button className="settings-editButton" onClick={this.handleEditStatus}>Edit</button>
                                <button className="settings-deleteButton" onClick={this.handleDeleteUser}>Delete</button>
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
        first_name: reduxState.userReducer.first_name,
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