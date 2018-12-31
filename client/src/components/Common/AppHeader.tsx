import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './AppHeader.css'

class AppHeader extends Component {
    constructor(props: any) {
        super(props);

        this.renderEditSubscription = this.renderEditSubscription.bind(this);
    }

    state = {
        authenticated: false
    }

    renderEditSubscription() {
        if(this.state.authenticated) {
            return (
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Edit Subscription</a>
                </li>
            );
        }
    }

    renderAuthenticationLinks() {

        if(this.state.authenticated) {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Logout</a>
                    </li>
                </ul>
            )
        }

        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
            </ul>
        )
    }

    render() {
        return(
            <div className="app-header-div">
                <nav className="navbar navbar-expand-lg container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            {this.renderEditSubscription()}
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                        </ul>
                        <span className="navbar-text text-light">
                            {this.renderAuthenticationLinks()}
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AppHeader;