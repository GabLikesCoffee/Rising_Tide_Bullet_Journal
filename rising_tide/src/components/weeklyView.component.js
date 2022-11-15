//WEEKLY VIEW

import React, { Component } from 'react';
import seashell from '../Assets/shell.PNG';
import { Link } from 'react-router-dom';

//Stores a random number for random shell rotation
let randomNumber;
//Stores the style string for each rotation
let rotateStrings = [];

//Allows for random rotating of the shells so they don't look so boring
for(let i = 0; i < 7; i++){

    //Generates random number between 0 and 70
    randomNumber = Math.floor(Math.random() * (70 + 1));

    //Subtracts 35 so the degree of rotation is between -35 and +35
    randomNumber -= 35;

    //Creates the style string for the rotation
    rotateStrings[i] = "rotate(" + randomNumber + "deg)";
}

//Starts list of days from today on moves on from there
//Keeps track of the day of the week
let dayOfTheWeek = new Date().getDate();
let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default class WeeklyView extends Component {

    render() {
        return(
            <div className="container" id="weeklyViewContainer">
               <center>
                    <h1>
                        Weekly View
                    </h1>
                </center>
                <center>
                    <table id="weeklyViewTable">
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label htmlFor="day1Shell">
                                            Today
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[0]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 6) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[1]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 5) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[2]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 4) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[3]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 3) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[4]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 2) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                    <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[5]}}></img>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <label>
                                            {weekDay[(dayOfTheWeek + 1) % 7]}
                                        </label>
                                    </Link>
                                </td>
                                <td class="weeklyViewTableBorder">
                                    <Link to="/">
                                        <img class="weeklyShell" src={seashell} alt="seashell" style={{transform: rotateStrings[6]}}></img>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </center>

            </div>

        )
    }
}