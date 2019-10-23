import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
require("dotenv").config();

class EventList extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            artist: {}
        };
    }

    componentDidMount() {
        const { REACT_APP_BAND_APP_KEY } = process.env;
        axios
            .get(
                `https://rest.bandsintown.com/artists/post%20malone/events?app_id=${REACT_APP_BAND_APP_KEY}`
            )
            .then(response => {
                this.setState({ events: response.data });
            });
        axios
            .get(
                `https://rest.bandsintown.com/artists/post%20malone?app_id=${REACT_APP_BAND_APP_KEY}`
            )
            .then(response => {
                this.setState({ artist: response.data });
            });
    }

    render() {
        const { artist } = this.state;

        const eventsMapped = this.state.events.map((event, i) => {
            return (
                <div key={i} className='event-container'>
                    <img className='event-image' src={artist.image_url} alt="artist-pic" />
                    <h4>{event.venue.name}</h4>
                    <h6>{event.venue.city}</h6>
                    {!this.props.user_id ?
                        null
                        :
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href={event.offers[0].url}><button>Tickets!!!</button></a>
                        </div>
                    }
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

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
};

export default connect(mapStateToProps, {})(EventList);