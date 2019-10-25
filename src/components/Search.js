import React, { Component } from 'react'
import EventList from './EventList';
import axios from 'axios';
require("dotenv").config();

export default class Search extends Component {
    constructor() {
        super();
        this.state ={
            artist: '',
            region: '',
            events: []
        }
    }

    handleInput = (e) => {
            this.setState({[e.target.name]: e.target.value});
            this.setState({events: []});
    }

    handleSearch = (e) => {
        e.preventDefault();
        const { REACT_APP_BAND_APP_KEY } = process.env;
        
        axios
        .get(
            `https://rest.bandsintown.com/artists/${this.state.artist}/events?app_id=${REACT_APP_BAND_APP_KEY}`
            )
            .then(response => {
                this.setState({ events: response.data });
            }).catch(err => {
                if(this.state.region !== '' && this.state.artist.name !== undefined) {
                    alert(`${this.state.artist.name} has no upcoming shows in ${this.state.region}`)
                } else if (!this.state.artist.name) {
                    alert(`${this.state.artist} does not exist in the`)
                } else {
                    alert(`${this.state.artist} has no upcoming shows.`)
                }
                window.location.reload();
                this.setState({artist: ''})
                console.log(this.state.artist)
            });
            axios
            .get(
                `https://rest.bandsintown.com/artists/${this.state.artist}?app_id=${REACT_APP_BAND_APP_KEY}`
                )
                .then(response => {
                    console.log(response.data)
                    this.setState({ artist: response.data });
                    console.log(this.state.artist);
                });
            }
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
                        name='artist'
                        onChange={this.handleInput}/>
                    </label>
                    <label className='search-label'>
                        State
                        <input 
                        className='search-city'
                        type='text'
                        name='region'
                        onChange={this.handleInput}/>
                    </label>
                    <input className='search-btn' type='submit' value='Search'/>
                </form>
                <EventList artist={this.state.artist} events={this.state.events}/>
            </div>
        )
    }
}