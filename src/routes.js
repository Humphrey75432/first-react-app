import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/Home';

const AppRoutes = () => (
    <App>
        <Route path="/" component={Home}/>
    </App>
);

export default AppRoutes;