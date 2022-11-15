//ARCHIVE PAGE

import React, { Component } from 'react';

const onBackButton = event => {
    let archivePageShift1 = document.getElementById("archivePageShift1");
    let archivePageShift2 = document.getElementById("archivePageShift2");
    archivePageShift2.setAttribute("hidden", true);
    archivePageShift1.removeAttribute("hidden"); 
    //Placeholder text change when form is submitted
    //document.getElementById("archiveHeader").innerHTML = "Submitted";
}

export default class ArchivePage extends Component {

    today = new Date().toISOString().split("T")[0];

    onSubmit(e) {
        e.preventDefault();
        let archivePageShift1 = document.getElementById("archivePageShift1");
        let archivePageShift2 = document.getElementById("archivePageShift2");
        archivePageShift1.setAttribute("hidden", true);
        archivePageShift2.removeAttribute("hidden"); 
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
                    <form onSubmit={this.onSubmit}>
                        <table id="archivePageTable">
                            <tr>
                                <th><label for="start">Start Date:</label></th>
                                <th><label for="end">End Date:</label></th>
                            </tr>
                            <tr>
                                <td>
                                <input type="date" 
                                    id="start" 

                                    min="2022-09-01" 
                                    max={this.today}>
                                </input>
                                </td>

                                <td>
                                <input type="date" 
                                    id="end" 
                                    name="trip-start" 

                                    min="2022-09-01" 
                                    max={this.today}>
                                </input>
                                </td>
                            </tr>
                        </table>
                        <br/>
                        <button type="submit" id="archiveSubmitBtn" className="btn btn-primary">Submit</button>   
                    </form>
                </div>
                </center>
                <div id="archivePageShift2" hidden>
                <button type="button" onClick={onBackButton} id="archiveBackButton" className="btn btn-primary">Back</button>   
                    <center>
                    insert journal info here
                    </center>
                </div>

            </div>

        )
    }
}