import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import { browserHistory } from "react-router";
import '../CSS/Login.css';
import $ from "jquery";
import swal from 'sweetalert';

class LogAReg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            sPassword: "",
            showPassword: "false",
            rememberMe: "false",
            mode: "login",
            local: false,
            profile: this.props.profile
        }

        this.apiUrl = 'http://localhost:51298/api/users';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users';//Dont forget to change
        }
    }

    goHome = () => {
        this.props.history.replace("/home/" + this.state.id + "/" + this.state.profile + "/" + true, "urlhistory");
    }

    btnFetchGetIfo = () => {
        let url = this.apiUrl;
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
                    let notExists = false;
                    for (var i = 0; i < result.length; i++) {
                        if (this.state.email === result[i].Email) {
                            this.checkMatch(result[i]);
                            break;
                        }
                        if(this.state.email != result[i].Email && i === result.length-1){
                            notExists = true;
                        }
                    }


                    if(notExists){
                        swal("!שגיאה", "משתמש לא קיים, נא להירשם")
                    }
                    

                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    fetchRegister = (u) => {
        //pay attention case sensitive!!!! should be exactly as the prop in C#!
        let url = this.apiUrl
        fetch(url, {//checking first if theres a user with the same email
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
                    let exists = true;
                    for (var i = 0; i < result.length; i++) {
                        if (this.state.email === result[i].Email) {
                            swal("!שגיאה", "האימייל הנבחר כבר רשום, נא לבחור כתובת אחרת");
                            break;
                        }
                        if(this.state.email != result[i].Email && i === result.length-1){
                            exists = false;
                        }
                    }
                    if(!exists){
                        fetch(url, {//registering the user to the system
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
                                    swal("!מצויין", "יאללה להתחבר")
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

    register = () => {// check all the fields and then register
        let email = this.state.email.toLowerCase();
        let password = this.state.password;
        let sPassword = this.state.sPassword;
        var re = /\S+@\S+\.\S+/;
        let emailType = re.test(email);
        if (emailType) {
            if (email === "" || password === "" || sPassword === "") {
                swal("!שגיאה", "אנא מלא את כל האיזורים");
            }
            else {
                if (password === sPassword) {//making an object exectly as in serverSide
                    let u = {
                        Email: email,
                        Password: password,
                        Admin: false,
                    }
                    this.fetchRegister(u);//move to check that user doesnt exist and then register it
                }
                else {
                    swal("!שגיאה", "הסיסמאות לא תואמות");
                }
            }
        }
        else {
            swal("!שגיאה", "אנא הקפד על פורמט של אימייל")
        }

    }

    checkMatch = (user) => {// checking that passwords matche
        let password = this.state.password;
        if (String(user.Password) === password) {
            if ($('#rememberMe').is(":checked")) {
                let uName = this.state.email;
                let password = this.state.password;
                localStorage.uName = uName;
                localStorage.pass = password;
                localStorage.rememberMe = true;
            }
            else {
                localStorage.removeItem("uName");
                localStorage.removeItem("pass");
                localStorage.removeItem("rememberMe");
            }

            if (user.Admin) {
                let direction = "/HomeAdmin/";//tbd
                this.props.history.replace(direction, "urlhistory");
            }
            else {
                if (user.SecondTime === true) {
                    this.props.getQuestions();
                    let secondTime = user.SecondTime;
                    let id = user.UserId;
                    let profile = user.Profile;
                    let direction = "/home/" + id + "/" + profile + "/" + secondTime;
                    this.props.history.replace(direction, "urlhistory");
                }
                else {
                    let direction = "/intro/" + this.state.email;
                    this.props.history.replace(direction, "urlhistory");
                }
            }


        }
        else {
            swal("!שגיאה", "משהו לא תקין \nאנא נסה שוב");
        }
    }




    showPassword = () => {//show or hide password
        if (this.state.showPassword === "false") {
            $('#password').prop('type', 'text');
            this.setState({
                showPassword: "true"
            });
        }
        else {
            $('#password').prop('type', 'password');
            this.setState({
                showPassword: "false"
            });
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        });

    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        });

    }

    changeSPassword = (e) => {
        this.setState({
            sPassword: e.target.value
        });
    }

    changeMode = () => {// changing the mode from login to register
        if (this.state.mode === "login") {
            this.setState({
                mode: "register"
            });
            $(".card").addClass("extend");
            $("#login").removeClass("selected");
            $("#register").addClass("selected");
        }
        else {
            this.setState({
                mode: "login"
            });
            $(".card").removeClass("extend");
            $("#login").addClass("selected");
            $("#register").removeClass("selected");
        }
    }

    componentDidMount() {
        if (localStorage.rememberMe) {
            $("#rememberMe").prop("checked", true);
            $("#email").val(localStorage.uName);
            $("#password").val(localStorage.pass);
            this.setState({
                email: localStorage.uName,
                password: localStorage.pass
            })
        }
    }



    render() {
        return (
            <div className="align">
                <img className="logo" src={process.env.PUBLIC_URL + "/Images/logo.png"} style={{ paddingTop: "15px" }} />
                <div className="card" style={{ paddingTop: "0", backgroundColor: "#0A0A0A" }}>
                    <div className="head">
                        <div></div>
                        <a id="login" className="selected" onClick={this.changeMode}>Login</a>
                        <a id="register" onClick={this.changeMode}>Register</a>
                        <div></div>
                    </div>
                    <div className="tabs">
                        <div className="form">
                            <div className="inputs" style={{ paddingBottom: "15px" }}>
                                <div className="input">
                                    <input type="text" id="email" placeholder="Email" onChange={this.changeEmail} />
                                    <img src={process.env.PUBLIC_URL + "/Images/mail.svg"} />
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Password" id="password" onChange={this.changePassword} />
                                    <img src={process.env.PUBLIC_URL + "/Images/pass.svg"} />
                                </div>
                                <label className="checkbox" style={{ float: "left" }}>
                                    <input type="checkbox" id="rememberMe" />
                                    <span>Remember me</span>
                                </label>
                                <label className="checkbox" style={{ float: "right" }} >
                                    <input type="checkbox" onClick={this.showPassword} />
                                    <span>Show Password</span>
                                </label>
                            </div>
                            <button onClick={this.btnFetchGetIfo}>Login</button>
                        </div>

                        <div className="form">
                            <div className="inputs">
                                <div className="input">
                                    <input type="email" placeholder="Email" onChange={this.changeEmail} autoComplete="off" />
                                    <img src={process.env.PUBLIC_URL + "/Images/mail.svg"} />
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Password" onChange={this.changePassword} />
                                    <img src={process.env.PUBLIC_URL + "/Images/pass.svg"} />
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Confirm Passwrod" onChange={this.changeSPassword} />
                                    <img src={process.env.PUBLIC_URL + "/Images/pass.svg"} />
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