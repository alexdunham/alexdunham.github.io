import React, { Component } from 'react';
import '../scss/components/_footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="footer__wrap">
                <h2>Contact.</h2>
                <div className="footer__inner">
                    <a href="mailto:alexandracdunham@gmail.com">e: alexandracdunham@gmail.com</a>
                    <a href="tel:07511637352" className="text-center">p: 07511 637 352</a>
                    <a href="https://www.linkedin.com/in/alexandra-dunham-2a581493/" className="text-right" target="blank">Linkedin</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
