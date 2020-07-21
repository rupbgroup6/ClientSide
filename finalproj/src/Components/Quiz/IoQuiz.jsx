import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../CSS/rest.css";
import next from '../../Images/next2.png';
import swal from 'sweetalert';

class IoQuiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      local: false,
      id: this.props.id,
      ioQuestions: this.props.ioQuestions,
      ioAnswers: this.props.ioAnswers,
      secondTime: this.props.match.params.secondTime
    }

  }

  handleIoAnswers = () => {
    this.props.handleIoAnswers(this.state.ioAnswers);
  }

  handleProfile = (profile) => {
    this.props.handleProfile(profile);
  }


  next = () => {
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
      this.handleIoAnswers();
      let sumA = 0;
      let counterA = 0;
      let sumB = 0;
      let counterB = 0;
      Object.keys(answers).map((key, index) => {
        if (answers[key][1] === 1) {
          counterA++;
          sumA += answers[key][0];
        }
        else if (answers[key][1] === 2) {
          counterB++;
          sumB += answers[key][0];
        }
      });
      let avgA = (parseInt(sumA) / parseInt(counterA)); //1
      let avgB = (parseInt(sumB) / parseInt(counterB)); //2
      let profile = "";
      if (avgA < 3.51 && avgB < 3.2) {//1
        profile = "השורד"
      }
      else if (avgA < 3.51 && 3.2 < avgB < 3.66) {//2
        profile = "המאמין"
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
        profile = "המתאים"
      }
      else if (3.95 < avgA && 3.2 < avgB < 3.66) {//8
        profile = "המעז"
      }
      else if (3.95 < avgA && 3.66 < avgB) {//9
        profile = "האלוף"
      }
      this.handleProfile(profile);
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
      if (this.state.secondTime) {
        $("#3rd").show();
              window.scrollBy({
                top: 120,
                left: 0,
                behavior: 'smooth'
              });
      }
      else {
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
                top: 120,
                left: 0,
                behavior: 'smooth'
              });
            },
            (error) => {
              console.log("err post=", error);
            });

      }


    }
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
                      let ans;
                      if (ques.OrOrderView === 1) {
                        ans = [5, 1]
                      }
                      else {
                        ans = [5, 2]
                      }
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: ans
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
                      let ans;
                      if (ques.OrOrderView === 1) {
                        ans = [4, 1]
                      }
                      else {
                        ans = [4, 2]
                      }
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: ans
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
                      let ans;
                      if (ques.OrOrderView === 1) {
                        ans = [3, 1]
                      }
                      else {
                        ans = [3, 2]
                      }
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: ans
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
                      let ans;
                      if (ques.OrOrderView === 1) {
                        ans = [2, 1]
                      }
                      else {
                        ans = [2, 2]
                      }
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: ans
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
                      let ans;
                      if (ques.OrOrderView === 1) {
                        ans = [1, 1]
                      }
                      else {
                        ans = [1, 2]
                      }
                      this.setState({
                        ioAnswers: {
                          ...this.state.ioAnswers,
                          [`ans${index + 1}`]: ans
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

    return (
      <div>
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
              <button onClick={this.next}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
            </Col>
            <Col xs={5}></Col>
          </Row>{/*end of next */}
        </Row>
      </div>
    );
  }
}
export default withRouter(IoQuiz);