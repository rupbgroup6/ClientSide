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
import Button from 'react-bootstrap/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.match.params.profile,
            id: this.props.match.params.id,
            secondTime: this.props.match.params.secondTime
        }



    }

    goResearch = () => {
        window.open("https://www.emerald.com/insight/content/doi/10.1108/IMR-01-2018-0016/full/html");
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
                <div className="card6" style={{ marginTop: "3%", marginBottom: "3%" }}>
                    <Col className="all">
                        <Row>
                            <Col>
                                <Button onClick={this.logOut} variant="secondary" style={{float:"right"}}><i class="fas fa-sign-out-alt"></i></Button>
                            </Col>
                        </Row>
                        <Row className="header4">
                            <Col className="header4">
                                <h6 className="header4"  style={{ textAlign: "center", paddingTop: "1px", color:"black"}}>HOME</h6>
                            </Col>
                        </Row>

                        <Row className="logo6">
                            <Col xs={12}  className="logo6">
                                <img className="homeLogo" alt="" src={home} style={{ paddingTop: "10px" }} />
                            </Col>
                        </Row>

                       
                            <Row className="menu">
                                <Col className="menu">
                                <Row class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}> <button onClick={this.goResearch} type="button" style={{ float: "right" }}><img src={book} alt=""></img><h6>מחקר</h6></button></Col>
                                    <Col xs={5}><Link to={"/friendList/"+this.state.id+"/"+this.state.profile}><button type="button" style={{ float: "left" }}><img src={friend} alt="" ></img><h6 style={{}}>רשימת חברים</h6></button></Link> </Col>
                                    <Col xs={1}></Col>
                                </Row>
                                </Col>
                            </Row>

                            <Row className="menu" style={{ marginTop: "20px" }} >
                                <Col className="menu">
                                <Row className="menu" class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}><Link to={'/quiz/' + this.state.id}> <button type="button" style={{ float: "right" }}><img style={{ paddingTop: "3px" }} src={quiz} alt=""></img><h6>שאלונים</h6></button></Link></Col>
                                    <Col xs={5}><button type="button" style={{ float: "left" }}><img src={apostrophes} alt="" ></img><h6>ציטטות מנהלים</h6></button> </Col>
                                    <Col xs={1}></Col>
                                </Row >
                                </Col>
                            </Row>

                            <Row className="menu" style={{ marginTop: "20px" }}>
                                <Col className="menu">
                                <Row class="btn-group" role="group" aria-label="Basic example" >
                                    <Col xs={1}></Col>
                                    <Col xs={5}><Link to={'/findings'}> <button type="button" style={{ float: "right" }}><img style={{ paddingTop: "3px" }} src={glass} alt=""></img><h6>ממצאים ותובנות</h6></button></Link></Col>
                                    <Col xs={5}><Link to={"/profile/"+this.state.profile+"/"+ this.state.id}><button type="button" style={{ float: "left" }}><img style={{ paddingTop: "5px" }} src={profile} alt="" ></img><h6>סוגי פרופיל</h6></button></Link></Col>
                                    <Col xs={1}></Col>
                                </Row>
                                </Col>
                            </Row>

                            </Col>

                </div>
            </div >
        );
    }
}
export default withRouter(Home);