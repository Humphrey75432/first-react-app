import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/Home';
import Error404 from "./components/Error404/Error404";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Notes from "./components/Notes/Notes";

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/notes" component={Notes} exact />
            <Route path="/notes/:noteId" component={Notes} exact />
            <Route component={Error404}/>
        </Switch>
    </App>
);

export default AppRoutes;