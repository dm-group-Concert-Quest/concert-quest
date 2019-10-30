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
            boxStatus: 'none',
            menuStatus: 'none'
        };
    };

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
        if ((!this.node.contains(e.target)) && (this.state.boxStatus === 'open')) {
            this.setState({ boxStatus: 'closed' })
        };
    };

    closeOnButtonClick = () => {
        this.setState({ boxStatus: 'none' })
    };

    toggle = () => {
        if (this.state.boxStatus === 'closed' || 'none') {
            this.setState({ boxStatus: 'open' });
        } else if (this.state.boxStatus === 'open') {
            this.setState({ boxStatus: 'closed' });
        };
    };

    toggleMenu = () => {
        if (this.state.menuStatus === 'hide-menu' || this.state.menuStatus === 'none') {
            this.setState({ menuStatus: 'show-menu' });
        } else {
            this.setState({ menuStatus: 'hide-menu' });
        };
    };

    handleLogout = () => {
        this.props.logoutUser();
        this.toggleMenu();
        this.props.history.push("/");
    };

    render() {
        const { user_id } = this.props;
        return (
            <>
                <nav className="Nav-nav-container">
                    <Link to="/" className="Nav-CQ"><h1>CQ</h1></Link>
                    {!user_id ?
                        <>
                            <ul className="Nav-nav-links-logout hidden-by-default">
                                <h1 className="Nav-link" onClick={this.toggle}>Login</h1>
                                <Link to="/about" className="Nav-link"><h2>About</h2></Link>
                            </ul>
                        </>
                        :
                        <>
                            <div className="Nav-nav-links-login">
                                <Link to="/home" className="Nav-link"><h2>Home</h2></Link>
                                <Link to="/profile" className="Nav-link"><h2>My Shows</h2></Link>
                                <Link to="/about" className="Nav-link"><h2>About</h2></Link>
                                <Link to="settings" className="Nav-link"><h2>Settings</h2></Link>
                                <h2 className="Nav-link" onClick={this.handleLogout}>Logout</h2>
                            </div>
                            <img src={hbgr} alt="hbgr" className='hidden-by-default nav-menu-btn' onClick={this.toggleMenu}></img>
                        </>
                    }
                </nav>
                {!user_id ?
                    <>
                    </>
                    :
                    <menu className={`hidden-by-default ${this.state.menuStatus}`}>
                        <Link to="/home" className="nav-menu-item" onClick={this.toggleMenu}><h2>Home</h2></Link>
                        <Link to="/profile" className="nav-menu-item" onClick={this.toggleMenu}><h2>Profile</h2></Link>
                        <Link to="/about" className="nav-menu-item" onClick={this.toggleMenu}><h2>About</h2></Link>
                        <Link to="settings" className="nav-menu-item" onClick={this.toggleMenu}><h2>Settings</h2></Link>
                        <h2 onClick={this.handleLogout} className="nav-menu-item">Logout</h2>
                    </menu>
                }
                <div ref={node => this.node = node}>
                    <Login
                        boxStatus={this.state.boxStatus}
                        toggle={this.toggle}
                        closeOnButtonClick={this.closeOnButtonClick} />
                </div>
            </>
        )
    };
};

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    };
};

export default withRouter(connect(mapStateToProps, { getSession, logoutUser })(Nav));