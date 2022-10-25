//JOURNAL PAGE

import React, { Component } from 'react';
import seashell from '../Assets/tempShell.PNG'

let textBoxUp = false;
const countChars = event => {
    //Value for an ! if the limit is reached
    let end = "";

    //If limit is reached color the text red and add a !
    if(event.target.value.length === 500)
    {
        document.getElementById("charactersLeft").style = "color: red";
        end = "!";
    }
    else{
        document.getElementById("charactersLeft").style = "color: black";
        end = "";
    }

    //Set up a string for the message counter # + "characters left" + optional !
    let val = 500-event.target.value.length;
    let string = " characters left";
    let fullString = val + string + end;

    document.getElementById("charactersLeft").innerHTML = fullString;
}

const addHabit = event => {
    let habitTable = document.getElementById("habitTable");
    var cell1;
    var cell2;
    var row;
    if(textBoxUp === false){
        textBoxUp = true;
        row = habitTable.insertRow(1);
        cell1 = row.insertCell(0);
        cell1.innerHTML = "<input type='text' id='newHabitInput' placeholder='Enter New Habit!'></input>";
        document.getElementById("newHabitInput").focus();
    }
    else{
        textBoxUp = false;
        let newHabit = document.getElementById("newHabitInput").value;
        if(newHabit.length > 0){
            console.log(newHabit);
            row = habitTable.insertRow(-1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
    
            cell1.innerHTML = newHabit;
            cell2.innerHTML = "<input type='checkbox'></input>";
        }
        habitTable.deleteRow(1);

    }

}

export default class Journal extends Component {

    onSubmit(e) {
        e.preventDefault();
        //Placeholder text change when form is submitted
        document.getElementById("journalHeader").innerHTML = "<center>Submitted!</center>"
    }

    render() {
        return(
            <div className="container" id="container">
                <h1 class="journalHeader" id="journalHeader"> 
                    <center>
                    Rising Tide Bullet Journal
                    </center> 
                </h1>

                <form onSubmit={this.onSubmit}>
                    <div id="moodTrackingDiv">
                        <table id="moodTable">
                            <tr>
                                <td>
                                    <center>
                                        <img src={seashell} height="200px" alt="seashell"/>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        <input type="radio" id="mtNeutral" name="moodTracker" value="neutral"></input>
                                        <label for="mtNeutral">Neutral</label><br/>

                                        <input type="radio" id="mtHappy" name="moodTracker" value="happy"></input>
                                        <label for="mtHappy">Happy</label><br/>

                                        <input type="radio" id="mtEcstatic" name="moodTracker" value="ecstatic"></input>
                                        <label for="mtEcstatic">Ecstatic</label><br/>

                                        <input type="radio" id="mtExcited" name="moodTracker" value="excited"></input>
                                        <label for="mtExcited">Excited</label><br/>
                                        
                                        <input type="radio" id="mtSad" name="moodTracker" value="sad"></input>
                                        <label for="mtSad">Sad</label><br/>
                                    </center>
                                </td>

                                <td>
                                    <center>
                                        <input type="radio" id="mtDepressed" name="moodTracker" value="depressed"></input>
                                        <label for="mtDepressed">Depressed</label><br/>

                                        <input type="radio" id="mtHopeless" name="moodTracker" value="hopeless"></input>
                                        <label for="mtHopeless">Hopeless</label><br/>

                                        <input type="radio" id="mtMad" name="moodTracker" value="mad"></input>
                                        <label for="mtMad">Mad</label><br/>

                                        <input type="radio" id="mtAngry" name="moodTracker" value="angry"></input>
                                        <label for="mtAngry">Angry</label><br/>

                                        <input type="radio" id="mtDisgusted" name="moodTracker" value="disgusted"></input>
                                        <label for="mtDisgusted">Disgusted</label><br/>
                                    </center>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                        <div id="habitWidget">
                            <table id="habitTable">
                                <tr>
                                    <th>
                                        <button type="button" id="addHabitButton" onClick={addHabit}>+</button>
                                        <p id="habitsLabel">Habits</p>
                                    </th>
                                </tr>

                            </table>
                        </div>
                    <br/>
                    <center>
                        <textarea onInput={countChars} placeholder="How was your day? How are you feeling?" maxLength={500} id="dailyAffText"></textarea>
                        <p id="charactersLeft">500 characters left</p>
                    
                        <button type="submit" id="journalSubmitBtn" className="btn btn-primary btn-block">Submit</button>
                    
                        </center>
                </form>
            </div>

        )
    }
}