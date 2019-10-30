import React from 'react'
import { getSession } from '../redux/reducers/userReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Search from './Search';
import TrackedBands from "./TrackedBands";

class UserLanding extends React.Component {
    render() {
        if (!this.props.user_id) {
            return <Redirect to='/' />
        }

        return (
            <div id='profile-bg'>
                <div id='user-profile'>
                    <h1 className='ul-title'>Home</h1>
                    <div className='profile-lists'>
                        <Search className='profile-list' />
                        <TrackedBands />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        first_name: reduxState.userReducer.first_name
    }
};

export default connect(mapStateToProps, { getSession })(UserLanding);