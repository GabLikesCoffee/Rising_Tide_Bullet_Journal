import React, { Component }from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    
	
    constructor(props){
		super(props);
        
        this.changeUsername= this.changeUsername.bind(this);
        this.changePassword= this.changePassword.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
		this.state={
			_id:"",//Username
			password:"",
			

			
			
			
		

		}
	}
    
	changeUsername = (e)=>{
		this.setState({
			username: e.target.value
		});
	}
	changePassword = (e)=>{
		this.setState({
			password: e.target.value
		});
	}
	
	 

    onSubmit= (e)=>{
        
        const user={
			_id: this.state.username,
			password: this.state.password,
			
		}
		e.preventDefault();
	
        
        
        console.log(user);
        /*axios.get("/SignIn", {
            headers: {
               Authorization: "Bearer " + yourJWTToken
            }
         }
         ).then(res=>console.log(res.data))*/
        document.getElementById("p").innerHTML = "Logged in!"
        
		
    }

    
    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="p">Log in Here!</h2>
                        <br/>
                        <input type="textbox"  className="form-control" placeholder="Username" 
                        required 
                        value={this.state.username}
                        onChange={this.changeUsername}>

                        </input>

                        <input type="password"  className="form-control" placeholder="Password" 
                        required
                        value={this.state.password}
                        onChange={this.changePassword}>

                        </input>

                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </form>
                </center>
            </div>

        )
    }
}