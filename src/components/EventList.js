import React, { Component } from 'react';
import axios from "axios";

export default class Events extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            artist: {}
        };
    }

    componentDidMount() {
        axios
        .get(
        "https://rest.bandsintown.com/artists/post%20malone/events?app_id=91c0c88b6caf37f202bb9148bbdb6591&date=upcoming"
        )
        .then(response => {
        this.setState({ events: response.data });
        console.log(response.data);
        });
        axios
        .get(
        "https://rest.bandsintown.com/artists/post%20malone?app_id="
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
