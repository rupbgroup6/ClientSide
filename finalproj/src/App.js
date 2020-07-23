import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import "./CSS/App.css";
import LogAReg from "./Components/LoginAReg.jsx";
import Quiz from "./Components/Quiz/Quiz.jsx";
import Intro from './Components/intro.jsx';
import Game from './Components/Game.jsx';
import Findings from './Components/Findings.jsx';
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';
import FriendList from './Components/Friends/FriendsList.jsx';
import BarChart from './Components/Charts/BarChart.jsx';
import PieChart from './Components/Charts/PieChart.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: true,
      ioQuestions: [],
      bigQuestions: [],
      orQuestions: [],
      friends: [],
      req: [],
      id: ""
    };
  }

  fetchFriends = () => {
    let url = "";
    if (this.state.local) {
      url = "http://localhost:51298/api/Friends/" + this.state.id;
    }
    else {
      url = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/" + this.state.id;
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
        (friendsList) => {
          this.setState({
            friends: friendsList
          });
          let url2 = "";
          if (this.state.local) {
            url2 = "http://localhost:51298/api/Friends/";
          }
          else {
            url2 = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/";
          }
          url2 += "GetFriendReq/" + this.state.id;
          fetch(url2, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
            })
          })
            .then(res => {
              return res.json()
            })
            .then(
              (friendsReqList) => {
                this.setState({
                  req: friendsReqList
                })
              },
              (error) => {
                console.log("err post=", error);
              });
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  getUsersId = (id) =>{
    this.setState({
      id: id
    })
  }

  fetchGetQuestion = () => {
    let url = "";
    if (this.state.local) {
      url = "http://localhost:51298/api/questions";
    }
    else {
      url = "http://proj.ruppin.ac.il/bgroup6/prod/api/questions";
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
          let ioQuest = [];
          let bigQuest = [];
          let orQuest = [];
          for (var i = 0; i < temp.length; i++) {//seperating the questions to 3 main groups
            if (temp[i].KindOfQuestion === "IO-OI") {
              ioQuest.push(temp[i]);
            }
            else if (temp[i].KindOfQuestion === "BIG 5") {
              bigQuest.push(temp[i]);
            }
            else if (temp[i].KindOfQuestion === "OR") {
              orQuest.push(temp[i]);
            }
          }
          let sortedIo = ioQuest.sort(function (a, b) {//sorting the questions by order
            return a.OrderView - b.OrderView;
          });
          let sortedBig = bigQuest.sort(function (a, b) {//sorting the questions by order
            return a.OrderView - b.OrderView;
          });
          let sortedOr = orQuest.sort(function (a, b) {//sorting the questions by order
            return a.OrderView - b.OrderView;
          });
          let fixedOr = [];
          for (i = 0; i < sortedOr.length / 2; i++) {
            let counter = i * 2;
            let orQuest = {
              a: sortedOr[counter],
              b: sortedOr[counter + 1]
            }
            fixedOr.push(orQuest)
          }
          this.setState({
            ioQuestions: sortedIo,
            bigQuestions: sortedBig,
            orQuestions: fixedOr
          })
        },
        (error) => {
          console.log("err post=", error);
        });
  }



  render() {
    return (
      <div className="App">
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" >
                  <LogAReg />
                </Route>
                <Route path="/quiz/:id/:secondTime"  >
                  <Quiz bigQuestions={this.state.bigQuestions} orQuestions={this.state.orQuestions} ioQuestions={this.state.ioQuestions} />
                </Route>
                <Route path="/intro/:email" >
                  <Intro getQuestions={this.fetchGetQuestion} />
                </Route>
                <Route path="/game/:profile/:id" >
                  <Game />
                </Route>
                <Route path="/home/:id/:profile/:secondTime" >
                  <Home getFriends = {this.fetchFriends} getUsersId ={this.getUsersId}/>
                </Route>
                <Route path="/findings/:profile/:id" >
                  <Findings />
                </Route>
                <Route path="/profile/:profile/:id" >
                  <Profile />
                </Route>
                <Route path="/BarChart" >
                  <BarChart />
                </Route>
                <Route path="/PieChart" >
                  <PieChart />
                </Route>
                <Route path="/friendList/:id/:profile" >
                  <FriendList friends={this.state.friends} req={this.state.req} renderFriends={this.fetchFriends}/>
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
