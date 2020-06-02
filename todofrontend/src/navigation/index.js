import React from 'react';
import {DetailsPage, HomePage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Navigation = () => {
    return (
        <Router>
            <Route path="/" component={HomePage} exact />
            <Route path="/details" component={DetailsPage} />
        </Router>
    )
}

export default Navigation;