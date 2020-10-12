import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import {element} from "prop-types";

const App = props => (
    <div className="App">
        <Header title="Routing" />

        <Content>
            {props.children}
        </Content>

        <Footer />
    </div>
);

App.propTypes = {
    children: element
};

export default App;
