
import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from '../../Images/homeLogo.png';
import friend from '../../Images/friend.png';
import profile from '../../Images/profile2.jpg';
import quiz from '../../Images/toQuiz.png';
import users from '../../Images/users.png';
import Button from 'react-bootstrap/Button';


class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }

    logOut = () => {
        localStorage.removeItem("uName");
        localStorage.removeItem("pass");
        localStorage.removeItem("rememberMe");
        let direction = "/";
        this.props.history.replace(direction, "urlhistory");

    }






    render() {
        return (
            <div className="align6">
                <div className="card6">
                    <Row>
                        <Col className="all">
                            <Row>
                                <Col>
                                    <Button onClick={this.logOut} variant="secondary" style={{ float: "right" }}><i class="fas fa-sign-out-alt"></i></Button>
                                </Col>
                            </Row>
                            <Row className="header4">
                                <Col className="header4">
                                    <h6 className="header4" style={{ textAlign: "center", paddingTop: "1px", color: "black" }}> תפריט</h6>
                                </Col>
                            </Row>

                            <Row className="logo6">
                                <Col xs={12} className="logo6">
                                    <img className="homeLogo" alt="" src={home} style={{ paddingTop: "10px", paddingBottom: "10px" }} />
                                </Col>
                            </Row>


                            <Row className="menu" style={{ paddingTop: "10px" }}>
                                <Col className="menu">
                                    <Row class="btn-group" role="group" aria-label="Basic example" >
                                        <Col xs={4}></Col>
                                        <Col xs={4}> <Link to={"/ExcelReport"}>  <button type="button" style={{ height: "120%", width: "120%" }}><img style={{ marginLeft: "5px" }} src={quiz} alt=""></img><h6>הורדת קבצי אקסל</h6></button></Link></Col>

                                        <Col xs={4}></Col>
                                    </Row>
                                </Col>
                            </Row>


                            <Row className="menu" style={{ paddingTop: "40px" }}>
                                <Col className="menu">
                                    <Row class="btn-group" role="group" aria-label="Basic example" >
                                        <Col xs={4}></Col>
                                        <Col xs={4}><Link to={"/BarChart"}> <button type="button" style={{ height: "120%", width: "120%" }}><img src={profile} alt=""></img><h6 style={{ marginTop: "5px" }}>ממוצע פרופילים</h6></button></Link></Col>
                                        <Col xs={4}></Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="menu" style={{ paddingTop: "40px" }}>
                                <Col className="menu">
                                    <Row class="btn-group" role="group" aria-label="Basic example" >
                                        <Col xs={4}></Col>
                                        <Col xs={4}><Link to={"/PieChart"}> <button type="button" style={{ height: "120%", width: "120%" }}><img style={{ height: "120%" }} src={users} alt=""></img><h6>כמות פרופילים</h6></button></Link></Col>
                                        <Col xs={4}></Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}
export default withRouter(HomeAdmin);