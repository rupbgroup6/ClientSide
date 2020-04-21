import React, {Component} from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import "./CSS/App.css";
import LogAReg  from "./Components/LoginAReg.jsx";
import Quiz from "./Components/Quiz.jsx";
import Intro from './Components/intro.jsx';
import Game from './Components/Game.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);
} 

fetchGetQuestion = () =>{
  let url ="";
  if(this.state.local){
    url = "tbd";//dont forget to define
  }
  else{
    url = "tbd";//dont forget to define
  }
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
    })
  })
    .then(res => {
      return res.json()
    })
    .then(
      (result) => {
        let temp = [];
        result.map(question => temp.push(question));
        this.setState({
          questions : temp
        })
      },
      (error) => {
        console.log("err post=", error);
      });
}



  render(){
    return (
      <div className="App">
        <Route render ={({location}) =>(
          <TransitionGroup>
          <CSSTransition 
            key = {location.key}
            timeout = {500}
            classNames="fade"
          >
            <Switch location = {location}>
                <Route exact path="/" >
                 <LogAReg />
                </Route>
                <Route path="/quiz/:id/:questions" >
                 <Quiz />
                </Route>
                <Route path="/intro/:email" >
                 <Intro />
                </Route>
                <Route path="/game/:profile" >
                 <Game />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
  }
  
  export default withRouter(App);
  