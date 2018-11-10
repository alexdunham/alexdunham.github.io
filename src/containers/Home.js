import React, { Component } from 'react';
import { Link } from "@reach/router";
import '../scss/components/_home.scss';
import Logo from '../components/Logo';

class Home extends Component {
    render() {
        return (
            <div className="home__center">
                <Logo/>
                <div className="home__tagline">
                    <p>Front end developer</p>
                </div>
            </div>
        );
    }
}

export default Home;
