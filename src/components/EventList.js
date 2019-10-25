import React, { Component } from 'react';
import { connect } from 'react-redux';


class EventList extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            artist: {}
        };
    }

    render() {
        const { artist, events } = this.props;
        const eventsMapped = events.map((event, i) => {
            const str = event.offers[0].status;
            const status = str.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            const date = new Date(event.datetime);
            var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return (
                <div key={i} className='event-container'>
                    <div className="event-header">
                        {/* {console.log(artist)} */}
                        <img className='event-image' src={artist.image_url} alt="artist-pic" />
                        {event.lineup.length > 1 ? <p className="event-lineup">{`${event.lineup[0]}, ${event.lineup[1]}, ${event.lineup[2]}...`}</p> : <p className="event-lineup">{event.lineup}</p>}
                    </div>
                    <div className="event-venue-info">
                        <h4>{event.venue.name}</h4>
                        <h4>{`${event.venue.city}, ${event.venue.region}`}</h4>
                        <h4>{date.toLocaleDateString("en-US", options)}</h4>
                        <br />
                    </div>
                    {!this.props.user_id ?
                        null
                        :
                        <div className="event-ticket-box">
                            <a target="_blank" rel="noopener noreferrer" href={event.offers[0].url}><button className="event-ticket-button">Tickets</button></a>
                            <p>{status}</p>
                        </div>
                    }
                </div>
            );
        });
        return (
            <div>
                <div>
                    <h1>Login to buy tickets</h1>
                </div>
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