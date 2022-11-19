//ARCHIVE PAGE

//import { get } from 'mongoose';
import React, { Component } from 'react';
import {getJournalPost} from "../features/RequestUserData"

const onBackButton = event => {
    let archiveEntriesDiv = document.getElementById("archiveEntriesDiv");
    archiveEntriesDiv.innerHTML = " ";
    let archivePageShift1 = document.getElementById("archivePageShift1");
    let archivePageShift2 = document.getElementById("archivePageShift2");
    archivePageShift2.setAttribute("hidden", true);
    archivePageShift1.removeAttribute("hidden"); 
    //Placeholder text change when form is submitted
    //document.getElementById("archiveHeader").innerHTML = "Submitted";
}

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

    today = new Date().toISOString().split("T")[0];

    onSubmit(e) {
        
        e.preventDefault();
        let archivePageShift1 = document.getElementById("archivePageShift1");
        let archivePageShift2 = document.getElementById("archivePageShift2");
        let startDate = document.getElementById("start");
        let endDate = document.getElementById("end");
        let errorMsg = document.getElementById("dateErrorMsg");

        if(endDate.value < startDate.value){
            errorMsg.style = "color: red";
            errorMsg.removeAttribute("hidden"); 
            return;
        }

        let startDateDate =startDate.value;
        let endDateDate = endDate.value;


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
        console.log( "Start Date: ")
        console.log(startDate.value)
        console.log(startDateObject)
        console.log( "End Date: ")
        console.log(endDate.value)
        console.log(endDateObject)

        //Posts request for journals given a start and end date
        console.log(requestPerDate({day:1,month:1,year:1011},{day:1,month:2,year:1011}))

        errorMsg.setAttribute("hidden", true)
        archivePageShift1.setAttribute("hidden", true);
        archivePageShift2.removeAttribute("hidden"); 

        let archiveEntriesDiv = document.getElementById("archiveEntriesDiv");

        //For each journal in the array of journals given (not yet implemented) replace 4 with the length of the given journal array
        for(let i = 0; i < 5; i++){
            //Create elements to add to archive div
            let journalDate = document.createElement('h3');
            let mood = document.createElement('p');
            let completedHabits = document.createElement('p');
            let dailyAffirmation = document.createElement('p');
            
            //These should add from the values of each journal 
            //Create text to put inside created elements above
            let journalDateString = "Journal Date: "
            let moodString = "Mood: "
            let habitString = "Habits: "
            let dailyAffirmationString = "Daily Affirmation: "

            //Creates texts nodes for the elements and fills it with the strings created above
            let journalDateTextNode = document.createTextNode(journalDateString);
            let moodTextNode = document.createTextNode(moodString);
            let completedHabitsTextNode = document.createTextNode(habitString);
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
        }
        //end for loop for each journal

        //Placeholder text change when form is submitted
        //document.getElementById("archiveHeader").innerHTML = "Submitted";
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