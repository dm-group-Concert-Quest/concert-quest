import React, { Component } from 'react';
import gps_icon from './images/gps-icon.png';
import band_icon from './images/band-icon.png';
import ticket_icon from './images/ticket-icon.png';
import Search from './Search';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Home extends Component {
    render(props) {
        if (this.props.user_id) {
            return <Redirect to='/home' />
        };
        return (
            <div id='gl-bg'>
                <div id='guest-landing'>
                    <section className='gl-welcome'>
                        <h1 id='gl-title'>Concert Quest</h1>
                        <div className='gl-banner'>
                            <figure>
                                <img src={gps_icon} alt='gps' />
                                <figcaption>Find shows near you</figcaption>
                            </figure>
                            <figure>
                                <img src={band_icon} alt='band' />
                                <figcaption>Track your favorite artists</figcaption>
                            </figure>
                            <figure>
                                <img src={ticket_icon} alt='ticket' />
                                <figcaption>Get tickets</figcaption>
                            </figure>
                        </div>
                        <HashLink to='/#search'>
                            <div className="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </HashLink>
                    </section>
                    <section id='search'>
                        <Search />
                    </section>
                </div>
            </div>
        )
    };
};

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    };
};

export default connect(mapStateToProps)(Home);