import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import GuestLanding from './components/GuestLanding';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import About from './components/About';
import UserLanding from './components/UserLanding';
import Settings from './components/Settings';

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={UserLanding}/>
            <Route path='/home' component={GuestLanding}/>
            <Route path='profile' component={UserProfile}/>
            <Route path='auth' component={Auth}/>
            <Route path='/about' component={About}/>
            <Route path='settings' component={Settings}/>
        </Switch>
    </Router>
)