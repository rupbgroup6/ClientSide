import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Login.css';
import logo from '../Images/logo.png';
import email from '../Images/mail.svg';
import password from '../Images/pass.svg';
import $ from "jquery";
import swal from 'sweetalert';

class LogAReg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            sPassword:"",
            showPassword : "false",
            rememberMe: "false",
            mode:"login",
            local: false,
        }

        this.apiUrl = 'http://localhost:51298/api/users';
        if (!this.state.local) {
          this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users';//Dont forget to change
        }
    }

    btnFetchGetIfo = () => {//get all users and match info before login
        fetch(this.apiUrl, {
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
                let counter = 0;
            
                for(var i =0 ; i< result.length ; i++){
                    if(this.state.email.toLowerCase() === result[i].Email){
                        this.checkMatch(result[i]);
                        counter++;
                    }
                }
                if(counter === 0){
                    swal("Error!","There's no such user \nPlease register")
                }
            },
            (error) => {
              console.log("err post=", error);
            });
      }

      fetchRegister = (u) =>{
        //pay attention case sensitive!!!! should be exactly as the prop in C#!

        fetch(this.apiUrl, {//checking first if theres a user with the same email
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
                  let notExists = false;
                  for(var i =0 ; i< result.length ; i++){
                      if(this.state.email.toLowerCase() === result[i].Email){
                        swal("Error!","Email has already been registeredPlease choose a different email")
                        break;
                      }
                      else if(i === result.length-1){
                          notExists = true;
                      }
                  }
                  if(notExists){
                    fetch(this.apiUrl, {//registering the user to the system
                        method: 'POST',
                        body: JSON.stringify(u),
                        headers: new Headers({
                          'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
                        })
                    
                      })
                        .then(res => {
                          console.log('res=', res);
                          return res.json()
                        })
                        .then(
                          (result) => {
                            console.log("fetch POST= ", result);
                            swal("Great!", "Let's log in")
                          },
                          (error) => {
                            console.log("err post=", error);
                          });
                  }
              },
              (error) => {
                console.log("err post=", error);
              });
      }

      register = () =>{// check all the fields and then register
          let email = this.state.email.toLowerCase();
          let password = this.state.password;
          let sPassword = this.state.sPassword;
          if(email === "" || password === ""|| sPassword === ""){
            swal("Error!","Please fill all the fields");
          }
          else{
            if(password === sPassword){//making an object exectly as in serverSide
                let u = {
                    Email: email,
                    Password: password,
                    Admin: false,
                }
                this.fetchRegister(u);//move to check that user doesnt exist and then register it
            }
            else{
                swal("Error!", "Passwords don't match");
            }
          }
          
      }

      checkMatch = (user) =>{// checking that passwords matche
        let password = this.state.password;
            if(String(user.Password) === password){
                let temp = "/intro/" + this.state.email;
                this.props.history.replace(temp);
            }
            else{
                swal("Error!", "Something was incorrect \nPlease try again");
            }
        }
      

      

    showPassword = () =>{//show or hide password
        if(this.state.showPassword === "false"){
            $('#password').prop('type', 'text');
            this.setState({
                showPassword: "true"
            });
        }
        else{
            $('#password').prop('type', 'password');
            this.setState({
                showPassword: "false"
            });
        }
    }

    changeEmail = (e) =>{
        this.setState({
            email: e.target.value
        });
        
    }

    changePassword = (e) =>{
        this.setState({
            password: e.target.value
        });
        
    }

    changeSPassword = (e) =>{
        this.setState({
            sPassword: e.target.value
        });
    }

    changeMode = () =>{// changing the mode from login to register
        if(this.state.mode === "login"){
            this.setState({
                mode: "register"
            });
            $(".card").addClass("extend");
		$("#login").removeClass("selected");
		$("#register").addClass("selected");
        }
        else{
            this.setState({
                mode: "login"
            });
            $(".card").removeClass("extend");
		$("#login").addClass("selected");
		$("#register").removeClass("selected");
        }
    }

   
  
    render() {
        return (
           <div className="align">
               <img className="logo" src={logo} style={{paddingTop:"15px"}}/>
               <div className="card" style={{paddingTop:"0",backgroundColor:"#0A0A0A"}}>
                    <div className="head">
                        <div></div>
                        <a id="login" className="selected" onClick={this.changeMode}>Login</a>
                        <a id="register" onClick={this.changeMode}>Register</a>
                        <div></div>
                   </div>
                   <div className="tabs">
                        <div className="form">
                            <div className="inputs" style={{paddingBottom:"15px"}}>
                                <div className="input">
                                    <input type="text" placeholder="Email" onChange={this.changeEmail}/>
                                    <img src={email}/>
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Password" id="password" onChange={this.changePassword}/>
                                    <img src={password}/>
                                </div>
                                <label className="checkbox" style={{float:"left"}}>
                                    <input type="checkbox"/>
                                    <span>Remember me</span>
                                </label>
                                <label className="checkbox" style={{float:"right"}} >
                                    <input type="checkbox" onClick={this.showPassword}/>
                                    <span>Show Password</span>
                                </label>
                            </div>
                            <button onClick={this.btnFetchGetIfo}>Login</button>
                        </div>

                        <div className="form">
                            <div className="inputs">
                                <div className="input">
                                    <input type="text" placeholder="Email" onChange={this.changeEmail}/>
                                    <img src={email}/>
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Password" onChange={this.changePassword}/>
                                    <img src={password}/>
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Confirm Passwrod" onChange={this.changeSPassword}/>
                                    <img src={password}/>
                                </div>
                            </div>
                            <button onClick={this.register}>Register</button>
                        </div>
                   </div>
               </div>
           </div>
        );
    }
}
export default withRouter(LogAReg);