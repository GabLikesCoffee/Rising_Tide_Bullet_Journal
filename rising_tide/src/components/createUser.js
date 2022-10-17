import React,{useState} from "react";
import {useNavigate} from "react-router";
import {useHistory} from "react-router";
import {useEffect} from "react";



 export default function createUser(){
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
			
			
			
		}
	);
	 return User;
}

	
async function creation(e){
		e.preventDefault();
		const newUser= {...User};
	
		await fetch( "http://localhost:5000/createAccount",{
			method: "POST",
			headers:{
			"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
		.catch(error => {
			window.alert(error); 
			return;
		});
		
	}
