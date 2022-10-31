//JOURNAL PAGE

import React, { Component } from 'react';
import seashell from '../Assets/tempShell.PNG'

//Value for if the habit input textbox is out or not
let textBoxUp = false;

//Creates array for habits (current habits should be loaded into this array from the database)
let habitsArray = [];

//Creates a date for this journal (should either be today or a day from the past week)
let date = new Date().toString();

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
    let row;
    let cell;

    //Creates a habit object for the habit being added
    let habitObject = {
        activity: "",
        activated: false,
        isCompleted: false,
        completionDate: "not completed"
    }

    //Saves ID for the habit
    let id;

    //Saves habit checkbox string for the table
    let habitTextString;

    //If the add habit textbox is not open, it will be opened so the user can add input
    if(textBoxUp === false){

        //The textbox row is now up
        textBoxUp = true;

        //creates a row
        row = habitTable.insertRow(1);

        //inserts a cell into the new row
        cell = row.insertCell(0);

        //Puts the textbox in the new row and focuses the user on the textbox
        cell.innerHTML = "<input type='text' id='newHabitInput' placeholder='Enter New Habit!' maxlength=50></input>";
        document.getElementById("newHabitInput").focus();
    }
    //Else the add habit textbox is already visible
    else{

        //Set textbox to invisible
        textBoxUp = false;

        //Finds the textbox and gets the user given input
        let newHabit = document.getElementById("newHabitInput").value;

        //If the textbox wasn't empty
        if(newHabit.length > 0){

            //Adds information to the habit object
            habitObject.activity = newHabit;
            habitObject.activated = true;

            //Pushes the new habit into the habit array
            habitsArray.push(habitObject);

            //Add a new row to the end of the table
            row = habitTable.insertRow(-1);

            //Insert two cells into the row
            cell = row.insertCell(0);

            //Sets ID based on how many habits there are example: habit1, habit2....
            id="habit"
            id += (habitTable.rows.length - 2);

            //Sets up habit with the checkbox string
            habitTextString = "<label for='";
            habitTextString += id + "'>";
            habitTextString += newHabit;
            habitTextString +="</label><input type='checkbox' id='";
            habitTextString +=id + "'></input>";
    
            //The cell will have the text of the habit
            cell.innerHTML = habitTextString;
        }
        //Delete the textbox row because the user has added the habit now
        //Index 1 because index 0 is the header row with the button
        habitTable.deleteRow(1);
    }

}

//Checks for checked and unchecked habits as you click them
const checkedHabit = event => {
    //Creates an index from the id of the habit. ex. habit1 becomes 0 for the first index of the array
    let index = event.target.id;

    //If the id has a number in it
    if(/\d/.test(index)){

        //Remove 'habit' from the id and leave just the number
        index = index.replaceAll('habit', '');

        //Turn the string into a number
        index = Number(index);

        //Subtract 1 from our index
        index -= 1;

        //If it is now checked, set completion to true and add a date of completion
        if(event.target.checked){
            habitsArray[index].isCompleted = true;
            habitsArray[index].completionDate = date;

        }
        //If it is now unchecked, set completion to false and remove date of completion
        else{
            habitsArray[index].isCompleted = false;
            habitsArray[index].completionDate = "not completed";
            
        }
    }

}

export default class Journal extends Component {

    constructor(props){
        super(props);
        
        this.onChangeMood = this.onChangeMood.bind(this);
        this.onChangeHabit = this.onChangeHabit(this);
        this.onChangeDailyText = this.onChangeDailyText.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            mood: "",//mood radio buttons
            habit: habitsArray, //array of habits
            dailyAffirmation: "",//daily affirmation text
        };
    }
    
    onChangeMood = e =>{
        this.setState({
            mood: e.target.value
      });
    }

    onChangeHabit = e =>{
        this.setState({
            habit: habitsArray
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
            habit: this.state.habit,
            dailyAffirmation: this.state.dailyAffirmation
        };
        
        if(journal.dailyAffirmation.length > 500)
        {
            console.log("journal is too long!")
            return;
        }
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
                            <tbody>
                                <tr>
                                    <td>
                                        <center>
                                            <img src={seashell} height="200px" alt="seashell"/>
                                        </center>
                                    </td>
                                    <td>
                                        <center  onChange={this.onChangeMood}>
                                            <input type="radio" id="mtNeutral" name="moodTracker" value="neutral" className="moodTracker"></input>
                                            <label htmlFor="mtNeutral">Neutral</label><br/>

                                            <input type="radio" id="mtHappy" name="moodTracker" value="happy" className="moodTracker"></input>
                                            <label htmlFor="mtHappy">Happy</label><br/>

                                            <input type="radio" id="mtEcstatic" name="moodTracker" value="ecstatic" className="moodTracker"></input>
                                            <label htmlFor="mtEcstatic">Ecstatic</label><br/>

                                            <input type="radio" id="mtExcited" name="moodTracker" value="excited" className="moodTracker"></input>
                                            <label htmlFor="mtExcited">Excited</label><br/>
                                            
                                            <input type="radio" id="mtSad" name="moodTracker" value="sad" className="moodTracker"></input>
                                            <label htmlFor="mtSad">Sad</label><br/>
                                        </center>
                                    </td>

                                    <td>
                                        <center  onChange={this.onChangeMood}>
                                            <input type="radio" id="mtDepressed" name="moodTracker" value="depressed" className="moodTracker"></input>
                                            <label htmlFor="mtDepressed">Depressed</label><br/>

                                            <input type="radio" id="mtHopeless" name="moodTracker" value="hopeless" className="moodTracker"></input>
                                            <label htmlFor="mtHopeless">Hopeless</label><br/>

                                            <input type="radio" id="mtMad" name="moodTracker" value="mad" className="moodTracker"></input>
                                            <label htmlFor="mtMad">Mad</label><br/>

                                            <input type="radio" id="mtAngry" name="moodTracker" value="angry" className="moodTracker"></input>
                                            <label htmlFor="mtAngry">Angry</label><br/>

                                            <input type="radio" id="mtDisgusted" name="moodTracker" value="disgusted" className="moodTracker"></input>
                                            <label htmlFor="mtDisgusted">Disgusted</label><br/>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                        <div id="habitWidget">
                            <table id="habitTable">
                                <tbody onClick={checkedHabit}>
                                    <tr>
                                        <th>
                                            <button type="button" id="addHabitButton" onClick={addHabit}>+</button>
                                            <p id="habitsLabel">Habits</p>
                                        </th>
                                    </tr>
                                </tbody>
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