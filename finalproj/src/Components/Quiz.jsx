import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import '../CSS/Quiz.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import male from '../Images/Male.png';
import female from '../Images/Female.png';
import about from '../Images/about.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import next from '../Images/next2.png';
import Container from 'react-bootstrap/Container';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: false,
            ioQuestions: this.props.ioQuestions,//getting the io-oi questions 
            orQuestions: this.props.orQuestions,//getting the or questions 
            bigQuestions: this.props.bigQuestions,//getting the big 5 questions 
            id: this.props.match.params.id,//get the id from params
            gender: "",
            age: "",
            education : "",
            job: "",
            dateStamp: "" //can be deleted later. not needed
        }

    }

    handleEduc = (e) =>{
        this.setState({
            education: e.target.value
        });
    }

    handleGender = (e) =>{
        this.setState({
            gender: e.target.value
        });
    }

    handleAge = (e) =>{
        this.setState({
            age: e.target.value
        });
    }
  
    render() {
        return (
           <Container>
                <Row className="align">
                    <img className="about" alt="" src={about} style={{ paddingTop: "10px", width:"100px",height:"40px",background: "#0A0A0A"}} />
                    <Row className="card2" style={{ paddingTop: "0" }}>
                            <Row className="gender">
                                <Col>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 style={{ float: "Right" }}>מגדר</h5>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col xs={12}>
                                            <Row>
                                                <Col xs={6}>
                                                    <label>
                                                        <input className="gender-radio" type="radio" name="gender" value="female" id="female" onClick={this.handleGender}/>
                                                        <img src={female} alt="" />
                                                        <h5 style={{float:"right"}}>אישה</h5>
                                                    </label>
                                                </Col>
                                                <Col xs={6}>
                                                    <label>
                                                        <input className="gender-radio" type="radio" name="gender" value="male" id="male" onClick={this.handleGender}/>
                                                        <img src={male} alt=""/>
                                                        <h5 style={{float:"right"}}>גבר</h5>
                                                    </label>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="age">
                                <Col>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 style={{ float: "Right" }}>גיל</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <RangeSlider 
                                            value={this.state.age}
                                            onChange={this.handleAge}
                                            tooltip="on"
                                            tooltipPlacement='top'
                                            variant="primary"
                                            size="lg"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="role">
                                <Col>
                                    <Row>
                                        <Col xs={12}>
                                            <h5 style={{ float: "Right" }}>תפקיד</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Row xs={3}>
                                                <Col>
                                                    <label>
                                                        <input type="radio" className="role-radio" name="educ" value="student" id="student" onClick={this.handleEduc}/>
                                                        <h5>סטודנט</h5>
                                                    </label>
                                                </Col>
                                                <Col>
                                                    <label>
                                                        <input type="radio" className="role-radio" name="educ" value="manager" id="manager" onClick={this.handleEduc}/>
                                                        <h5>מנהל</h5>
                                                    </label>
                                                </Col>
                                                <Col>
                                                    <label>
                                                        <input type="radio" className="role-radio" name="educ" value="sManager" id="sManager" onClick={this.handleEduc}/>
                                                        <h5>מנהל בכיר</h5>
                                                    </label>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                       
                    
                </Row>
            </Row >
           </Container>
        );
    }
}
export default withRouter(Quiz);