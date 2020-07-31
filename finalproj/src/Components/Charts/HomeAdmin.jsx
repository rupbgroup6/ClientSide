
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
                                    <img className="homeLogo" alt="" src={process.env.PUBLIC_URL + "/Images/homeLogo.png"} style={{ paddingTop: "10px", paddingBottom: "10px" }} />
                                </Col>
                            </Row>

                            <Row className="menu" style={{ marginTop: "20px" }} >
                                <Col className="menu">
                                    <Row className="menu" class="btn-group" role="group" aria-label="Basic example" >
                                        <Col xs={1}></Col>
                                        <Col xs={5}> <Link to={"/ExcelReport"}>  <button type="button" style={{ height: "120%", width: "120%" }}><img style={{ marginLeft: "5px" }} src={process.env.PUBLIC_URL + "/Images/toQuiz.png"} alt=""></img><h6>הורדת קבצי אקסל</h6></button></Link></Col>
                                        <Col xs={5}><Link to={"/RadialChart"}> <button type="button" style={{ height: "120%", width: "120%" }}><img src={process.env.PUBLIC_URL + "/Images/profile2.jpg"} alt=""></img><h6 style={{ marginTop: "5px" }}>ממוצע פרופילים</h6></button></Link></Col>
                                        <Col xs={1}></Col>
                                    </Row >
                                </Col>
                            </Row>


                            <Row className="menu" style={{ marginTop: "20px" }} >
                                <Col className="menu">
                                    <Row className="menu" class="btn-group" role="group" aria-label="Basic example" >
                                        <Col xs={1}></Col>
                                        <Col xs={5}><Link to={"/VComposedChart"}> <button type="button" style={{ height: "120%", width: "120%" }}><img style={{ height: "120%" }} src={process.env.PUBLIC_URL + "/Images/users.png"} alt=""></img><h6>כמות פרופילים</h6></button></Link></Col>
                                        <Col xs={5}><Link to={"/BChart"}> <button type="button" style={{ height: "120%", width: "120%" }}><img style={{ height: "120%" }} src={process.env.PUBLIC_URL + "/Images/users.png"} alt=""></img><h6> קשרי חברויות בין פרופילים</h6></button></Link></Col>
                                        <Col xs={1}></Col>
                                    </Row >
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