import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import {browserHistory} from "react-router";
import '../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../Images/ioLogo.png';
import friendList from '../Images/FriendList.png';
import $ from "jquery";
import swal from 'sweetalert';
import IconHome from '../Images/IconHome.png';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



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
               <Row>
                   <Col xs={10}>
                   <img className="logo9"  src={logo} style={{paddingTop:"15px"}}/>
                   </Col>

                   <Col xs={1}>
                   <img className="iconHome" src={IconHome}/>
                   </Col>
               </Row>
               
  
               <div className="card9" style={{paddingTop:"0",backgroundColor:"#0A0A0A"}}>
                   <Row>
                   
                       <Col xs={2}></Col>
                       <Col xs={8}><Link to={"/home"}><button><img className="friendLogo" src={friendList} style={{paddingTop:"15px"}}/></button></Link></Col>
                       <Col xs={2}></Col>
                   </Row>

                   <Row>
                       <Col xs={12} className="input">
                           <input type="text" placeholder="Search" onChange={this.changeEmail}/>
                       </Col>
                   </Row>

                   
                    <div className="head">
                        <div></div>
                        <a id="login" className="selected" onClick={this.changeMode}>Friend</a>
                        <a id="register" onClick={this.changeMode}>Requests</a>
                        <div></div>
                   </div>
                   <div className="tabs">
                        <div className="form">             
                         
                         <Row className="friend">
                             <Col>
                             <p><b style={{color:"white"}}>Anael bar dahan</b></p> <br/>
                             <button  style={{background: "#33adff" , height:"35px",width:"70px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700"}}>משוב</button>   
                             <button  style={{marginLeft:"10px", background: "#33adff" , height:"35px",width:"70px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700"}}>הסר</button>

                             </Col>

                         </Row>
                         
                        
                        </div>

                        <div className="form">
                            <div className="inputs">
                                <div className="input">
                                    <input type="email" placeholder="Email" onChange={this.changeEmail} autocomplete="off"/>
                                    
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Password" onChange={this.changePassword}/>
                                    
                                </div>
                                <div className="input">
                                    <input type="password" placeholder="Confirm Passwrod" onChange={this.changeSPassword}/>
                                    
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
export default withRouter(FriendList);

