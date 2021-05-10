import React from 'react'
import { Route, Switch } from "react-router-dom";
import Login from './Login';
import Movies from './Movies';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/movielist' component={Movies}></Route>
        </Switch>
    );
};

export default Routes;
