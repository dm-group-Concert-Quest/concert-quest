import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

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
            <h1>UserLanding!</h1>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
};

export default connect(mapStateToProps)(UserLanding);