import React, { Component } from 'react';

export default class SignIn extends Component {

    onSubmit(e) {
        e.preventDefault();
        //Placeholder text change when form is submitted
        document.getElementById("p").innerHTML = "Logged in!"
    }

    render() {

        return(
            <div style={{backgroundColor: 'lightgreen'}}>
                <form onSubmit={this.onSubmit}>
                <p id="p">Log in Here!</p>
                <input type="textbox" placeholder="Username" required></input>
                <br/>
                <input type="password" placeholder="Password" required></input>
                <br/>
                <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}