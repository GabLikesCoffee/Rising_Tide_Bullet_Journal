import React, { Component } from 'react';

export default class SignUp extends Component {

    onSubmit(e) {
        e.preventDefault();
        //Placeholder text change when form is submitted
        document.getElementById("signup").innerHTML = "Welcome, new user!"
    }

    render() {
        return(
            <div style={{backgroundColor: 'lightblue'}}>
                <form onSubmit={this.onSubmit}>
                <p id="signup">Sign Up Here!</p>
                <input type="textbox" placeholder="Username" required></input>
                <br/>
                <input type="password" placeholder="Password" required></input>
                <br/>
                <button type="submit">Sign Up</button>
                </form>
            </div>

        )
    }
}