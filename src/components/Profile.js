import React from 'react';
import TrackedEvents from './TrackedEvents';
import TrackedBands from './TrackedBands';

export default function Profile() {
    return (
        <div id='profile-page'>
            <div id='title-and-list-container'>
                <h1 id='profile-title'>Favs Near You</h1>
                <TrackedEvents />
            </div>
            <TrackedBands />
        </div>
    );
};