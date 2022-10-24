import React, { Component } from 'react';

export default class SignUp extends Component {
    
    onSubmit(e) {
        e.preventDefault();
        //Placeholder text change when form is submitted
        document.getElementById("signup").innerHTML = "Welcome, new user!";
    }

    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="signup">Sign Up Here!</h2>
                        <br/>
                        <input type="email"  className="form-control" placeholder="Email" required></input>

                        <input type="textbox"  className="form-control" placeholder="Username" required></input>

                        <input type="password"  className="form-control" placeholder="Password" required></input>

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </center>
            </div>

        )
    }
}