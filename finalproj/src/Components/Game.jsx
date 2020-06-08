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

class Game extends Component {
    constructor(props) {
        super(props);
    }

    
  
    render() {
        return (
            <div>
            <div className="align" >
                <Row>Type of Manager <br/> </Row>
                <div className="card3" style={{ paddingTop: "0" }}>

                    <Row className="game" >
                        <Col>
                            <div class="btn-group" role="group" aria-label="Basic example" >
                                <div><button type="button"><img classNama={blue} src={blue} alt="" ></img></button></div>
                                <div><button type="button"><img classNama={logovs} src={logovs} alt=""></img></button></div>
                                <div><button type="button"><img classNama={red} src={red} alt=""></img></button></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="type">
                        <Col><h6>Outside - in <br/>
                            אתם רוצים להצליח בשווקים 
                            בינלאומיים</h6></Col>
                        <Col><h6>                       Inside-out <br/>
                                פיתוח חדשנות פורצת דרך הבנת השוק 
                                וצרכיו</h6></Col>
                    </Row>

                </div>
            </div >
        </div >
        );
    }
}
export default withRouter(Game);