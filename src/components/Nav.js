import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSession, logoutUser } from "../redux/reducers/userReducer";
import "../styles/_Nav.scss";
import Login from './Login';
import hbgr from './images/hamburger-icon.jpg';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            boxStatus: 'none'
        }
    }

    componentDidMount() {
        this.props.getSession();
    }

    toggle = () => {
        if (this.state.boxStatus === 'closed' || this.state.boxStatus === 'none') {
            this.setState({ boxStatus: 'open' });
        } else {
            this.setState({ boxStatus: 'closed' });
        }
    }

    handleLogout = () => {
        this.props.logoutUser();
        this.props.history.push("/");
    };

    render() {
        const { user_id } = this.props;
        return (
            <>
                <nav className="Nav-nav-container">
                    <div className="Nav-nav-title-logout">
                        <Link to="/" className="Nav-CQ"><h1>CQ</h1></Link>
                    </div>
                    {!user_id ?
                        <>
                            
                            <ul className="Nav-nav-links-logout">
                                <h1 className="Nav-link" onClick={this.toggle}>Login</h1>
                                <Link to="/about" className="Nav-link"><h1>About</h1></Link>
                            </ul>
                        </>
                        :
                        <>
                            <div className="Nav-nav-links-login">
                                <Link to="/home" className="Nav-link"><h2>Home</h2></Link>
                                <Link to="profile" className="Nav-link"><h2>Profile</h2></Link>
                                <Link to="/about" className="Nav-link"><h2>About</h2></Link>
                                <Link to="settings" className="Nav-link"><h2>Settings</h2></Link>
                                <button onClick={this.handleLogout}>LOGOUT</button>
                            </div>
                        </>
                    }
                <img src={hbgr} className='hidden-by-default nav-menu-btn'></img>
                </nav>
                <Login
                    boxStatus={this.state.boxStatus}
                    toggle={this.toggle} />
            </>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default withRouter(connect(mapStateToProps, { getSession, logoutUser })(Nav));