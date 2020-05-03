import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Home.css';
import $ from "jquery";
import swal from 'sweetalert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from '../Images/homeLogo.png';
import book from '../Images/book.png';
import friend from '../Images/friend.png';
import apostrophes from '../Images/Apostrophes.png';
import glass from '../Images/glass2.png';
import profile from '../Images/profile2.jpg';
import quiz from '../Images/toQuiz.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }

    render() {
        return (
            <div className="cont3">

                <div className="align">

                    <div className="card4" style={{ marginTop: "3%", marginBottom: "3%" }}>
                        <Row className="header3">
                            <Col>
                                <h6 style={{ textAlign: "center", paddingTop: "1px", color: "black" }}>HOME</h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <img className="homeLogo" alt="" src={home} style={{ paddingTop: "10px" }} />
                            </Col>
                        </Row>

                        <Row className="menu">
                            <Row>
                                <div class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}> <button type="button" style={{ float: "right" }}><img src={book} alt=""></img><h6>מחקר</h6></button></Col>
                                    <Col xs={5}><button type="button" style={{ float: "left" }}><img src={friend} alt="" ></img><h6 style={{}}>רשימת חברים</h6></button> </Col>
                                    <Col xs={1}></Col>
                                </div>
                            </Row>

                            <Row style={{ marginTop: "20px" }}>
                                <div class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}> <button type="button" style={{ float: "right" }}><img style={{ paddingTop: "3px" }} src={quiz} alt=""></img><h6>שאלונים</h6></button></Col>
                                    <Col xs={5}><button type="button" style={{ float: "left" }}><img src={apostrophes} alt="" ></img><h6>ציטטות מנהלים</h6></button> </Col>
                                    <Col xs={1}></Col>
                                </div>
                            </Row>

                            <Row style={{ marginTop: "20px" }}>
                                <div class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}> <button type="button" style={{ float: "right" }}><img style={{ paddingTop: "3px" }} src={glass} alt=""></img><h6>ממצאים ותובנות</h6></button></Col>
                                    <Col xs={5}><button type="button" style={{ float: "left" }}><img style={{ paddingTop: "5px" }} src={profile} alt="" ></img><h6>סוגי פרופיל</h6></button> </Col>
                                    <Col xs={1}></Col>
                                </div>
                            </Row>
                        </Row>

                    </div>
                </div >
            </div >
        );
    }
}
export default withRouter(Home);