import React, { Component } from 'react';
import Home from './containers/Home';
import About from './containers/About';
import './scss/main.scss'
import Nav from './components/Nav';
import Work from './containers/Work';
import Footer from './components/Footer';
import {
    createMemorySource,
    createHistory,
    LocationProvider,
    Router
  } from "@reach/router"
  
  let source = createMemorySource("https://alexdunham.github.io")
  let history = createHistory(source)

class App extends Component {
    render() {
        return (
            <LocationProvider history={history}>
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
            </LocationProvider>
        );
    }
}

export default App;
