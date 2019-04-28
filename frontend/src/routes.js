import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Main from './pages/HomePage';
import Upload from './pages/UploadPage';

// Routes
const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Upload" exact component={Upload} />
        </Switch>
    </Router>
);

export default Routes;