import React from "react";
import { getTrackedArtist, untrackArtist } from "../redux/reducers/postReducer";
import { connect } from "react-redux";

class TrackedBands extends React.Component {
    constructor() {
        super();
        this.state = {
            artist: {}
        };
    };

    componentDidMount() {
        this.props.getTrackedArtist();
    };

    handleUntrackBand = (band_name) => {
        this.props.untrackArtist(band_name);
    };

    render() {
        const trackArtistsMapped = this.props.tracked_artist.map((artist, i) => {
            return (
                <div key={i} className='tracked-band'>
                    <img alt="artist pic" src={artist.image_url} className='tb-pic' />
                    <h1>{artist.band_name}</h1>
                    <button className='tb-btn' onClick={() => this.handleUntrackBand(artist.band_name)}>Untrack</button>
                </div>
            )
        })
        return (
            <div>
                <div className="tb-div">
                    <h1>Tracked Artists</h1>
                </div>
                <div id='tracked-bands'>
                    {trackArtistsMapped}
                </div>
            </div>
        )
    };
};

const mapStateToProps = reduxState => {
    return {
        tracked_artist: reduxState.postReducer.tracked_artist
    };
};

export default connect(
    mapStateToProps,
    { getTrackedArtist, untrackArtist }
)(TrackedBands);
