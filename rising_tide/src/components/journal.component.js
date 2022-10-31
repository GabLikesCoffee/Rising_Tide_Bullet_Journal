//JOURNAL PAGE

import React, { Component } from 'react';
import seashell from '../Assets/tempShell.PNG'

//Value for if the habit input textbox is out or not
let textBoxUp = false;

//Function for counting how many characters are left in the daily affirmation
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

//Adds a new habit upon pressing the + button
const addHabit = event => {
    //Finds habit table element
    let habitTable = document.getElementById("habitTable");

    //Temporary row and cell variables
    var row;
    var cell1;
    var cell2;

    //Saves ID for habit
    var id;

    //Saves habit checkbox string for the table
    var habitCheckboxString;
    var habitTextString;

    //If the add habit textbox is not open, it will be opened so the user can add input
    if(textBoxUp === false){

        //The textbox row is now up
        textBoxUp = true;

        //creates a row
        row = habitTable.insertRow(1);

        //inserts a cell into the new row
        cell1 = row.insertCell(0);

        //Puts the textbox in the new row and focuses the user on the textbox
        cell1.innerHTML = "<input type='text' id='newHabitInput' placeholder='Enter New Habit!' maxlength=50></input>";
        document.getElementById("newHabitInput").focus();
    }
    //Else the add habit textbox is already visible
    else{

        //Set it to invisible
        textBoxUp = false;

        //Finds the textbox and gets the user given input
        let newHabit = document.getElementById("newHabitInput").value;

        //If the textbox wasn't empty
        if(newHabit.length > 0){

            //Add a new row to the end of the table
            row = habitTable.insertRow(-1);

            //Insert two cells into the row
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);

            //Sets ID based on how many habits there are example: habit1, habit2....
            id="habit"
            id += (habitTable.rows.length - 2);

            //Sets up habit string for the text with an ID example habit1Text, habit2Text....
            habitTextString = "<span id='";
            habitTextString += id + "Text'>";
            habitTextString += newHabit;
            habitTextString +="</span>";
            
            //Sets habit row checkbox with individual ID
            habitCheckboxString = "<input type='checkbox' id='";
            habitCheckboxString += id;
            habitCheckboxString += "'></input>";
            
    
            //Cell one will have the text of the habit
            cell1.innerHTML = habitTextString;

            //Cell two will have the checkbox
            cell2.innerHTML = habitCheckboxString;
        }
        //Delete the textbox row because the user has added the habit now
        //Index 1 because index 0 is the header row with the button
        habitTable.deleteRow(1);

    }

}

export default class Journal extends Component {

    constructor(props){
        super(props);
        
        this.onChangeMood= this.onChangeMood.bind(this);
        this.onChangeDailyText= this.onChangeDailyText.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            mood:"",//mood radio buttons
            dailyAffirmation: "",//daily affirmation text
        };
    }
    
    onChangeMood = e =>{
        this.setState({
            mood: e.target.value
      });
    }

    onChangeDailyText = e =>{
        this.setState({
            dailyAffirmation: e.target.value
      });
    }

    onSubmit(e) {
        e.preventDefault();
        let journal = {
            mood: this.state.mood,
            dailyAffirmation: this.state.dailyAffirmation
        };
        console.log(journal);
        //Placeholder text change when form is submitted
        document.getElementById("journalHeader").innerHTML = "<center>Submitted!</center>"
    }

    render() {
        return(
            <div className="container" id="container">
                <h1 className="journalHeader" id="journalHeader"> 
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
                                    <center  onChange={this.onChangeMood}>
                                        <input type="radio" id="mtNeutral" name="moodTracker" value="neutral" className="moodTracker"></input>
                                        <label for="mtNeutral">Neutral</label><br/>

                                        <input type="radio" id="mtHappy" name="moodTracker" value="happy" className="moodTracker"></input>
                                        <label for="mtHappy">Happy</label><br/>

                                        <input type="radio" id="mtEcstatic" name="moodTracker" value="ecstatic" className="moodTracker"></input>
                                        <label for="mtEcstatic">Ecstatic</label><br/>

                                        <input type="radio" id="mtExcited" name="moodTracker" value="excited" className="moodTracker"></input>
                                        <label for="mtExcited">Excited</label><br/>
                                        
                                        <input type="radio" id="mtSad" name="moodTracker" value="sad" className="moodTracker"></input>
                                        <label for="mtSad">Sad</label><br/>
                                    </center>
                                </td>

                                <td>
                                    <center  onChange={this.onChangeMood}>
                                        <input type="radio" id="mtDepressed" name="moodTracker" value="depressed" className="moodTracker"></input>
                                        <label for="mtDepressed">Depressed</label><br/>

                                        <input type="radio" id="mtHopeless" name="moodTracker" value="hopeless" className="moodTracker"></input>
                                        <label for="mtHopeless">Hopeless</label><br/>

                                        <input type="radio" id="mtMad" name="moodTracker" value="mad" className="moodTracker"></input>
                                        <label for="mtMad">Mad</label><br/>

                                        <input type="radio" id="mtAngry" name="moodTracker" value="angry" className="moodTracker"></input>
                                        <label for="mtAngry">Angry</label><br/>

                                        <input type="radio" id="mtDisgusted" name="moodTracker" value="disgusted" className="moodTracker"></input>
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
                        <textarea onInput={countChars} onChange={this.onChangeDailyText} placeholder="How was your day? How are you feeling?" maxLength={500} id="dailyAffText"></textarea>
                        <p id="charactersLeft">500 characters left</p>
                    
                        <button type="submit" id="journalSubmitBtn" className="btn btn-primary btn-block">Submit</button>
                    
                        </center>
                </form>
            </div>
        )
    }
}