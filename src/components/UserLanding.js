import React from 'react'
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
        return(
            <Search/>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
};

export default connect(mapStateToProps)(UserLanding);