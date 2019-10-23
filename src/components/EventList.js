import React, { Component } from 'react';
import axios from "axios";
require("dotenv").config();

export default class Events extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            artist: {}
        };
    }

    componentDidMount() {
        const {REACT_APP_BAND_APP_KEY} = process.env
        axios
        .get(
        `https://rest.bandsintown.com/artists/post%20malone/events?app_id=${REACT_APP_BAND_APP_KEY}`
        )
        .then(response => {
        this.setState({ events: response.data });
        console.log(response.data);
        });
        axios
        .get(
        `https://rest.bandsintown.com/artists/post%20malone?app_id=${REACT_APP_BAND_APP_KEY}`
        )
        .then(response => {
        this.setState({ artist: response.data });
        // console.log(this.state.artist);
        });
    }

    render() {
        const { artist } = this.state;

        const eventsMapped = this.state.events.map((event, i) => {
            return (
                <div key={i} className='event-container'>
                    <img className='event-image' src={artist.image_url}/>
                    <h4>{event.venue.name}</h4>
                    <h6>{event.venue.city}</h6>
                    <a href={event.offers[0].url}>Tickets!!!</a>
                </div>
            );
        });
        return (
            <div>
                <div className='events-list'>
                    {eventsMapped}
                </div>
            </div>
        )
    }
}
