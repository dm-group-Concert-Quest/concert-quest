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
            <div>
                <TrackedBands />
                <TrackedEvents />
            </div>
        );
    }
}