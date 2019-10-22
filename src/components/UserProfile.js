import React, { Component } from 'react'
import {getSession} from '../redux/reducers/userReducer';
import {connect} from 'react-redux';

class UserProfile extends Component {

    render() {
        return (
            <div id='profile-bg'>
                <div id='user-profile'>
                    <h1 className='profile-title'>Your Profile</h1>
                    <div className='profile-lists'>
                        <section className='profile-list'>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                            <h4>AAAAAAAAAAAA</h4>
                        </section>
                        <section className='profile-list'></section>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        first_name: reduxState.userReducer.first_name
    }
}

export default connect(mapStateToProps, {getSession})(UserProfile);