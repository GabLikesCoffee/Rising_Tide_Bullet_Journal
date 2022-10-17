import React from "react"
import './App.css';
//Already installed bootstrap through the terminal so no need to do it again
import "bootstrap/dist/css/bootstrap.min.css";
//Already installed react-router-dom through the terminal so no need to do it again
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {BrowserRouter as Route, Router, Routes, Link} from "react-router-dom";

//importing our page components
import Navbar from "./components/navbar.component";
import Journal from "./components/journal.component";
import WeeklyView from "./components/weeklyView.component";
import ArchivePage from "./components/archivePage.component";
import SignIn from "./components/signInPage.component";
import SignUp from "./components/signUpPage.component";

function App() {
  return (

   /*<Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Journal} />
      <Route path="/weeklyView" component={WeeklyView} />
      <Route path="/archivePage" component={ArchivePage} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />
    </Router>*/
    
    /*Will eventually figure out how to route these*/
    <div>
    <Journal />
    <WeeklyView />
    <ArchivePage />
    <SignIn />
    <SignUp />
    </div>
  );
}

export default App;
