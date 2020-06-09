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
    }

    
  
    render() {
        return (
            <div className="cont">
            <div className="align" >
                
                <div className="card3" style={{ marginTop: "3%",marginBottom:"3%" }}>

                <Row className="header2">    
                <Col xs={2}></Col>
                <Col xs={8}><img className="title" alt="" src={iooi} style={{ paddingTop: "10px" }} /></Col>   
                <Col xs={2}></Col>         
               </Row>

                    <Row style={{paddingBottom: "10%"}}>

<Col xs={12}>
                        <img alt="" className="typeOfManager" src={typeOfManager} style={{ paddingTop: "10px" }} />
                        </Col>
                    </Row>

                    <Row className="game">
                        <Col xs={12}>
                            <div class="btn-group" role="group" aria-label="Basic example" >
                                <div><button id="btnGame"  onMouseOver={this.mouseOver} type="button" ><img classNama={blue} src={blue} alt="" ></img></button></div>
                                <div><img classNama={logovs} src={logovs} alt=""></img></div>
                                <div><button type="button"><img classNama={red} src={red} alt=""></img></button></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="type">
                        
                        <Col><button><h5>Outside - in </h5><h6>
                            אתם רוצים להצליח בשווקים
בינלאומיים</h6></button></Col>
                        <Col xs={6} style={{marginRight:"5px"}}><button><h5>                       Inside-out </h5><h6>
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