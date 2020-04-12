import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Signup from "./signup";
import history from './history';
import Home from './home';
import Login from './login';
import Articles from './articles';
import Findfit from './findfit';
import Events from './events';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Signup" component={Signup} /> 
                    <Route path="/Login" component={Login}/>  
                    <Route path="/articles" component={Articles}/>  
                    <Route path="/findfit" component={Findfit}/>
                    <Route path="/events" component={Events}/>               
                </Switch>
            </Router>
        )
    }
}