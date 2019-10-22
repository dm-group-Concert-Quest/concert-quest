import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSession, logoutUser } from "../redux/reducers/userReducer";
import "../styles/_Nav.scss";
import Login from './Login';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            boxStatus: 'none'
        }
    }

    componentDidMount() {
        this.props.getSession();
    };

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    };

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    };

    handleClick = e => {
        if (this.node.contains(e.target)) {
            this.setState({boxStatus: 'open'})
        } else {
            this.setState({boxStatus: 'closed'})
        };
    };

    toggle = () => {
        if (this.state.boxStatus === 'closed' || this.state.boxStatus === 'none') {
            this.setState({ boxStatus: 'open' });
        } else {
            this.setState({ boxStatus: 'closed' });
        };
    };

    handleLogout = () => {
        this.props.logoutUser();
        this.props.history.push("/");
    };

    render() {
        const { user_id } = this.props;
        return (
            <>
                <nav className="Nav-nav-container">
                    {!user_id ?
                        <>
                            <div className="Nav-nav-title-logout">
                                <Link to="/" className="Nav-CQ"><h1>CQ</h1></Link>
                            </div>
                            <ul className="Nav-nav-links-logout">
                                <h1 className="Nav-link" onClick={this.toggle}>Login</h1>
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
                                <Link to="/home" className="Nav-link"><h2>Home</h2></Link>
                                <Link to="profile" className="Nav-link"><h2>Profile</h2></Link>
                                <Link to="/about" className="Nav-link"><h2>About</h2></Link>
                                <Link to="settings" className="Nav-link"><h2>Settings</h2></Link>
                                <button className="Nav-nav-logout" onClick={this.handleLogout}>Logout</button>
                            </div>
                        </>
                    }
                </nav>
                <div ref={node => this.node = node}>
                    <Login
                        boxStatus={this.state.boxStatus}
                        toggle={this.toggle} />
                </div>
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