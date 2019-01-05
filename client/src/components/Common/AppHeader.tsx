import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutDispatch} from '../../actions/auth/AuthActions'

import './AppHeader.css'



class AppHeader extends Component<any,any> {
    state = {
        authenticated: false
    }

    renderEditSubscription = () => {
        if(this.props.auth.isAuthenticated) {
            return (
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Edit Subscription</a>
                </li>
            );
        }
    }

    renderAuthenticationLinks() {

        if(this.props.auth.isAuthenticated) {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link onClick={this.logOut} className="nav-link text-light" to="/">Logout</Link>
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

    logOut = () => {
        console.log(this.props);
        this.props.logoutDispatch();
        
    }

    render() {
        return(
            <div className="app-header-div navbar-dark">
                <nav className="navbar navbar-expand-lg container">
                    <button id="nav-toggle-button" className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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

const matchStateToProps = (state: any) => ({
    auth: state.auth
});

export default connect(matchStateToProps, { logoutDispatch })(AppHeader);