//WEEKLY VIEW

import React, { Component } from 'react';
import seashell from '../Assets/shell.PNG';

//Stores a random number for random shell rotation
let randomNumber;
//Stores the style string for each rotation
let rotateStrings = [];

//Starts list of days from today on moves on from there
//Keeps track of the day of the week
let dayOfTheWeek = new Date().getDate();
let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let last7Days=[]

//GLOBAL VARIABLES THAT WE FILL WITH DATABASE INFORMATION
let mood
let completedHabits
let dailyAffirmation

//Finds the last 7 days, turns it into an object and pushes it to an array to be used in the onEditPage functions
for(let i = 0; i < 7; i++){
    let date = new Date();
    date.setDate(date.getDate() - i)
    
    let last7DaysObject = {
        day: date.getDate(), 
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
    last7Days.push(last7DaysObject);
}

//Allows for random rotating of the shells so they don't look so boring
for(let i = 0; i < 7; i++){

    //Generates random number between 0 and 70
    randomNumber = Math.floor(Math.random() * (70 + 1));

    //Subtracts 35 so the degree of rotation is between -35 and +35
    randomNumber -= 35;

    //Creates the style string for the rotation
    rotateStrings[i] = "rotate(" + randomNumber + "deg)";
}

//1 is for yesterday, 2 is for the day before yesterday, etc
const onEditPage1 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[0]

    //Debug purposes shows date given
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage2 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[1]

    //Debug purposes shows date given
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage3 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[2]
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage4 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[3]
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage5 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[4]
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage6 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[5]
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

const onEditPage7 = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewPage.setAttribute("hidden", true);
    weeklyViewEditPage.removeAttribute("hidden"); 

    let loadDate = last7Days[6]
    console.log(loadDate)

    //mood = find info from database TEMPORARY VALUE BELOW
    mood = "happy"
    //completedHabits = find info from database TEMPORARY VALUE BELOW
    completedHabits = "Jog, Walk Dog, Take meds"
    //dailyAffirmation = find info from database TEMPORARY VALUE BELOW
    dailyAffirmation = "Today was a good day."

    loadJournalEditPage();
}

let loadJournalEditPage = function(){
    let displayMood = document.getElementById("displayMood");
    let displayHabits = document.getElementById("displayHabits");
    let displayTextInput = document.getElementById("displayTextInput");
    let capitalizedMood = mood.charAt(0).toUpperCase() + mood.slice(1);
    displayMood.innerHTML = capitalizedMood;
    displayHabits.innerHTML = completedHabits;
    displayTextInput.innerHTML = "<textarea id ='weeklyViewTextArea'>" + dailyAffirmation + "</textarea>";
}

const onBackButton = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewEditPage.setAttribute("hidden", true);
    weeklyViewPage.removeAttribute("hidden"); 
    mood = "";
    completedHabits = "";
    dailyAffirmation = "";

}

const onSubmitJournalEdit = event => {
    //Go back to weekly view page
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");

    //Gets the value of the textarea so it can be resubmitted
    let newJournalTextString = document.getElementById("weeklyViewTextArea").value;
    let nonAscii = newJournalTextString.replaceAll(/[^\x00-\x7F]/g, '');
    console.log(nonAscii);

    weeklyViewEditPage.setAttribute("hidden", true);
    weeklyViewPage.removeAttribute("hidden"); 
    mood = "";
    completedHabits = "";
    dailyAffirmation = "";

    //Show submitted to confirm submission
    document.getElementById("weeklyViewHeader").innerHTML = "Submitted!";
}

export default class WeeklyView extends Component {

    render() {
        return(
            <div className="container" id="weeklyViewContainer">
               <center>
                    <h1 id = "weeklyViewHeader">
                        Weekly View
                    </h1>
                </center>
                <div id="weeklyView">
                    <center>
                        <table id="weeklyViewTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="day1Shell">
                                            Today
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage1} type="image" src={seashell} style={{transform: rotateStrings[0]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 6) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage2} type="image" src={seashell} style={{transform: rotateStrings[1]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 5) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage3} type="image" src={seashell} style={{transform: rotateStrings[2]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 4) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage4} type="image" src={seashell} style={{transform: rotateStrings[3]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 3) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage5} type="image" src={seashell} style={{transform: rotateStrings[4]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 2) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage6} type="image" src={seashell} style={{transform: rotateStrings[5]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 1) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage7} type="image" src={seashell} style={{transform: rotateStrings[6]}} alt="seashell"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
                <div id="weeklyViewEditPage" hidden>

                    <button type="button" onClick={onBackButton} id="weeklyViewBackBtn" className="btn btn-primary">Back</button>
                    <center>
                        <h3>Mood:</h3>
                        <p id="displayMood"></p>
                        <br></br>

                        <h3>Habits:</h3>
                        <p id="displayHabits"></p>
                        <br></br>

                        <h3>Self Reflection:</h3>
                        <p id="displayTextInput"></p>
                        <br></br>
                        <button type="button" onClick={onSubmitJournalEdit} id="weeklyViewEditJournalBtn" className="btn btn-primary">Edit Journal</button>
                    </center>
                </div>

            </div>

        )
    }
}