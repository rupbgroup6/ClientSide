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
            local: true
        }

        this.apiUrl = 'tbd';//Dont forget to change
        if (!this.state.local) {
          this.apiUrl = 'tbd';//Dont forget to change
        }
    }

    btnFetchGetIfo = () => {
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
            (user) => {
              this.checkMatch(user);
            },
            (error) => {
              console.log("err post=", error);
            });
      }

      fetchRegister = (u) =>{
        //pay attention case sensitive!!!! should be exactly as the prop in C#!

        fetch(this.apiUrl, {
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
              swal("Great!", "Let's log in", "success");
            },
            (error) => {
              console.log("err post=", error);
            });
      }

      register = () =>{
          let email = this.state.email;
          let password = this.state.password;
          let sPassword = this.state.sPassword;
          if(email === "" || password === ""|| sPassword === ""){
            swal("Error", "Please fill all the fields");
          }
          else{
            if(password === sPassword){
                let u = {
                    Email: email,
                    Password: password
                }
                this.fetchRegister(u);
            }
            else{
              swal("Error", "Passwords don't match");
            }
          }
          
      }

      checkMatch = (user) =>{//must correct later!!
        if('123' === this.state.email){
            if('123' === this.state.password){
                this.props.history.push("/intro");
               
            }
            else{
                swal("Error", "Something is incorrect \nPlease try again");
            }
        }
      }

      

    showPassword = () =>{
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

    changeMode = () =>{
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
               <div className="card" style={{paddingTop:"0"}}>
                    <div className="head">
                        <div></div>
                        <a id="login" className="selected" onClick={this.changeMode}>Login</a>
                        <a id="register" onClick={this.changeMode}>Register</a>
                        <div></div>
                   </div>
                   <div className="tabs">
                        <form>
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
                            <button onClick={this.checkMatch}>Login</button>
                        </form>

                        <form>
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
                            <button>Register</button>
                        </form>
                   </div>
               </div>
           </div>
        );
    }
}
export default withRouter(LogAReg);