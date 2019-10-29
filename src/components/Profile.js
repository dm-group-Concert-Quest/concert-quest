import React, {Component} from 'react';
import TrackedEvents from './TrackedEvents';
import TrackedBands from './TrackedBands';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    // componentDidMount() {
        
    // }
    
    render() { 
        return (
            <div className="ProfileTrackedBandsDiv">
                <TrackedBands />
                {/* <h1 className="trackedEventsTitle">Tracked Events</h1> */}
                <TrackedEvents />
            </div>
        );
    }
}