import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import GuestLanding from './components/GuestLanding';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={UserLanding}/>
            <Route path='/home' component={GuestLanding}/>
            <Route path='profile' component={UserProfile}/>
            <Route path='auth' component={Auth}/>
        </Switch>
    </Router>
)