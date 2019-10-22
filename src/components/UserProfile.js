import React, { Component } from 'react'
import {getSession} from '../redux/reducers/userReducer';
import {connect} from 'react-redux';

class UserProfile extends Component {

    render() {
        return (
            <div id='profile-bg'>
                <div id='user-profile'>

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