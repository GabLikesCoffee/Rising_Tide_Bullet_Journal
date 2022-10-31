//NAVBAR FOR RISING TIDE

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

//LOGGEDIN VALUES:
//0 = not logged in, 1 = logged in, 2 = debug mode!

export default class Navbar extends Component {
    
    render() {
        let loggedIn = 2;
        if(loggedIn === 0){
            return(
                <nav className="navbar navbar-expand-md py-4 navbar-light shadow-sm">
                    <table id="navTable">
                        <tbody>
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
                        </tbody>
                    </table>
                </nav>
            );
        }

        else if(loggedIn === 1){
            return(
                <nav className="navbar navbar-expand-md py-4 navbar-light shadow-sm">
                    <table id="navTable">
                        <tbody>
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
                                    <Link to="/" className="nav-link">
                                        Log Out
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            );
        }

        else{
            return(
                <nav className="navbar navbar-expand-md py-4 navbar-light shadow-sm">
                    <table id="navTable">
                        <tbody>
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
                                    
                                <td>
                                    <Link to="/" className="nav-link">
                                        Log Out
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            );
        }
    }
}