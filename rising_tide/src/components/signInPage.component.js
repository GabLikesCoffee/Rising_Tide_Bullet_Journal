import React, { Component } from 'react';

export default class SignIn extends Component {

    onSubmit(e) {
        e.preventDefault();
        //Placeholder text change when form is submitted
        document.getElementById("p").innerHTML = "Logged in!"
    }

    render() {

        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                    <h2 id="p">Log in Here!</h2>
                    <br/>
                    <input type="textbox" className="form-control" placeholder="Username" required></input>
                    <input type="password" className="form-control" placeholder="Password" required></input>
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </form>
                </center>
            </div>
        )
    }
}