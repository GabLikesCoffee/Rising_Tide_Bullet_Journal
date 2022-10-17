//import React from 'react';
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
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/journal" className="nav-link">
                                Journal
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/weeklyView" className="nav-link">
                                Weekly View
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/archivePage" className="nav-link">
                                Archive Page
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}