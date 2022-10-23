//NAVBAR FOR RISING TIDE

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return(
            <nav class="navbar navbar-expand-md py-4 navbar-light shadow-sm">
                <table id="navTable">
                <tr>
                <td>
                <Link to="/" className="navbar-brand">
                    Rising Tide
                </Link>
                </td>

                <td>
                <Link to="/" className="nav-link" id="navJournalButton">
                    Journal
                </Link>
                </td>

                <td>
                <Link to="/weeklyView" className="nav-link">
                    Weekly View
                </Link>
                </td>

                <td>
                <Link to="/archivePage" className="nav-link">
                    Archive Page
                </Link>
                </td>

                <td>
                <Link to="/signInPage" className="nav-link">
                    Sign In
                </Link>
                </td>

                <td>
                <Link id="signUpLink" to="/signUpPage" className="nav-link">
                    Sign Up
                </Link>
                </td>
                </tr>
                </table>
            </nav>
        );
    }
}