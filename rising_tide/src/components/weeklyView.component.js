//WEEKLY VIEW

import React, { Component } from 'react';
import seashell from '../Assets/shell.PNG'

let randomNumber;

let shell = document.getElementsByClassName("weeklyShell");

//Unfinished will allow for random rotating of the shells so they don't look so boring
for(let i = 0; i < shell.length; i++){
    randomNumber = Math.floor(Math.random() * (90 + 1));
    console.log(randomNumber-45);
    shell[i].style.transform = "rotate(90deg)";
}

export default class WeeklyView extends Component {

    render() {
        return(
            <div className="container" id="container">
                <h1>
                    <center>
                        Weekly View
                    </center>
                </h1>
                <table id="weeklyViewTable">
                    <tbody>
                        <tr>
                            <td>
                                Monday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tuesday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Wednesday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Thursday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Friday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Saturday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sunday
                            </td>
                            <td class="weeklyViewTableBorder">
                                <img class="weeklyShell" src={seashell} alt="seashell"></img>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        )
    }
}