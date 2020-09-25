import React from 'react';
import './App.css';
import Home from "./Home/Home";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header title="Welcome to Codejobs"/>
        <Content>
            <Home/>
        </Content>
        <Footer/>
    </div>
  );
}

export default App;
