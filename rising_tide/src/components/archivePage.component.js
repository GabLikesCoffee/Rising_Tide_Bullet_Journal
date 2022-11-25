//ARCHIVE PAGE

//import { get } from 'mongoose';
import React, { Component } from 'react';
import {getJournalPost} from "../features/RequestUserData"
import {getHabitPost} from "../features/RequestUserData"

//When the back button is pressed after viewing a journal
const onBackButton = event => {

    //Finds and empties the journal view
    let archiveEntriesDiv = document.getElementById("archiveEntriesDiv");
    archiveEntriesDiv.innerHTML = " ";

    //Finds the shell view (archivePageShift1) and journal view (2) and switches them to show shell view
    let archivePageShift1 = document.getElementById("archivePageShift1");
    let archivePageShift2 = document.getElementById("archivePageShift2");

    //Hides journal view
    archivePageShift2.setAttribute("hidden", true);

    //Shows shell view
    archivePageShift1.removeAttribute("hidden"); 
}

//Cycles through grabbing each journal object by day and returns an array of journals
const requestPerDate=(beginDate,endDate)=>{
	
	let dateList=[];
    let journalList=[];
	let calenderMonth=beginDate.month;
	for(let currentYear=beginDate.year; currentYear<=endDate.year; currentYear++){
		for(let monthCounter= calenderMonth; monthCounter<=12; monthCounter++){
			calenderMonth%=12
			calenderMonth++
			for(let dayCounter=beginDate.day; dayCounter<=31; dayCounter++){
				
				let currentDate={
					day:dayCounter, 
					month:monthCounter,
					year:currentYear
				}
				let temp= getJournalPost(currentDate);
                if(temp){
                    journalList.push(temp);

                }

				if(JSON.stringify(endDate)===JSON.stringify(currentDate)){
					dateList.push(currentDate);
					return journalList;
					
                }else{
                    dateList.push(currentDate);
                    
                }
			}
		}
	}
}

export default class ArchivePage extends Component {

    //Gives today's date so the user can't request future journals
    today = new Date().toISOString().split("T")[0];

    onSubmit(e) {
        
        e.preventDefault();

        let archivePageShift1 = document.getElementById("archivePageShift1");
        let archivePageShift2 = document.getElementById("archivePageShift2");
        let startDate = document.getElementById("start");
        let endDate = document.getElementById("end");
        let errorMsg = document.getElementById("dateErrorMsg");

        //Displays error is end date is before start date
        if(endDate.value < startDate.value){
            errorMsg.style = "color: red";
            errorMsg.removeAttribute("hidden"); 
            return;
        }

        //Sets variables given the start and end date
        let startDateDate = startDate.value;
        let endDateDate = endDate.value;


        //Creates date objects from the variables
        let startDateObject={
            day:Number(startDateDate.substring(8, 10)),
            month:Number(startDateDate.substring(5, 7)),
            year:Number(startDateDate.substring(0, 4))
        }

        let endDateObject={
            day:Number(endDateDate.substring(8, 10)), 
            month:Number(endDateDate.substring(5, 7)),
            year:Number(endDateDate.substring(0, 4))
        }

        //Debug console logs
        console.log( "Start Date: ")
        console.log(startDate.value)
        console.log(startDateObject)
        console.log( "End Date: ")
        console.log(endDate.value)
        console.log(endDateObject)

        //Posts request for journals given a start and end date
        //REPLACE CONSOLE LOG TEST CODE WITH COMMENTED CODE BELOW 
        //let journalList = requestPerDate(startDateObject, endDateObject);
        console.log(requestPerDate({day:1,month:1,year:1011},{day:1,month:2,year:1011}))

        //Hides error message as the user will try again (if an error occured)
        errorMsg.setAttribute("hidden", true);

        //Switches to the journal view
        archivePageShift1.setAttribute("hidden", true);
        archivePageShift2.removeAttribute("hidden"); 

        //Creates a div inside journal view to generate the journal text
        let archiveEntriesDiv = document.getElementById("archiveEntriesDiv");

        //For each journal in the array of journals given (not yet implemented) replace 4 with the length of the given journal array
        //REPLACE DEBUG FOR LOOP WITH BELOW COMMENTED FOR LOOP mostly replace the 5 with journalList.length
        //for(let i = 0; i < journalList.length; i++){
        for(let i = 0; i < 5; i++){

            //Create elements to add to archive div
            let journalDate = document.createElement('h3');
            let mood = document.createElement('p');
            let completedHabits = document.createElement('p');
            let dailyAffirmation = document.createElement('p');

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE
            //Grabs array of habits from server(ask for more details on the function from backend)
            //let habitArray = getHabitPost(journalList[i].date)

            //let habitString = "";

            //For each habit in the list
                /*for (let j = 0; j < habitArray.length; j++){
                    
                   //Adds a comma and space to the string of habits after the first habit
                    if(j > 0){
                        habitString += ", "
                    }

                    //Adds activity to the string
                    habitString += habitArray[j].activity;

                    //If the habit is completed add a space and a checkmark, if not, a space and an x
                    if(habitArray[j].isCompleted === true){
                        habitString+= " " + &check;
                    }
                    else{
                        habitString+=  " x";
                    }

                }*/

            /*
            //Create text to put inside created elements above
            //Adding the values from the journalList[i]
            let journalDateString = "Journal Date: " + journalList[i].date.month + "-" + journalList[i].date.day + "-" +  journalList[i].date.year;

            let moodString = "Mood: " +  journalList[i].mood;
            let habitFullString = "Habits: " + habitString;
            let dailyAffirmationString = "Daily Affirmation: " +  journalList[i].freeResponse;

            
            //Creates texts nodes for the elements and fills it with the strings created above
            let journalDateTextNode = document.createTextNode(journalDateString);
            let moodTextNode = document.createTextNode(moodString);
            let completedHabitsTextNode = document.createTextNode(habitFullString);
            let dailyAffirmationTextNode = document.createTextNode(dailyAffirmationString);


            //Adds the text nodes to their corresponding element
            journalDate.appendChild(journalDateTextNode);
            mood.appendChild(moodTextNode);
            completedHabits.appendChild(completedHabitsTextNode);
            dailyAffirmation.appendChild(dailyAffirmationTextNode);

            //Adds the full text elements to the archive div
            archiveEntriesDiv.appendChild(journalDate);
            archiveEntriesDiv.appendChild(mood);
            archiveEntriesDiv.appendChild(completedHabits);
            archiveEntriesDiv.appendChild(dailyAffirmation);

            */
        }
        //end for loop for each journal
    }

    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <h1 id="archiveHeader">
                        Archive Page
                    </h1>
                
                
                <div id="archivePageShift1">
                    <br/>
                    <br/>
                    <h3>Enter to and from dates to view past journals</h3>
                    <p id="dateErrorMsg" hidden>Start date must be before the end date!</p>
                    <form onSubmit={this.onSubmit}>
                        <table id="archivePageTable">
                            <tbody>
                                <tr>
                                    <th><label htmlFor="start">Start Date:</label></th>
                                    <th><label htmlFor="end">End Date:</label></th>
                                </tr>
                                <tr>
                                    <td>
                                    <input type="date" 
                                        id="start" 

                                        min="2022-09-01" 
                                        max={this.today} required>
                                    </input>
                                    </td>

                                    <td>
                                    <input type="date" 
                                        id="end" 
                                        name="trip-start" 

                                        min="2022-09-01" 
                                        max={this.today} required>
                                    </input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <button type="submit" id="archiveSubmitBtn" className="btn btn-primary">Submit</button>   
                    </form>
                </div>
                </center>
                <div id="archivePageShift2" hidden>
                <button type="button" onClick={onBackButton} id="archiveBackBtn" className="btn btn-primary">Back</button>   
                    <center>
                        <div id="archiveEntriesDiv">

                        </div>
                    </center>
                </div>

            </div>

        )
    }
}