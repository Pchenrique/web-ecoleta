import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/home';
import CreatPoint from './pages/createPoint';
import Confirmed from './pages/confirmed';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatPoint} path="/create-point" />
            <Route component={Confirmed} path="/confirmed" />
        </BrowserRouter>
    );
};

export default Routes;
