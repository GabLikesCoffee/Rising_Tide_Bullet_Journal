import React, { Component }from 'react';
import {useState} from "react";

import { useHistory } from "react-router";
import {useEffect} from "react";

export default class SignUp extends Component {
    
history= useHistory();
    
    
	
	 

    onSubmit(e) {
        console.log("Submission attempt");
		const User= useState(
			{
				_id:"",//Username
				password:"",
				name:"",
				email:"",
	
				habit:[{
					activity:"",
					isCompleted: false,
					completionDate:{
						day:0,
						month:"",
						year:0,
					}
				}],
				
				Journal:[{
					date:{
						day:0,
						month:"",
						year:0,
					},
					
					freeResponse:"",
					
					mood:[false]
					
					
				}]
				
				
				
			});
			
        e.preventDefault();
        //Placeholder text change when form is submitted
        const newUser=User;
		newUser._id=e.username;
	
		fetch( "http://localhost:3000/createAccount",{
			method: "POST",
			headers:{
			"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
		.catch(error => {
			window.alert(error); 
			return;
		})
        useEffect(()=>{
            fetch("/isUserAuth",{
                headers:{"x-access-token":localStorage.getItem("token")}
            })
            .then(res => res.json())
            .then(data => data.isLoggedIn ? history.push("/dashboard"):null)},[])
        
        

        document.getElementById("signup").innerHTML = "Welcome, new user!"
    }

    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="signup">Sign Up Here!</h2>
                        <br/>
                        <input type="textbox"  className="form-control" placeholder="Username" required></input>

                        <input type="password"  className="form-control" placeholder="Password" required></input>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </center>
            </div>

        )
    }
}