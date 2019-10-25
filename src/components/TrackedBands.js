import React from "react";
import { getTrackedArtist, untrackArtist } from "../redux/reducers/postReducer";
import { connect } from "react-redux";

class TrackedBands extends React.Component {
    constructor() {
        super();
        this.state = {
            artist: {}
        };
    }

    componentDidMount() {
        this.props.getTrackedArtist();
    }
    handleUntrackBand = (band_name) => {
        console.log(band_name)
        this.props.untrackArtist(band_name);
        console.log(band_name)
    };

    render() {
        const trackArtistsMapped = this.props.tracked_artist.map((artist, i) => {
            return (
                <div key={i}>
                    <img alt="artist pic" src={artist.image_url}/>
                    <h1>{artist.band_name}</h1>
                    <button onClick={() => this.handleUntrackBand(artist.band_name)}>Untrack</button>
                </div>
            )
        })
        return (
            <div style={{marginTop: '200px'}}>
                {trackArtistsMapped}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        tracked_artist: reduxState.postReducer.tracked_artist
    };
};

export default connect(
    mapStateToProps,
    { getTrackedArtist, untrackArtist }
)(TrackedBands);
