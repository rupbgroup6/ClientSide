import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import {browserHistory} from "react-router";
import '../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../Images/ioLogo.png';
import friendList from '../Images/FriendList.png';
import IconHome from '../Images/IconHome.png';
import $ from "jquery";
import swal from 'sweetalert';


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
            $(".card9").addClass("extend");
		$("#friend").removeClass("selected");
		$("#request").addClass("selected");
        }
        else{
            this.setState({
                mode: "login"
            });
            $(".card9").removeClass("extend");
		$("#friend").addClass("selected");
		$("#request").removeClass("selected");
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
                   <Link to={"/home"}> <img className="iconHome" src={IconHome}/></Link>
                   </Col>
               </Row>
               
  
           
                 
                   <Row>
                   
                       <Col xs={2}></Col>
                       <Col xs={8}><button><img className="friendLogo" src={friendList} style={{paddingTop:"15px"}}/></button></Col>
                       <Col xs={2}></Col>
                   </Row>

                   <Row>
                       <Col xs={12} className="input">
                           <input type="text" placeholder="Search" />
                       </Col>
                   </Row>

                   <div className="card9" style={{paddingTop:"0",backgroundColor:"#0A0A0A"}}>
                   
                    <div className="head">
                        <div></div>
                        <a id="friend" className="selected" onClick={this.changeMode}>Friend</a>
                        <a id="request" onClick={this.changeMode}>Requests</a>
                        <a id="feedback" onClick={this.changeMode}>Feedback</a>
                        <div></div>
                   </div>

                   <div className="tabs">
                        <div className="form">             
                         
                         <Row className="friend">
                             <Col xs={12}>
                             <button  style={{marginTop:"25px", marginLeft:"25px",background: "#33adff" , height:"35px",width:"83px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700", float:"left"}}>Remove</button>   
                             <button  style={{marginTop:"25px", marginLeft:"15px", background: "#33adff" , height:"35px",width:"83px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700", float:"left"}}>Feedback</button>
                             <p  style={{color:"white", float:"right", marginRight:"15px"}}><b style={{color:"white", float:"right"}}>Anael bar dahan</b></p> <br/>
                             </Col>

                         </Row>

                        
                        </div>

                        <div className="form">

                        <Row className="friend">
                             <Col xs={12}>
                             <button  style={{marginTop:"25px", marginLeft:"25px",background: "#33adff" , height:"35px",width:"83px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700", float:"left"}}>Ignore</button>   
                             <button  style={{marginTop:"25px", marginLeft:"15px", background: "#33adff" , height:"35px",width:"83px" , borderRadius:"5px", color:" #003B15", fontSize:"17px", fontWeight:"700", float:"left"}}>Accept</button>
                             <p  style={{color:"white", float:"right", marginRight:"15px"}}><b style={{color:"white", float:"right"}}>blabla blabla</b></p> <br/>                
                             </Col>
                         </Row>
            
                        </div>
                   </div>
               </div>
           </div>
        );
    }
}
export default withRouter(FriendList);

