import React, { Component } from 'react';
import "../styles/_Settings.scss";

export default class Settings extends Component {
    render() {
        return (
            <main className="Settings-main-container">
                <div className="Settings-settings-title">
                    <h1>Settings</h1>
                </div>
                <div className="Settings-input-fields">
                    <div className="Settings-input-box">
                        <label>Username:</label>
                        <input />
                    </div>
                    <div className="Settings-input-box">
                        <label>Password:</label>
                        <input />
                    </div>
                    <div className="Settings-input-box">
                        <label>Email:</label>
                        <input />
                    </div>
                    <div className="Settings-input-box">
                        <label>Phone Number:</label>
                        <input />
                    </div>
                    <div className="Settings-input-box">
                        <label>Your Location:</label>
                        <input />
                    </div>
                    <div className="Settings-input-box">
                        <button>Edit Settings</button>
                    </div>
                </div>
            </main>
        )
    }
}