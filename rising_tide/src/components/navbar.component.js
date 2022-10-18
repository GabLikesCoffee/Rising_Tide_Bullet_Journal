//NAVBAR FOR RISING TIDE

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-light navbar-info">
                <Link to="/" className="navbar-brand">
                    Rising Tide
                </Link>
                            <Link to="/" className="nav-link">
                                Journal
                            </Link>


                            <Link to="/weeklyView" className="nav-link">
                                Weekly View
                            </Link>

                            <Link to="/archivePage" className="nav-link">
                                Archive Page
                            </Link>

                            <Link to="/signInPage" className="nav-link">
                                Sign In
                            </Link>

                            <Link id="signUpLink" to="/signUpPage" className="nav-link">
                                Sign Up
                            </Link>
            </nav>
        );
    }
}