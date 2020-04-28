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
import iooi from '../Images/io-oi.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import next from '../Images/next2.png';
import Container from 'react-bootstrap/Container';
import userchar from '../Images/userChar.png';
import Button from 'react-bootstrap/Button'

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: true,
            ioQuestions: this.props.ioQuestions,//getting the io-oi questions 
            orQuestions: this.props.orQuestions,//getting the or questions 
            seperatedOrQuest: [],
            bigQuestions: this.props.bigQuestions,//getting the big 5 questions 
            id: this.props.match.params.id,//get the id from params
            gender: "",
            age: "",
            education: "",
            job: "",
            dateStamp: "", //can be deleted later. not needed
            io1: "",
            io2: "",
            io3: "",
            io4: "",
            io5: "",
            io6: "",
            io7: "",
            io8: "",
            io9: "",
            io10: "",
            io11: "",
            io12: "",
            big1: "",
            big2: "",
            big3: "",
            big4: "",
            big5: "",
            big6: "",
            big7: "",
            big8: "",
            big9: "",
            big10: "",
            or1: "",
            or2: "",
            or3: "",
            allFull: false
        }

    }
    handleOr1 = (e) => {
        this.setState({
            or1: e.target.value
        });
    }
    handleOr2 = (e) => {
        this.setState({
            or2: e.target.value
        });
    }
    handleOr3 = (e) => {
        this.setState({
            or3: e.target.value
        });
    }
    handleBig1 = (e) => {
        this.setState({
            big1: e.target.value
        });
    }
    handleBig2 = (e) => {
        this.setState({
            big2: e.target.value
        });
    }
    handleBig3 = (e) => {
        this.setState({
            big3: e.target.value
        });
    }
    handleBig4 = (e) => {
        this.setState({
            big4: e.target.value
        });
    }
    handleBig5 = (e) => {
        this.setState({
            big5: e.target.value
        });
    }
    handleBig6 = (e) => {
        this.setState({
            big6: e.target.value
        });
    }
    handleBig7 = (e) => {
        this.setState({
            big7: e.target.value
        });
    }
    handleBig8 = (e) => {
        this.setState({
            big8: e.target.value
        });
    }
    handleBig9 = (e) => {
        this.setState({
            big9: e.target.value
        });
    }
    handleBig10 = (e) => {
        this.setState({
            big10: e.target.value
        });
    }
    handleIo1 = (e) => {
        this.setState({
            io1: e.target.value
        });
    }
    handleIo2 = (e) => {
        this.setState({
            io2: e.target.value
        });
    }
    handleIo3 = (e) => {
        this.setState({
            io3: e.target.value
        });
    }
    handleIo4 = (e) => {
        this.setState({
            io4: e.target.value
        });
    }
    handleIo5 = (e) => {
        this.setState({
            io5: e.target.value
        });
    }
    handleIo6 = (e) => {
        this.setState({
            io6: e.target.value
        });
    }
    handleIo7 = (e) => {
        this.setState({
            io7: e.target.value
        });
    }
    handleIo8 = (e) => {
        this.setState({
            io8: e.target.value
        });
    }
    handleIo9 = (e) => {
        this.setState({
            io9: e.target.value
        });
    }
    handleIo10 = (e) => {
        this.setState({
            io10: e.target.value
        });
    }
    handleIo11 = (e) => {
        this.setState({
            io11: e.target.value
        });
    }
    handleIo12 = (e) => {
        this.setState({
            io12: e.target.value
        });
    }

    handleEduc = (e) => {
        this.setState({
            education: e.target.value
        });
    }

    handleJob = (e) => {
        this.setState({
            job: e.target.value
        });
    }

    handleGender = (e) => {
        this.setState({
            gender: e.target.value
        });
    }

    handleAge = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    next1 = () => {
        let gender = this.state.gender;
        let age = this.state.age;
        let job = this.state.job;
        let education = this.state.education;
        if (gender === "" || age === "" || job === "" || education === "") {
            swal("please select all the fields")
        }
        else {
            if (this.state.local) {
                let url = "http://localhost:51298/api/users/";
            }
            else {
                let url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users/";
            }
            let now = new Date();
            let fixedDate = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
            let u = {
                UserId: parseInt(this.state.id),
                Gender: this.state.gender,
                Age: parseInt(this.state.age),
                Job: this.state.job,
                Education: this.state.education,
                DateStamp: fixedDate
            }
            url += "u.UserId";
            fetch(url, {//registering the user to the system
                method: 'PUT',
                body: JSON.stringify(u),
                headers: new Headers({
                    'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
                })

            })
                .then(res => {
                    console.log('res=', res);
                    return res.json()
                })
                .then(
                    (result) => {
                        console.log("fetch POST= ", result);
                    },
                    (error) => {
                        console.log("err post=", error);
                    });
        }
        $("#2nd").show();

    }
    next2 = () => {
        let io1 = this.state.io1;
        let io2 = this.state.io2;
        let io3 = this.state.io3;
        let io4 = this.state.io4;
        let io5 = this.state.io5;
        let io6 = this.state.io6;
        let io7 = this.state.io7;
        let io8 = this.state.io8;
        let io9 = this.state.io9;
        let io10 = this.state.io10;
        let io11 = this.state.io11;
        let io12 = this.state.io12;
        if (io1 === "" || io2 === "" || io3 === "" || io4 === "" || io5 === "" || io6 === "" || io7 === "" || io8 === "" || io9 === "" || io10 === "" || io11 === "" || io12 === "") {
            swal("please select all the fields")
        }
        else {
            let avgA = ((parseInt(io1) + parseInt(io3) + parseInt(io5) + parseInt(io7) + parseInt(io9) + parseInt(io11)) / 6);
            let avgB = ((parseInt(io2) + parseInt(io4) + parseInt(io6) + parseInt(io8) + parseInt(io10) + parseInt(io12)) / 6);
            let profile = "";
            if (avgA < 3.51 && avgB < 3.2) {//1
                profile = "השורדים"
            }
            else if (avgA < 3.51 && 3.2 < avgB < 3.66) {//2
                profile = "המאמינים"
            }
            else if (avgA < 3.51 && 3.66 < avgB) {//3
                profile = "המהפכנים"
            }
            else if (3.51 < avgA < 3.95 && avgB < 3.2) {//4
                profile = "המנתחים"
            }
            else if (3.51 < avgA < 3.95 && 3.2 < avgB < 3.66) {//5
                profile = "המאזנים"
            }
            else if (3.51 < avgA < 3.95 && 3.66 < avgB) {//6
                profile = "המחושבים"
            }
            else if (3.95 < avgA && avgB < 3.2) {//7
                profile = "המתאימים"
            }
            else if (3.95 < avgA && 3.2 < avgB < 3.66) {//8
                profile = "המעיזים"
            }
            else if (3.95 < avgA && 3.66 < avgB) {//9
                profile = "האלופים"
            }
            if (this.state.local) {
                let url = "http://localhost:51298/api/users/updateprofile";
            }
            else {
                let url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users/updateprofile";
            }
            let u = {
                UserId: parseInt(this.state.id),
                ScoreA: avgA,
                ScoreB: avgB
            }
            url += "u.UserId";
            fetch(url, {//registering the user to the system
                method: 'PUT',
                body: JSON.stringify(u),
                headers: new Headers({
                    'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
                })

            })
                .then(res => {
                    console.log('res=', res);
                    return res.json()
                })
                .then(
                    (result) => {
                        console.log("fetch POST= ", result);
                    },
                    (error) => {
                        console.log("err post=", error);
                    });

            $("#3rd").show();
        }
    }
    next3 = () => {
        let or1 = this.state.or1;
        let or2 = this.state.or2;
        let or3 = this.state.or3;
        if (or1 === "" || or2 === "" || or3 === "") {
            swal("please select all the fields")
        }
        else {
            $("#4th").show();
        }
    }
    next4 = () => {
        let big1 = this.state.big1;
        let big2 = this.state.big2;
        let big3 = this.state.big3;
        let big4 = this.state.big4;
        let big5 = this.state.big5;
        let big6 = this.state.big6;
        let big7 = this.state.big7;
        let big8 = this.state.big8;
        let big9 = this.state.big9;
        let big10 = this.state.big10;
        if (big1 === "" || big2 === "" || big3 === "" || big4 === "" || big5 === "" || big6 === "" || big7 === "" || big8 === "" || big9 === "" || big10 === "") {
            swal("please select all the fields")
        }
        else {

        }
    }

    componentDidMount() {
        $("#2nd").hide();
        $("#3rd").hide();
        $("#4th").hide();
        let or1 = "";
        let or2 = "";
        let or3 = "";
        let or4 = "";
        let or5 = "";
        let or6 = "";
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0
        for (var i = 0; i < this.state.orQuestions.length; i++) {
            for (var j = 2; j < this.state.orQuestions[i].QuestionSTR.length; j++) {
                let temp = this.state.orQuestions[i].QuestionSTR[j];
                if (i === 0) {
                    if (temp === "ב" & this.state.orQuestions[i].QuestionSTR[j + 1] === ")") {
                        counter1 = j + 2;
                        break;
                    }
                    else {
                        or1 += temp;
                    }
                }
                else if (i === 1) {
                    if (temp === "ב" & this.state.orQuestions[i].QuestionSTR[j + 1] === ")") {
                        counter2 = j + 2;
                        break;
                    }
                    else {
                        or3 += temp;
                    }
                }
                else if (i === 2) {
                    if (temp === "ב" & this.state.orQuestions[i].QuestionSTR[j + 1] === ")") {
                        counter3 = j + 2;
                        break;
                    }
                    else {
                        or5 += temp;
                    }
                }
            }
        }
        for (var i = 0; i < this.state.orQuestions.length; i++) {
            if (i === 0) {
                let j = counter1;
                for (j; j < this.state.orQuestions[i].QuestionSTR.length; j++) {
                    let temp = this.state.orQuestions[i].QuestionSTR[j];
                    or2 += temp;
                }
            }
            else if (i === 1) {
                let j = counter2;
                for (j; j < this.state.orQuestions[i].QuestionSTR.length; j++) {
                    let temp = this.state.orQuestions[i].QuestionSTR[j];
                    or4 += temp;
                }

            }
            else if (i === 2) {
                let j = counter3;
                for (j; j < this.state.orQuestions[i].QuestionSTR.length; j++) {
                    let temp = this.state.orQuestions[i].QuestionSTR[j];
                    or6 += temp;
                }
            }
        }
        let fixedOr1 = or1.slice(0, or1.length - 3);
        let fixedOr3 = or3.slice(0, or3.length - 3);
        let fixedOr5 = or5.slice(0, or5.length - 3);
        let seperatedOrs = [];
        seperatedOrs[0] = fixedOr1.trim();
        seperatedOrs[1] = or2.trim();
        seperatedOrs[2] = fixedOr3.trim();
        seperatedOrs[3] = or4.trim();
        seperatedOrs[4] = fixedOr5.trim();
        seperatedOrs[5] = or6.trim();
        this.setState({
            seperatedOrQuest: seperatedOrs
        });
    }

    render() {
        return (
            <Container>
                <Row className="align">
                    <img className="about" alt="" src={about} style={{ paddingTop: "10px", width: "100px", height: "40px", background: "#0A0A0A" }} />
                    <Row className="card2">
                        <h6 style={{ textAlign: "left", paddingLeft: "10px", margin: "0", background: "#0A0A0A", width: "100%" }}> 1 / 4</h6>
                        <Row className="gender">
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <h6 style={{ float: "Right" }}>מגדר</h6>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={6}>
                                                <label>
                                                    <input className="gender-radio" type="radio" name="gender" value="אישה" id="female" onClick={this.handleGender} />
                                                    <img src={female} alt="" />
                                                    <h5 style={{ float: "right" }}>אישה</h5>
                                                </label>
                                            </Col>
                                            <Col xs={6}>
                                                <label>
                                                    <input className="gender-radio" type="radio" name="gender" value="גבר" id="male" onClick={this.handleGender} />
                                                    <img src={male} alt="" />
                                                    <h5 style={{ float: "right" }}>גבר</h5>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row> {/*end of gender */}

                        <Row className="age">
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <h6 style={{ float: "Right" }}>גיל</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1}></Col>
                                    <Col>
                                        <RangeSlider
                                            value={this.state.age}
                                            onChange={this.handleAge}
                                            tooltip="on"
                                            tooltipPlacement='top'
                                            variant="primary"
                                            size="lg" />
                                    </Col>
                                    <Col xs={1}></Col>
                                </Row>
                            </Col>
                        </Row> {/*end of age */}

                        <Row className="job">
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <h6 style={{ float: "Right" }}>תפקיד</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row xs={3}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="job-radio" name="job" value="סטודנט" id="student" onClick={this.handleJob} />
                                                    <h5>סטודנט</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="job-radio" name="job" value="מנהל" id="manager" onClick={this.handleJob} />
                                                    <h5>מנהל</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="job-radio" name="job" value="מנהל בכיר" id="sManager" onClick={this.handleJob} />
                                                    <h5>מנהל בכיר</h5>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row> {/*end of job */}

                        <Row className="educ">
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <h6 style={{ float: "Right" }}>השכלה</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row xs={2}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="educ-radio" name="educ" value="תיכונית" id="High School" onClick={this.handleEduc} />
                                                    <h5>תיכונית</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="educ-radio" name="educ" value="תואר ראשון" id="B.A" onClick={this.handleEduc} />
                                                    <h5>תואר ראשון</h5>
                                                </label>
                                            </Col>
                                        </Row>
                                        <Row xs={2}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="educ-radio" name="educ" value="תואר שני" id="M.A" onClick={this.handleEduc} />
                                                    <h5>תואר שני</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="educ-radio" name="educ" value="דוקטורט" id="Doc" onClick={this.handleEduc} />
                                                    <h5>דוקטורט</h5>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>{/*end of educ */}

                        <Row className="next">
                            <Col xs={5}></Col>
                            <Col style={{ textAlign: "center" }}>
                                <button onClick={this.next1}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                            </Col>
                            <Col xs={5}></Col>
                        </Row>{/*end of next */}
                    </Row>{/*end of first part */}
                    <br></br>
                    <Row id="2nd">
                        <img className="about" alt="" src={iooi} style={{ paddingTop: "10px", height: "50px", width: "80%", background: "#0A0A0A" }} />
                        <Row className="card2">
                            <Col>
                                <h6 style={{ textAlign: "left", paddingLeft: "10px", margin: "0", background: "#0A0A0A", width: "100%" }}> 2 / 4</h6>
                                <Row>
                                    <Col>
                                        <h6 style={{ background: "#33adff" }}>סמן באיזה מידה אתה מסכים עם ההיגדים הבאים<br></br>(מסכים בהחלט = 5, לא מסכים בכלל = 1)</h6>
                                    </Col>
                                </Row>
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[0].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io1-radio" value="5" onClick={this.handleIo1} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io1-radio" value="4" onClick={this.handleIo1} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io1-radio" value="3" onClick={this.handleIo1} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io1-radio" value="2" onClick={this.handleIo1} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io1-radio" value="1" onClick={this.handleIo1} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[1].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io2-radio" value="5" onClick={this.handleIo2} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io2-radio" value="4" onClick={this.handleIo2} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io2-radio" value="3" onClick={this.handleIo2} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io2-radio" value="2" onClick={this.handleIo2} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io2-radio" value="1" onClick={this.handleIo2} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[2].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io3-radio" value="5" onClick={this.handleIo3} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io3-radio" value="4" onClick={this.handleIo3} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io3-radio" value="3" onClick={this.handleIo3} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io3-radio" value="2" onClick={this.handleIo3} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io3-radio" value="1" onClick={this.handleIo3} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[3].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io4-radio" value="5" onClick={this.handleIo4} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io4-radio" value="4" onClick={this.handleIo4} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io4-radio" value="3" onClick={this.handleIo4} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io4-radio" value="2" onClick={this.handleIo4} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io4-radio" value="1" onClick={this.handleIo4} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[4].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io5-radio" value="5" onClick={this.handleIo5} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io5-radio" value="4" onClick={this.handleIo5} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io5-radio" value="3" onClick={this.handleIo5} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io5-radio" value="2" onClick={this.handleIo5} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io5-radio" value="1" onClick={this.handleIo5} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[5].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io6-radio" value="5" onClick={this.handleIo6} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io6-radio" value="4" onClick={this.handleIo6} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io6-radio" value="3" onClick={this.handleIo6} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io6-radio" value="2" onClick={this.handleIo6} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io6-radio" value="1" onClick={this.handleIo6} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[6].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io7-radio" value="5" onClick={this.handleIo7} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io7-radio" value="4" onClick={this.handleIo7} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io7-radio" value="3" onClick={this.handleIo7} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io7-radio" value="2" onClick={this.handleIo7} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io7-radio" value="1" onClick={this.handleIo7} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[7].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io8-radio" value="5" onClick={this.handleIo8} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io8-radio" value="4" onClick={this.handleIo8} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io8-radio" value="3" onClick={this.handleIo8} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io8-radio" value="2" onClick={this.handleIo8} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io8-radio" value="1" onClick={this.handleIo8} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[8].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io9-radio" value="5" onClick={this.handleIo9} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io9-radio" value="4" onClick={this.handleIo9} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io9-radio" value="3" onClick={this.handleIo9} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io9-radio" value="2" onClick={this.handleIo9} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io9-radio" value="1" onClick={this.handleIo9} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[9].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io10-radio" value="5" onClick={this.handleIo10} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io10-radio" value="4" onClick={this.handleIo10} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io10-radio" value="3" onClick={this.handleIo10} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io10-radio" value="2" onClick={this.handleIo10} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io10-radio" value="1" onClick={this.handleIo10} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[10].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io11-radio" value="5" onClick={this.handleIo11} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io11-radio" value="4" onClick={this.handleIo11} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io11-radio" value="3" onClick={this.handleIo11} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io11-radio" value="2" onClick={this.handleIo11} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io11-radio" value="1" onClick={this.handleIo11} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.ioQuestions[11].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io12-radio" value="5" onClick={this.handleIo12} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="io12-radio" value="4" onClick={this.handleIo12} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io12-radio" value="3" onClick={this.handleIo12} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io12-radio" value="2" onClick={this.handleIo12} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="io12-radio" value="1" onClick={this.handleIo12} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                            </Col>
                            <Row className="next">
                                <Col xs={5}></Col>
                                <Col style={{ textAlign: "center" }}>
                                    <button onClick={this.next2}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                                </Col>
                                <Col xs={5}></Col>
                            </Row>{/*end of next */}
                        </Row>

                    </Row>{/*end of io questions */}
                    <br></br>
                    <Row id="3rd">
                        <Row className="card2">
                            <Col>
                                <h6 style={{ textAlign: "left", paddingLeft: "10px", margin: "0", background: "#0A0A0A", width: "100%" }}> 3 / 4</h6>
                                <Row>
                                    <Col>
                                        <h6 style={{ background: "#33adff" }}>סמן לאיזה היגד אתה מסכים יותר מבין השניים בכל שורה</h6>
                                    </Col>
                                </Row>
                                <Row className="multi-Choice" style={{ borderBottom: "1px solid white" }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or1-radio" value={this.state.seperatedOrQuest[1]} onClick={this.handleOr1} />
                                            <h6>{this.state.seperatedOrQuest[1]}</h6>
                                        </label>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or1-radio" value={this.state.seperatedOrQuest[0]} onClick={this.handleOr1} />
                                            <h6>{this.state.seperatedOrQuest[0]}</h6>
                                        </label>
                                    </Col>
                                </Row>
                                <Row className="multi-Choice" style={{ borderBottom: "1px solid white" }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or2-radio" value={this.state.seperatedOrQuest[3]} onClick={this.handleOr2} />
                                            <h6>{this.state.seperatedOrQuest[3]}</h6>
                                        </label>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or2-radio" value={this.state.seperatedOrQuest[2]} onClick={this.handleOr2} />
                                            <h6>{this.state.seperatedOrQuest[2]}</h6>
                                        </label>
                                    </Col>
                                </Row>
                                <Row className="multi-Choice">
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or3-radio" value={this.state.seperatedOrQuest[5]} onClick={this.handleOr3} />
                                            <h6>{this.state.seperatedOrQuest[5]}</h6>
                                        </label>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <label>
                                            <input type="radio" className="multi-radio" name="or3-radio" value={this.state.seperatedOrQuest[4]} onClick={this.handleOr3} />
                                            <h6>{this.state.seperatedOrQuest[4]}</h6>
                                        </label>
                                    </Col>
                                </Row>
                            </Col>
                            <Row className="next">
                                <Col xs={5}></Col>
                                <Col style={{ textAlign: "center" }}>
                                    <button onClick={this.next3}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                                </Col>
                                <Col xs={5}></Col>
                            </Row>{/*end of next */}
                        </Row>
                    </Row>{/*end of 3rd */}
                    <br></br>
                    <Row id="4th">
                        <img className="about" alt="" src={userchar} style={{ paddingTop: "10px", height: "50px", width: "80%", background: "#0A0A0A" }} />
                        <Row className="card2">
                            <Col>
                                <h6 style={{ textAlign: "left", paddingLeft: "10px", margin: "0", background: "#0A0A0A", width: "100%" }}> 4 / 4</h6>
                                <Row>
                                    <Col>
                                        <h6 style={{ background: "#33adff" }}>דרג את המידה בה 2 התכונות מתאימות לכם, אפילו אם תכונה אחת מתאימה לכם יותר מהשניה<br></br>(מסכים בהחלט = 5, לא מסכים בכלל = 1)</h6>
                                    </Col>
                                </Row>
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[0].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big1-radio" value="5" onClick={this.handleBig1} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big1-radio" value="4" onClick={this.handleBig1} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big1-radio" value="3" onClick={this.handleBig1} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big1-radio" value="2" onClick={this.handleBig1} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big1-radio" value="1" onClick={this.handleBig1} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[1].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big2-radio" value="5" onClick={this.handleBig2} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big2-radio" value="4" onClick={this.handleBig2} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big2-radio" value="3" onClick={this.handleBig2} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big2-radio" value="2" onClick={this.handleBig2} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big2-radio" value="1" onClick={this.handleBig2} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[2].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big3-radio" value="5" onClick={this.handleBig3} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big3-radio" value="4" onClick={this.handleBig3} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big3-radio" value="3" onClick={this.handleBig3} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big3-radio" value="2" onClick={this.handleBig3} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big3-radio" value="1" onClick={this.handleBig3} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[3].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big4-radio" value="5" onClick={this.handleBig4} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big4-radio" value="4" onClick={this.handleBig4} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big4-radio" value="3" onClick={this.handleBig4} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big4-radio" value="2" onClick={this.handleBig4} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big4-radio" value="1" onClick={this.handleBig4} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[4].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big5-radio" value="5" onClick={this.handleBig5} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big5-radio" value="4" onClick={this.handleBig5} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big5-radio" value="3" onClick={this.handleBig5} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big5-radio" value="2" onClick={this.handleBig5} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big5-radio" value="1" onClick={this.handleBig5} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[5].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big6-radio" value="5" onClick={this.handleBig6} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big6-radio" value="4" onClick={this.handleBig6} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big6-radio" value="3" onClick={this.handleBig6} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big6-radio" value="2" onClick={this.handleBig6} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big6-radio" value="1" onClick={this.handleBig6} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[7].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big7-radio" value="5" onClick={this.handleBig7} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big7-radio" value="4" onClick={this.handleBig7} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big7-radio" value="3" onClick={this.handleBig7} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big7-radio" value="2" onClick={this.handleBig7} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big7-radio" value="1" onClick={this.handleBig7} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[7].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big8-radio" value="5" onClick={this.handleBig8} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big8-radio" value="4" onClick={this.handleBig8} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big8-radio" value="3" onClick={this.handleBig8} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big8-radio" value="2" onClick={this.handleBig8} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big8-radio" value="1" onClick={this.handleBig8} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[8].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big9-radio" value="5" onClick={this.handleBig9} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big9-radio" value="4" onClick={this.handleBig9} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big9-radio" value="3" onClick={this.handleBig9} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big9-radio" value="2" onClick={this.handleBig9} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big9-radio" value="1" onClick={this.handleBig9} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}
                                <Row className="multi-Choice">
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}><h6 className="ioQuestion">{this.state.bigQuestions[9].QuestionSTR}</h6></Col>
                                        </Row>{/*question */}
                                        <Row xs={5}>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big10-radio" value="5" onClick={this.handleBig10} />
                                                    <h5>5</h5>
                                                </label>
                                            </Col>
                                            <label>
                                                <input type="radio" className="multi-radio" name="big10-radio" value="4" onClick={this.handleBig10} />
                                                <h5>4</h5>
                                            </label>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big10-radio" value="3" onClick={this.handleBig10} />
                                                    <h5>3</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big10-radio" value="2" onClick={this.handleBig10} />
                                                    <h5>2</h5>
                                                </label>
                                            </Col>
                                            <Col>
                                                <label>
                                                    <input type="radio" className="multi-radio" name="big10-radio" value="1" onClick={this.handleBig10} />
                                                    <h5>1</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*radios */}
                                        <Row>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                                                </label>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <label>
                                                    <h5 style={{ fontSize: "17px" }}>בכלל לא</h5>
                                                </label>
                                            </Col>
                                        </Row>{/*description */}
                                    </Col>
                                </Row>{/*end of question */}

                            </Col>
                            <Row className="next">
                                <Col xs={5}></Col>
                                <Col style={{ textAlign: "center" }}>
                                    <button onClick={this.next4}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                                </Col>
                                <Col xs={5}></Col>
                            </Row>{/*end of next */}
                            <br></br>
                            {this.state.allFull ? "" : ""}
                        </Row>{/*end of card2 */}
                    </Row>{/*end of 4th */}
                </Row >{/*end of align */}
            </Container>
        );
    }
}
export default withRouter(Quiz);