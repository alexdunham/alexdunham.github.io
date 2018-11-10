import React, { Component } from 'react';
import '../scss/components/_logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className="logo-name" aria-label="Alex Dunham">
                <span className="alex">Alex</span>
                <span className="dunham">Dunham.</span>       
            </div>
        );
    }
}

export default Logo;
