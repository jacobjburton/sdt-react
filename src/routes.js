import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/services' component={Services}/>
    </Switch>
)