import React, { Component } from 'react'
import gps_icon from './images/gps-icon.png';
import band_icon from './images/band-icon.png';
import ticket_icon from './images/ticket-icon.png';
import Events from './Events';
import {Redirect} from 'react-router-dom';

export default class Home extends Component {
    render(props) {
        if (this.props.userId) {
            return <Redirect to='/Home'/>
        }
        return (
            <div id='gl-bg'>
                <div id='guest-landing'>
                    <section className='gl-welcome'>
                        <h1 id='gl-title'>Concert Quest</h1>
                        <div className='gl-banner'>
                        <figure>
                            <img src={gps_icon} alt='gps'/>
                            <figcaption>Find shows near you</figcaption>
                        </figure>
                        <figure>
                            <img src={band_icon} alt='band'/>
                            <figcaption>Track your favorite artists</figcaption>
                        </figure>
                        <figure>
                            <img src={ticket_icon} alt='ticket'/>
                                <figcaption>Get tickets</figcaption>
                        </figure>
                    </div>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </section>
                    <Events/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.userId
    }
};