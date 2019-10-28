import React, { Component } from 'react'
import EventList from './EventList';
import axios from 'axios';
require("dotenv").config();

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            artist: {},
            artistSearch: '',
            region: '',
            events: [],
            images: []
        };
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ events: [] });
    };

    clearSearch = e => {
        e.preventDefault();
        this.setState({ artistSearch: '' });
        this.setState({ events: [] });
    };

    handleSearch = e => {
        e.preventDefault();
        const { REACT_APP_BAND_APP_KEY } = process.env;

        axios
            .get(
                `https://rest.bandsintown.com/artists/${this.state.artistSearch}/events?app_id=${REACT_APP_BAND_APP_KEY}`
            )
            .then(response => {
                console.log(response);
                this.setState({ events: response.data });
                // this.setState({ images: response.data.})
            }).catch(err => {
                if (this.state.region !== '' && this.state.artist.name !== undefined) {
                    alert(`${this.state.artist.name} has no upcoming shows in ${this.state.region}`)
                } else if (!this.state.artist.name) {
                    alert(`${this.state.artistSearch} does not exist in the`)
                } else {
                    alert(`${this.state.artistSearch} has no upcoming shows.`)
                }
                window.location.reload();
                this.setState({ artistSearch: '' })
                console.log(this.state.artistSearch)
            });
        axios
            .get(
                `https://rest.bandsintown.com/artists/${this.state.artistSearch}?app_id=${REACT_APP_BAND_APP_KEY}`
            )
            .then(response => {
                this.setState({ artist: response.data });
            });
    };

    render() {
        return (
            <div>
                <form className='search-form' onSubmit={this.handleSearch}>
                    <h1 className='search-title'>Search for shows near you!</h1>
                    <label className='search-label'>
                        Artist
                        <input
                            className='search-input'
                            type='text'
                            name='artistSearch'
                            value={this.state.artistSearch}
                            onChange={this.handleInput} />
                    </label>
                    <label className='search-label'>
                        State
                        <input
                            className='search-city'
                            type='text'
                            name='region'
                            onChange={this.handleInput} />
                    </label>
                    <input className='search-btn' type='submit' value='Search' />
                    <button className='search-btn' onClick={this.clearSearch}>Clear</button>
                </form>
                <EventList artist={this.state.artist} events={this.state.events} handleSearch={this.handleSearch} />
            </div>
        )
    };
};