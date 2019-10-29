import React, {Component} from 'react';
import TrackedEvents from './TrackedEvents';
import TrackedBands from './TrackedBands';

export default function Profile() {
        return (
        <div id='profile-page'>
            <TrackedBands />
            <TrackedEvents />
        </div>
    );
}