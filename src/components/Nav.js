import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { getSession, logoutUser } from "../redux/reducers/userReducer";
import "../styles/_Nav.scss";

class Nav extends Component {

    // componentDidMount() {
    //     this.props.getSession();
    // }

    render() {
        const { userId } = this.props;
        return (
            <nav className="Nav-nav-container">
                {!userId ?
                    <>
                        <div className="Nav-nav-title-logout">
                            <h1>Concert Quest</h1>
                        </div>
                        <div className="Nav-nav-links-logout">
                            <h2>Register</h2>
                            <h2>About</h2>
                        </div>
                    </>
                    :
                    <>
                        <div className="Nav-nav-container">
                            <div className="Nav-nav-title-login">
                                <h1>Concert Quest</h1>
                            </div>
                        </div>
                        <div className="Nav-nav-links-login">
                            <h2>Home</h2>
                            <h2>Profile</h2>
                            <h2>About</h2>
                            <h2>Settings</h2>
                            <button>LOGOUT</button>
                        </div>
                    </>
                }
            </nav>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
}

export default withRouter(connect(mapStateToProps, { getSession, logoutUser })(Nav));