import React, { Component } from "react";
import axios from "axios";
import { getTrackedArtist } from "../redux/reducers/postReducer";
import { connect } from 'react-redux';
require("dotenv").config();

class TrackedEvents extends Component {
    constructor() {
        super();
        this.state = {
            myEvents: [],
            myArtists: []
        }
    }

    componentDidMount() {
        this.props.getTrackedArtist();
        const { REACT_APP_BAND_APP_KEY } = process.env;

        this.props.tracked_artist.map(artist => {
            axios
                .get(
                    `https://rest.bandsintown.com/artists/${artist.band_name}/events?app_id=${REACT_APP_BAND_APP_KEY}`
                )
                .then(response => {
                    let result = response.data.filter(event => event.venue.city === this.props.city);
                    let newArr = [...this.state.myEvents, result]
                    this.setState({
                        myEvents: newArr
                    })
                })
        })

        this.props.tracked_artist.map(artist => {
            axios
                .get(
                    `https://rest.bandsintown.com/artists/${artist.band_name}?app_id=${REACT_APP_BAND_APP_KEY}`
                )
                .then(response => {
                    let artistArray = [...this.state.myArtists]
                    artistArray.push(response.data);
                    this.setState({ myArtists: artistArray });
                });
        })
    }

    render() {
        const { myArtists } = this.state;
        const myEventsMapped = this.state.myEvents.map((eventArr, i) => {
            return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    {eventArr[0] ?
                        eventArr.map((event, i) => {
                            const date = new Date(event.datetime);
                            var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
                            let currentImage = '';
                            for (let i = 0; i < myArtists.length; i++) {
                                if (myArtists[i].name === event.lineup[0]) {
                                    currentImage = myArtists[i].image_url;
                                }
                            }
                            return (
                                <div className="trackedEventsDiv" key={i}>
                                    <div className="picAndLineupDiv">
                                        <img className="trackedEventsArtistPic" alt="artist-img" src={currentImage} />
                                        <h1 className="trackedEventsLineup">{event.lineup.length > 2 ? <p className="event-lineup">{`${event.lineup[0]}, ${event.lineup[1]}...`}</p> : <p className="event-lineup">{event.lineup.join(', ')}</p>}</h1>
                                    </div>
                                    <div className="venueAndDateDiv">
                                        <h1 className="trackedEventsVenueName">{event.venue.name}</h1>
                                        <h1 className="trackedEventsCity">{`${event.venue.city} ${event.venue.region}, ${event.venue.country}`}</h1>
                                        <h1 className="trackedEventsDate">{date.toLocaleDateString("en-US", options)}</h1>
                                    </div>
                                    <div>
                                        <a className="trackedEventsButton" target="_blank" rel="noopener noreferrer" href={event.offers[0].url}><button className="event-ticket-button">Tickets</button></a>
                                    </div>
                                </div>

                            )
                        })
                        :
                        null
                    }
                </div>
            )
        })
        return (
            <div className="myEventsMapped">
                {myEventsMapped}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        tracked_artist: reduxState.postReducer.tracked_artist,
        city: reduxState.userReducer.city
    }
}

export default connect(mapStateToProps, { getTrackedArtist })(TrackedEvents);