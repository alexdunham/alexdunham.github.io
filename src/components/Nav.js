import React, { Component } from 'react';
import { Link, Match} from '@reach/router';
import '../scss/components/_nav.scss';
import Logo from './Logo';

const NavLink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
            className:  isCurrent ? 'active' : null
            };
        }}
    />
);

class Nav extends Component {
    render() {
        return (
            <nav className="nav__wrapper">
                <div className="nav__brand">
                    <Match path="/">
                        {props =>
                            props.match ? (
                                null
                            ) : (
                                <Link to={`${process.env.PUBLIC_URL}/`} className="nav__logo--link">
                                    <Logo/>
                                </Link>
                            )
                        }
                    </Match>
                </div>
                <div className="nav__links">
                    <NavLink to={`${process.env.PUBLIC_URL}/about`}>About</NavLink>
                    <NavLink to={`${process.env.PUBLIC_URL}/work`}>Work</NavLink>
                </div>
            </nav>
        );
    }
}

export default Nav;
