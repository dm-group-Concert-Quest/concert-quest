import React, { Component } from 'react'
import gps_icon from './images/gps-icon.png';
import band_icon from './images/band-icon.png';
import ticket_icon from './images/ticket-icon.png';
import Events from './Events';

export default class Home extends Component {
    render() {
        return (
            <div id='gl-bg'>
                <div id='guest-landing'>
                    <section className='gl-welcome'>
                        <h1 id='gl-title'>Concert Quest</h1>
                        <div className='gl-banner'>
                        <figure>
                            <img src={gps_icon}/>
                            <figcaption>Find shows near you</figcaption>
                        </figure>
                        <figure>
                            <img src={band_icon}/>
                            <figcaption>Track your favorite artists</figcaption>
                        </figure>
                        <figure>
                            <img src={ticket_icon}/>
                                <figcaption>Get tickets</figcaption>
                        </figure>
                    </div>
                    <div class="arrow">
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
