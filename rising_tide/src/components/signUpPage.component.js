import React, { Component } from 'react';

export default class SignUp extends Component {

    constructor(props){
		super(props);
        
        this.changeUsername= this.changeUsername.bind(this);
        this.changePassword= this.changePassword.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
		this.state={
			_id:"",//Username
			password:"",
			

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
        
		if(this.state.username.length < 3){
			let usernameLabel = document.getElementById("signUpUsernameLabel")
			usernameLabel.innerHTML = "Username should be at least 3 characters long"
			usernameLabel.style = "color: red";
			e.preventDefault();
			return;
		}

        const user={
			_id: this.state.username,
			password: this.state.password,
			
		}
		e.preventDefault();
	
        
        
        console.log(user)
		document.getElementById("signUpUsernameLabel").style = "color: black";
		document.getElementById("signUpUsernameLabel").innerHTML = "Username:";
        document.getElementById("signup").innerHTML = "Welcome, new user!";
    }


    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="signup">Sign Up Here!</h2>
                        <br/>

						<label class="signUpFormLabels" for="signUpEmail">Email:</label>
                        <input id="signUpEmail" type="email"  className="form-control" placeholder="Email" required></input>
						
						<label class="signUpFormLabels" for="signUpUsername" id="signUpUsernameLabel">Username:</label>
                        <input type="textbox" id="signUpUsername" className="form-control" placeholder="Username" 
                        required 
                        value={this.state.username}
                        onChange={this.changeUsername}>
                        </input>

						<label class="signUpFormLabels" for="SignUpPassword">Password: </label>
                        <input type="password" id="signUpPassword" className="form-control" placeholder="Password" 
                        required
                        value={this.state.password}
                        onChange={this.changePassword}>
                        </input>

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </center>
            </div>

        )
    }
}
