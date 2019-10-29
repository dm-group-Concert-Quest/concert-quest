import React, {Component} from 'react';
import TrackedEvents from './TrackedEvents';
import TrackedBands from './TrackedBands';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    render() { 
        return (
            <div className="ProfileTrackedBandsDiv">
                <TrackedBands />
                <TrackedEvents />
            </div>
        );
    }
}