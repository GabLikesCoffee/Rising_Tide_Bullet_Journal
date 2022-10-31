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
                                        <span className="navbarLink">Rising Tide</span>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Link to="/" className="nav-link" id="navJournalButton">
                                        <span className="navbarLink">Journal</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/signInPage" className="nav-link">
                                        <span className="navbarLink">Sign In</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link id="signUpLink" to="/signUpPage" className="nav-link">
                                        <span className="navbarLink">Sign Up</span>
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
                                        <span className="navbarLink">Rising Tide</span>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Link to="/" className="nav-link" id="navJournalButton">
                                        <span className="navbarLink">Journal</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/weeklyView" className="nav-link">
                                        <span className="navbarLink">Weekly View</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/archivePage" className="nav-link">
                                        <span className="navbarLink"> Archive Page</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/" className="nav-link">
                                        <span className="navbarLink">Log Out</span>
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
                                    <Link to="/" className="nav-link" id="navJournalButton">
                                        <span className="navbarLink">Journal</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/weeklyView" className="nav-link">
                                        <span className="navbarLink">Weekly View</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/archivePage" className="nav-link">
                                        <span className="navbarLink">Archive Page</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link to="/signInPage" className="nav-link">
                                        <span className="navbarLink">Sign In</span>
                                    </Link>
                                </td>
        
                                <td>
                                    <Link id="signUpLink" to="/signUpPage" className="nav-link">
                                        <span className="navbarLink">Sign Up</span>
                                    </Link>
                                </td>
                                    
                                <td>
                                    <Link to="/" className="nav-link">
                                        <span className="navbarLink">Log Out</span>
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