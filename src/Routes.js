import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import GuestLanding from './components/GuestLanding';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import About from './components/About';
import UserLanding from './components/UserLanding';
import Settings from './components/Settings';

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={GuestLanding}/>
            <Route path='/user' component={UserLanding}/>
            <Route path='/profile' component={UserProfile}/>
            <Route path='/register' component={Register}/>
            <Route path='/about' component={About}/>
            <Route path='/settings' component={Settings}/>
        </Switch>
    </Router>
)