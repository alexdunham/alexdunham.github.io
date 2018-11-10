import React, { Component } from 'react';
import { Router } from "@reach/router";
import Home from './containers/Home';
import About from './containers/About';
import './scss/main.scss'
import Nav from './components/Nav';
import Work from './containers/Work';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <main className="wrapper">
                    <Router>
                        <Home path="/"/>
                        <About path="/about"/>
                        <Work path="/work"/>
                    </Router>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
