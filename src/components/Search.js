import React, { Component } from 'react';
import EventList from './EventList';
import axios from 'axios';
require("dotenv").config();

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            artist: {},
            artistSearch: '',
            city: '',
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
        this.setState({ artistSearch: '', city: '' });
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
                this.setState({ events: response.data });

                if (this.state.city !== '') {
                    const toCityCase = (str) => {
                        return str.replace(
                            /\w\S*/g,
                            function (txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                            }
                        )
                    }
                    this.setState({ city: toCityCase(this.state.city) });
                    const result = this.state.events.filter(event => event.venue.city === this.state.city)
                    if (result) {
                        this.setState({ events: result });
                    }
                };

            }).catch(err => {
                if (this.state.city !== '' && this.state.artist.name !== undefined) {
                    alert(`${this.state.artist.name} has no upcoming shows in ${this.state.city}`)
                } else if (!this.state.artist.name) {
                    alert(`${this.state.artistSearch} does not exist in the database.`)
                } else {
                    alert(`${this.state.artistSearch} has no upcoming shows.`)
                }
                window.location.reload();
                this.setState({ artistSearch: '' })
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
                        City (leave blank for global)
                        <input
                            className='search-input'
                            type='text'
                            name='city'
                            value={this.state.city}
                            onChange={this.handleInput} />
                    </label>
                    <div className="search-buttons-box">
                        <input className='search-btn' type='submit' value='Search' />
                        <button className='search-btn' onClick={this.clearSearch}>Clear</button>
                    </div>
                </form>
                <EventList artist={this.state.artist} events={this.state.events} handleSearch={this.handleSearch} />
            </div>
        )
    };
};