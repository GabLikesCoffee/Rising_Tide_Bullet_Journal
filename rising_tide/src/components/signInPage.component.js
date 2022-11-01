import React, { Component }from 'react';


export default class SignIn extends Component {
    
	
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
				
				mood:""
				
				
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
        document.getElementById("p").innerHTML = "Logged in!"
        
		
    }

    
    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="p">Log in Here!</h2>
                        <br/>
						<label>Username:</label>
                        <input type="textbox"  className="form-control" placeholder="Username" 
                        required 
                        value={this.state.username}
                        onChange={this.changeUsername}>

                        </input>

						<label>Password:</label>
                        <input type="password"  className="form-control" placeholder="Password" 
                        required
                        value={this.state.password}
                        onChange={this.changePassword}>

                        </input>

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-block">Sign In</button>
                    </form>
                </center>
            </div>

        )
    }
}
