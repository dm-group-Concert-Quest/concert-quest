import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { getSession, logoutUser } from "../redux/reducers/userReducer";
import "../styles/_Nav.scss";
import Login from './Login';

class Nav extends Component {

    // componentDidMount() {
    //     this.props.getSession();
    // }

    render() {
        const { userId } = this.props;
        return (
            <>
            <nav className="Nav-nav-container">
                {userId ?
                    <>
                        <div className="Nav-nav-title-logout">
                            <Link to="/" className="Nav-CQ"><h1>CQ</h1></Link>
                        </div>
                        <ul className="Nav-nav-links-logout">
                            <h1 className="Nav-link">Login</h1>
                            
                            <Link to="/about" className="Nav-link"><h1>About</h1></Link>
                        </ul>
                    </>
                    :
                    <>
                        <div className="Nav-nav-container">
                            <div className="Nav-nav-title-login">
                            <Link to="/" className="Nav-CQ"><h1>CQ</h1></Link>
                            </div>
                        </div>
                        <div className="Nav-nav-links-login">
                            <Link to="/user" className="Nav-link"><h2>Home</h2></Link>
                            <Link to="profile" className="Nav-link"><h2>Profile</h2></Link>
                            <Link to="/about" className="Nav-link"><h2>About</h2></Link>
                            <Link to="settings" className="Nav-link"><h2>Settings</h2></Link>
                            <button>LOGOUT</button>
                        </div>
                    </>
                }
            </nav>
            <Login/>
            </>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
}

export default withRouter(connect(mapStateToProps, { getSession, logoutUser })(Nav));