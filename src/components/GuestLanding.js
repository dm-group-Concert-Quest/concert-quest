import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div id='guest-landing'>
                <h1>Concert Quest</h1>
                <figure>
                    <img src='https://png2.cleanpng.com/sh/a8541a476cc68cf3cbcb7455e688d9e1/L0KzQYm3VMI5N6J2fZH0aYP2gLBuTfdwd5hxfZ92YYD2PbT2jgB2fJZ3Rdtsb372Pbj3k71vaaduf9N9aXBxPcTCkCRmdaQyTdNuNHXkSYTohMhnbGIzSaM5NEa3QYe4VcI1QWY2TqsEN0GzSXB3jvc=/kisspng-google-maps-computer-icons-gps-navigation-systems-5ae4ea93ad8fd1.1104641615249516997109.png'/>
                    <figcaption>Shows Near You</figcaption>
                    <img src='./images/band-icon.png'/>
                    <figcaption>Track Your Favorite Artists</figcaption>
                </figure>
            </div>
        )
    }
}
