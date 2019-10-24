import React, { Component } from 'react'
import EventList from './EventList';
import axios from 'axios';
require("dotenv").config();

export default class Search extends Component {
    constructor() {
        super();
        this.state ={
            // artistInput: '',
            artist: '',
            events: []
        }
    }

    handleInput = (e) => {
            this.setState({artist: e.target.value});
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
                alert(`${this.state.artist} is incorrect.`)
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
                    <label className='search-label'>Search for an artist<input className='search-input' type='text' onChange={this.handleInput}></input></label>
                    <input className='search-btn' type='submit' value='Search'/>
                </form>
                <EventList artist={this.state.artist} events={this.state.events} handleSearch={this.handleSearch}/>
            </div>
        )
    }
}