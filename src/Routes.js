import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AppProfile from './components/Profile/AppProfile';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/app/:id" exact component={AppProfile} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes
