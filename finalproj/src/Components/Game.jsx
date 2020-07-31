import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import '../CSS/Game.css';
import $ from "jquery";
import swal from 'sweetalert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import blue from '../Images/blue.png';
import logovs from '../Images/logoVs.jpg';
import red from '../Images/red.png';
import iooi from '../Images/ioLogo.png';
import typeOfManager from '../Images/typeOfManager.png';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            profile: this.props.match.params.profile,
            id: this.props.match.params.id,
            secondTime: this.props.match.params.secondTime
        }
    }

    CheckProfileOI = () => {
        let profile = this.state.profile;
        if(profile === "המנתח" || profile === "המתאים" || profile === "המעיז" || profile === "השורד" || profile === "המאזן" || profile === "האלוף" ){
            swal({
                title: "!מצוין",
                text: "בחירה נכונה",
                buttons: {
                    cancel: "ביטול",
                    ok :{
                    text: "אישור",
                    value: "ok"
                    }
                }
              })
              .then((value) =>{
                switch(value){
                    case "ok":{
                        if(this.state.secondTime === "true"){
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + true + "/" + false;
                            this.props.history.push(direction);
                        }
                        else{
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + false + "/" + false;
                            this.props.history.push(direction);
                        }
                        
                    }
                }
              });
        }
        else{
            swal({
                title: "!טעות",
                text: "בחירה לא נכונה",
                buttons: {
                    cancel: "ביטול",
                    ok :{
                    text: "אישור",
                    value: "ok"
                    }
                }
              })
              .then((value) =>{
                switch(value){
                    case "ok":{
                        if(this.state.secondTime === "true"){
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + true + "/" + false;
                            this.props.history.push(direction);
                        }
                        else{
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + false + "/" + false;
                            this.props.history.push(direction);
                        }
                    }
                }
              });
        }
    }

    CheckProfileIO = () => {
        let profile = this.state.profile;
        if(profile === "המאמין" || profile === "המהפכן" || profile === "המחושב" || profile === "השורד" ||profile === "המאזן" ||profile === "האלוף"){
            swal({
                title: "!מצוין",
                text: "בחירה נכונה",
                buttons: {
                    cancel: "ביטול",
                    ok :{
                    text: "אישור",
                    value: "ok"
                    }
                }
              })
              .then((value) =>{
                switch(value){
                    case "ok":{
                        if(this.state.secondTime === "true"){
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + true + "/" + false;
                            this.props.history.push(direction);
                        }
                        else{
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + false + "/" + false;
                            this.props.history.push(direction);
                        }
                    }
                }
              });
        }
        else{
            swal({
                title: "!טעות",
                text: "בחירה לא נכונה",
                buttons: {
                    cancel: "ביטול",
                    ok :{
                    text: "אישור",
                    value: "ok"
                    }
                }
              })
              .then((value) =>{
                switch(value){
                    case "ok":{
                        if(this.state.secondTime === "true"){
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + true +"/" + false;
                            this.props.history.push(direction);
                        }
                        else{
                            let direction = "/profile/" + this.state.profile +"/" + this.state.id + "/" + false + "/" + false;
                            this.props.history.push(direction);
                        }
                    }
                }
              });
        }
    }

    render() {
        return (
            <div className="cont">
                <div className="align" >

                    <div className="card3" style={{ marginTop: "3%", marginBottom: "3%" }}>

                        <Row className="header2">
                            <Col xs={2}></Col>
                            <Col xs={8}><img className="title" alt="" src={process.env.PUBLIC_URL + "/Images/ioLogo.png"} style={{ paddingTop: "10px" }} /></Col>
                            <Col xs={2}></Col>
                        </Row>

                        <Row style={{ paddingBottom: "10%" }}>

                            <Col xs={12}>
                                <img alt="" className="typeOfManager" src={process.env.PUBLIC_URL + "/Images/typeOfManager.png"} style={{ paddingTop: "10px" }} />
                            </Col>
                        </Row>

                        <Row className="game">
                            <Col xs={12}>
                                <div class="btn-group" role="group" aria-label="Basic example" >
                                    <div><img src={process.env.PUBLIC_URL + "/Images/blue.png"} alt="" ></img></div>
                                    <div><img src={process.env.PUBLIC_URL + "/Images/logoVs.png"} alt=""></img></div>
                                    <div><img src={process.env.PUBLIC_URL + "/Images/red.png"} alt=""></img></div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="type">

                            <Col><button onClick={this.CheckProfileOI}><h5>Outside - in </h5><h6>
                                אתם רוצים להצליח בשווקים
                                בינלאומיים</h6></button></Col>
                            <Col xs={6} style={{ marginRight: "5px" }}><button onClick={this.CheckProfileIO}><h5>                       Inside-out </h5><h6>
                                פיתוח חדשנות פורצת דרך הבנת השוק
                                וצרכיו</h6></button></Col>
                        </Row>

                    </div>
                </div >
            </div >
        );
    }
}

export default withRouter(Game);