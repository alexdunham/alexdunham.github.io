import React, { Component } from 'react';
import { Router } from "@reach/router";
import Home from './containers/Home';
import About from './containers/About';
import './scss/main.scss'
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
            <main>
                <Nav/>
                <div className="wrapper">
                    <Router>
                        <Home path="/"/>
                        <About path="/about"/>
                    </Router>
                </div>
            </main>
        );
    }
}

export default App;
