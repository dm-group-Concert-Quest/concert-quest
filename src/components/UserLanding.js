import React from 'react'
import {getSession} from '../redux/reducers/userReducer';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Search from './Search';

class UserLanding extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){
        if(!this.props.user_id) {
            return <Redirect to='/'/>
        }
      return (
            <div id='profile-bg'>
                <div id='user-profile'>
                    <h1 className='profile-title'>Your Profile</h1>
                    <div className='profile-lists'>
                        <label className='profile-list-label'>Concerts you're interested in<section className='profile-list'></section></label>
                        <label className='profile-list-label'>Your tracked bands<section className='profile-list'></section></label>
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

export default connect(mapStateToProps, {getSession})(UserLanding);