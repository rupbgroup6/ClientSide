import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../CSS/rest.css";
import welcomePic from '../Images/welcome.JPG';

class Intro extends Component {
    constructor(props) {
        super(props);
    }

  
    render() {
        return (
           <div>
                <Container fluid style={{padding:"0",marginLeft:"15px"}}>
                    <Row className="header">
                        <Col xs={4}><h2 style={{float:"right",color:"#33adff"}}>IO</h2></Col>
                        <Col xs={4}><h2 style={{textAlign:"center",color:"#fff"}}>-</h2></Col>
                        <Col xs={4}><h2 style={{float:"left",color:"#fff"}}>OI</h2></Col>
                        <Col xs={12} style={{padding:"0"}}>
                            <img src={welcomePic} alt=""/>
                        </Col>
                    </Row>
                    <Row xs={2} className="about">
                        <Col xs={6} style={{color:"black",textAlign:"center",border:"none",backgroundColor:"white",marginLeft:"0"}}><h2 className="logo" style={{float:"right"}}>About</h2></Col>
                        <Col xs={6} style={{color:"#33adff",textAlign:"center",border:"none",backgroundColor:"white"}}><h2 className="logo">IO&nbsp;-&nbsp;OI</h2></Col>
                    </Row>
                </Container>
           </div>
        );
    }
}
export default withRouter(Intro);