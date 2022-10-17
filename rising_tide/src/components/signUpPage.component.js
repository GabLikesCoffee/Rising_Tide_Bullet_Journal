import React, { Component } from 'react';

export default class SignUp extends Component {

    onSubmit(e) {
        e.preventDefault();
        document.getElementById("signup").innerHTML = "Welcome, new user!"
    }

    render() {
        return(
            <div style={{backgroundColor: 'lightblue'}}>
                <form onSubmit={this.onSubmit}>
                <p id="signup">Sign Up Here!</p>
                <input type="textbox" placeholder="Username"></input>
                <br/>
                <input type="password" placeholder="Password"></input>
                <br/>
                <button type="submit">Sign Up</button>
                </form>
            </div>

        )
    }
}