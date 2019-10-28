import React, { Component } from "react";
import axios from "axios";
import { getTrackedArtist } from "../redux/reducers/postReducer";
import { connect } from 'react-redux';
require("dotenv").config();

class TrackedEvents extends Component {
    constructor() {
        super();
        this.state = {
            myEvents: []
        }
    }

    componentDidMount() {
        this.props.getTrackedArtist();
        const { REACT_APP_BAND_APP_KEY } = process.env;

        // console.log(this.props.city);
        // console.log(this.props.tracked_artist)
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
                    // this.state.myEvents.push(result);
                    // this.setState({myEvents: result})
                    // console.log(this.state.myEvents);
                })
        })


        //         this.setState({ images: response.data.})
        //     }).catch(err => {
        //         if (this.state.city !== '' && this.state.artist.name !== undefined) {
        //             alert(`${this.state.artist.name} has no upcoming shows in ${this.state.city}`)
        //         } else if (!this.state.artist.name) {
        //             alert(`${this.state.artistSearch} does not exist in the`)
        //         } else {
        //             alert(`${this.state.artistSearch} has no upcoming shows.`)
        //         }
        //         window.location.reload();
        //         this.setState({ artistSearch: '' })
        //     });
        // axios
        //     .get(
        //         `https://rest.bandsintown.com/artists/${this.state.artistSearch}?app_id=${REACT_APP_BAND_APP_KEY}`
        //     )
        //     .then(response => {
        //         this.setState({ artist: response.data });
        //     }); 
    }

    render() {
        console.log(this.state.myEvents)
            const myEventsMapped = this.state.myEvents.map((eventArr, i) => {
                // console.log(eventArr);
                return (
                    <div key={i} style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                        {eventArr[0] ?
                        eventArr.map(event => {
                            // console.log(event)
                            return (
                            <div>
                                <h1>{event.venue.name}</h1>
                                <h1>{event.lineup}</h1>
                            </div>
                        )})
                        :
                        null
                        }
                    </div>
                )
            })
            // console.log(this.state.myEvents);
        return (
            <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                {/* {console.log('hi')} */}
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