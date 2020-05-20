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
      local: false,
      ioQuestions: this.props.ioQuestions,//getting the io-oi questions 
      orQuestions: this.props.orQuestions,//getting the or questions 
      bigQuestions: this.props.bigQuestions,//getting the big 5 questions 
      ioAnswers: [],
      bigAnswers: [],
      orAnswers: [],
      id: this.props.match.params.id,//get the id from params
      gender: "",
      age: "",
      education: "",
      job: "",
      dateStamp: "", //can be deleted later. not needed
      allFull: false
    }

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
      swal("לא בחרת את כל הפרמטרים")
    }
    else {
      let url = "";
      if (this.state.local) {
        url = "http://localhost:51298/api/users/";
      }
      else {
        url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users/";
      }
      let now = new Date();
      let u = {
        UserId: parseInt(this.state.id),
        Gender: this.state.gender,
        Age: parseInt(this.state.age),
        Job: this.state.job,
        Education: this.state.education,
        DateStamp: now
      }
      url += u.UserId;
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
            $("#2nd").show();
            window.scrollBy({
              top: 100,
              left: 0,
              behavior: 'smooth'
            });
          },
          (error) => {
            console.log("err post=", error);
          });

    }


  }
  next2 = () => {
    let helper = this.state.ioQuestions.length;
    let counter = 0;
    let answers = this.state.ioAnswers;
    for (let i = 0; i < Object.keys(this.state.ioAnswers).length; i++) {
      counter++;
    }
    if (counter !== helper) {
      swal("לא בחרת את כל הפרמטרים");
    }
    else {
      let avgA = ((parseInt(answers["ans1"]) + parseInt(answers["ans3"]) + parseInt(answers["ans5"]) + parseInt(answers["ans7"]) + parseInt(answers["ans9"]) + parseInt(answers["ans11"])) / 6);
      let avgB = ((parseInt(answers["ans2"]) + parseInt(answers["ans4"]) + parseInt(answers["ans6"]) + parseInt(answers["ans8"]) + parseInt(answers["ans10"]) + parseInt(answers["ans12"])) / 6);
      let profile = "";
      if (avgA < 3.51 && avgB < 3.2) {//1
        profile = "השורד"
      }
      else if (avgA < 3.51 && 3.2 < avgB < 3.66) {//2
        profile = "המחפש"
      }
      else if (avgA < 3.51 && 3.66 < avgB) {//3
        profile = "המהפכן"
      }
      else if (3.51 < avgA < 3.95 && avgB < 3.2) {//4
        profile = "המנתח"
      }
      else if (3.51 < avgA < 3.95 && 3.2 < avgB < 3.66) {//5
        profile = "המאזן"
      }
      else if (3.51 < avgA < 3.95 && 3.66 < avgB) {//6
        profile = "המחושב"
      }
      else if (3.95 < avgA && avgB < 3.2) {//7
        profile = "המגיב"
      }
      else if (3.95 < avgA && 3.2 < avgB < 3.66) {//8
        profile = "המעז"
      }
      else if (3.95 < avgA && 3.66 < avgB) {//9
        profile = "האלוף"
      }
      let url = "";
      if (this.state.local) {
        url = "http://localhost:51298/api/users/updateprofile/";
      }
      else {
        url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users/updateprofile/";
      }
      let u = {
        UserId: parseInt(this.state.id),
        ScoreA: avgA,
        ScoreB: avgB,
        Profile: profile
      }
      url += u.UserId;
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
            $("#3rd").show();
            window.scrollBy({
              top: 100,
              left: 0,
              behavior: 'smooth'
            });
          },
          (error) => {
            console.log("err post=", error);
          });


    }
  }
  next3 = () => {

    let helper = this.state.orQuestions.length;
    let counter = 0;
    let answers = this.state.orAnswers;
    for (let i = 0; i < Object.keys(this.state.orAnswers).length; i++) {
      counter++;
    }
    let combinedOrs = [];
    if (counter !== helper) {
      swal("לא בחרת את כל הפרמטרים");
    }
    else {
      //send all the or
      let orAnswers = [];
      Object.keys(answers).map((key, index) => {
        combinedOrs.push(answers[key]);
      })

      let url = "";
      if (this.state.local) {
        url = "http://localhost:51298/api/answers";
      }
      else {
        url = "http://proj.ruppin.ac.il/bgroup6/prod/api/answers";
      }
      let ans;
      for (var i = 0; i < this.state.orQuestions.length; i++) {
        if (combinedOrs[i] === this.state.orQuestions[i]["a"].QuestionSTR) {
          ans = {
            AnswerNum: combinedOrs[i],
            UserId: parseInt(this.state.id),
            QuestionId: this.state.orQuestions[i]["a"].QuestionId
          }
        }
        else {
          ans = {
            AnswerNum: combinedOrs[i],
            UserId: parseInt(this.state.id),
            QuestionId: this.state.orQuestions[i]["b"].QuestionId
          }
        }

        orAnswers.push(ans);
      }
      fetch(url, {//registering the user to the system
        method: 'POST',
        body: JSON.stringify(orAnswers),
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
            $("#4th").show();
            window.scrollBy({
              top: 100,
              left: 0,
              behavior: 'smooth'
            });
          },
          (error) => {
            console.log("err post=", error);
          });
    }
  }
  next4 = () => {
    let helper = this.state.bigQuestions.length;
    let counter = 0;
    let answers = this.state.bigAnswers;
    let combinedAnswers = [];
    let combinedBig = [];
    let combinedIo = [];
    Object.keys(this.state.bigAnswers).map((key, index) => {
      combinedBig.push(this.state.bigAnswers[key]);
    });
    Object.keys(this.state.ioAnswers).map((key, index) => {
      combinedIo.push(this.state.ioAnswers[key]);
    });

    for (let i = 0; i < Object.keys(this.state.bigAnswers).length; i++) {
      counter++;
    }
    if (counter !== helper) {
      swal("לא בחרת את כל הפרמטרים");
    }
    else {
      let avgSay1 = ((parseInt(answers["ans1"]) + parseInt(answers["ans2"]) + parseInt(answers["ans3"]) + parseInt(answers["ans4"])) / 4);
      let avgSay2 = ((parseInt(answers["ans5"]) + parseInt(answers["ans6"]) + parseInt(answers["ans7"]) + parseInt(answers["ans8"])) / 4);
      let avgSay3 = ((parseInt(answers["ans9"]) + parseInt(answers["ans10"]) + parseInt(answers["ans11"]) + parseInt(answers["ans12"])) / 4);
      let avgSay4 = ((parseInt(answers["ans13"]) + parseInt(answers["ans14"]) + parseInt(answers["ans15"]) + parseInt(answers["ans16"])) / 4);
      let avgSay5 = ((parseInt(answers["ans17"]) + parseInt(answers["ans18"]) + parseInt(answers["ans19"]) + parseInt(answers["ans20"])) / 4);
      let url = "";
      for (var i = 0; i < (this.state.bigQuestions.length); i++) {
        let u = {};
        let u2 = {};
        if (this.state.ioQuestions.length > this.state.bigQuestions.length) {
          if (i < this.state.bigQuestions.length) {
            u = {
              AnswerNum: combinedBig[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.bigQuestions[i].QuestionId
            }
            u2 = {
              AnswerNum: combinedIo[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.ioQuestions[i].QuestionId
            }
            combinedAnswers.push(u);
            combinedAnswers.push(u2);
          }
          else {
            u = {
              AnswerNum: combinedBig[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.bigQuestions[i].QuestionId
            }
            combinedAnswers.push(u);
          }
        }
        else if(this.state.ioQuestions.length < this.state.bigQuestions.length) {
          if (i < this.state.ioQuestions.length) {
            u = {
              AnswerNum: combinedBig[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.bigQuestions[i].QuestionId
            }
            u2 = {
              AnswerNum: combinedIo[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.ioQuestions[i].QuestionId
            }
            combinedAnswers.push(u);
            combinedAnswers.push(u2);
          }
          else {
            u = {
              AnswerNum: combinedBig[i],
              UserId: parseInt(this.state.id),
              QuestionId: this.state.bigQuestions[i].QuestionId
            }
            combinedAnswers.push(u);
          }
        }
        else{
          u = {
            AnswerNum: combinedBig[i],
            UserId: parseInt(this.state.id),
            QuestionId: this.state.bigQuestions[i].QuestionId
          }
          u2 = {
            AnswerNum: combinedIo[i],
            UserId: parseInt(this.state.id),
            QuestionId: this.state.ioQuestions[i].QuestionId
          }
          combinedAnswers.push(u);
          combinedAnswers.push(u2);
        }
      }

      if (this.state.local) {
        url = "http://localhost:51298/api/users/updatesayings/";
      }
      else {
        url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users/updatesayings/";
      }
      let u = {
        UserId: parseInt(this.state.id),
        AvgSay1: avgSay1,
        AvgSay2: avgSay2,
        AvgSay3: avgSay3,
        AvgSay4: avgSay4,
        AvgSay5: avgSay5
      }
      url += u.UserId;
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
            if (this.state.local) {
              url = "http://localhost:51298/api/answers";
            }
            else {
              url = "http://proj.ruppin.ac.il/bgroup6/prod/api/answers";
            }
            fetch(url, {//registering the user to the system
              method: 'POST',
              body: JSON.stringify(combinedAnswers),
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
                  this.setState({
                    allFull: true
                  });
                },
                (error) => {
                  console.log("err post=", error);
                });
          },
          (error) => {
            console.log("err post=", error);
          });
    }
  }

  componentDidMount() {
    $("#2nd").hide();
    $("#3rd").hide();
    //$("#4th").hide();
  }

  render() {
    let ioQuestionStr = this.state.ioQuestions.map((ques, index) => {
      return (
        <div>
          <Row className="multi-Choice">
            <Col xs={12}>
              <Row>
                <Col xs={12}><h6 className="ioQuestion">{ques.QuestionSTR}</h6></Col>
              </Row>{/*question */}
              <Row xs={5}>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"io" + (index + 1) + "-radio"} value="5" onClick={() => {
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: 5
                        }
                      }
                      )
                    }} />
                    <h5>5</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"io" + (index + 1) + "-radio"} value="4" onClick={() => {
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: 4
                        }
                      }
                      )
                    }} />
                    <h5>4</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"io" + (index + 1) + "-radio"} value="3" onClick={() => {
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: 3
                        }
                      }
                      )
                    }} />
                    <h5>3</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"io" + (index + 1) + "-radio"} value="2" onClick={() => {
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: 2
                        }
                      }
                      )
                    }} />
                    <h5>2</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"io" + (index + 1) + "-radio"} value="1" onClick={() => {
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: 1
                        }
                      }
                      )
                    }} />
                    <h5>1</h5>
                  </label>
                </Col>

              </Row>{/*radios */}
              <Row>
                <Col>
                  <label>
                    <h5 id="multi-explain" style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                  </label>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <label>
                    <h5 id="multi-explain" style={{ fontSize: "17px" }}>בכלל לא</h5>
                  </label>
                </Col>
              </Row>{/*description */}
            </Col>
          </Row>{/*end of question */}
        </div>
      );
    });

    let orQuestionStr = this.state.orQuestions.map((ques, index) => {
      return (
        <div>
          <Row className="multi-Choice">
            <Col style={{ textAlign: "center" }}>
              <label>
                <input type="radio" className="multi-radio" name={"or" + (index + 1) + "-radio"} value={ques["a"].QuestionSTR} onClick={() => {
                  this.setState({
                    orAnswers: {
                      ...this.state.orAnswers,
                      [`ans${index + 1}`]: ques["a"].QuestionSTR
                    }
                  }
                  )
                }} />
                <h6>{ques["a"].QuestionSTR}</h6>
              </label>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <label>
                <input type="radio" className="multi-radio" name={"or" + (index + 1) + "-radio"} value={ques["b"].QuestionSTR} onClick={() => {
                  this.setState({
                    orAnswers: {
                      ...this.state.orAnswers,
                      [`ans${index + 1}`]: ques["b"].QuestionSTR
                    }
                  }
                  )
                }} />
                <h6>{ques["b"].QuestionSTR}</h6>
              </label>
            </Col>
          </Row>
        </div>
      )
    });

    let bigQuestionStr = this.state.bigQuestions.map((ques, index) => {
      return (
        <div>
          <Row className="multi-Choice">
            <Col xs={12}>
              <Row>
                <Col xs={12}><h6 className="ioQuestion">{ques.QuestionSTR}</h6></Col>
              </Row>{/*question */}
              <Row xs={5}>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="5" onClick={() => {
                      this.setState({
                        bigAnswers: {
                          ...this.state.bigAnswers,
                          [`ans${index + 1}`]: 5
                        }
                      }
                      )
                    }} />
                    <h5>5</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="4" onClick={() => {
                      this.setState({
                        bigAnswers: {
                          ...this.state.bigAnswers,
                          [`ans${index + 1}`]: 4
                        }
                      }
                      )
                    }} />
                    <h5>4</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="3" onClick={() => {
                      this.setState({
                        bigAnswers: {
                          ...this.state.bigAnswers,
                          [`ans${index + 1}`]: 3
                        }
                      }
                      )
                    }} />
                    <h5>3</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="2" onClick={() => {
                      this.setState({
                        bigAnswers: {
                          ...this.state.bigAnswers,
                          [`ans${index + 1}`]: 2
                        }
                      }
                      )
                    }} />
                    <h5>2</h5>
                  </label>
                </Col>
                <Col>
                  <label>
                    <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="1" onClick={() => {
                      this.setState({
                        bigAnswers: {
                          ...this.state.bigAnswers,
                          [`ans${index + 1}`]: 1
                        }
                      }
                      )
                    }} />
                    <h5>1</h5>
                  </label>
                </Col>
              </Row>{/*radios */}
              <Row>
                <Col>
                  <label>
                    <h5 id="multi-explain" style={{ fontSize: "17px" }}>מסכים בהחלט</h5>
                  </label>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <label>
                    <h5 id="multi-explain" style={{ fontSize: "17px" }}>בכלל לא</h5>
                  </label>
                </Col>
              </Row>{/*description */}
            </Col>
          </Row>{/*end of question */}
        </div>
      )
    });


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
                          <h5 style={{ float: "center" }}>אישה</h5>
                        </label>
                      </Col>
                      <Col xs={6}>
                        <label>
                          <input className="gender-radio" type="radio" name="gender" value="גבר" id="male" onClick={this.handleGender} />
                          <img src={male} alt="" />
                          <h5 style={{ float: "center" }}>גבר</h5>
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
                  {ioQuestionStr}
                </Row>
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
                {orQuestionStr}
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
                    <h6 style={{ background: "#33adff" }}>עד כמה אתה מסכים שההיגדים הבאים משקפים אותך כמנהל?<br></br>(מסכים בהחלט = 5, לא מסכים בכלל = 1)</h6>
                  </Col>
                </Row>
                {bigQuestionStr}
              </Col>
              <Row className="next">
                <Col xs={5}></Col>
                <Col style={{ textAlign: "center" }}>
                  <button onClick={this.next4}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                </Col>
                <Col xs={5}></Col>
              </Row>{/*end of next */}
              <br></br>
              {this.state.allFull ? <Row><Col style={{ textAlign: "center" }}><Link to={'/home'}> <Button variant="outline-primary">Let's Continue</Button></Link></Col></Row> : ""}
            </Row>{/*end of card2 */}
          </Row>{/*end of 4th */}
        </Row >{/*end of align */}
      </Container >
    );
  }
}
export default withRouter(Quiz);