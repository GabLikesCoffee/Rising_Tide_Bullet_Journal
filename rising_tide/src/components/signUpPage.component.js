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
        
        const user={
			_id: this.state.username,
			password: this.state.password,
			
		}
		e.preventDefault();
	
        
        
        console.log(user)
        document.getElementById("signup").innerHTML = "Welcome, new user!"
        
		
    }


    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="signup">Sign Up Here!</h2>
                        <br/>
                        <input type="email"  className="form-control" placeholder="Email" required></input>

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

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </center>
            </div>

        )
    }
}
