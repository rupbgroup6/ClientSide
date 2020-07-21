import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../CSS/rest.css";
import next from '../../Images/next2.png';
import swal from 'sweetalert';

class OrQuiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      orQuestions: this.props.orQuestions,
      orAnswers: this.props.orAnswers,
      secondTime: this.props.match.params.secondTime
    }

  }


  next = () => {
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
      if (this.state.secondTime) {
        $("#4th").show();
        window.scrollBy({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
      }
      else {
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
    return (
      <div>
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
              <button onClick={this.next}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
            </Col>
            <Col xs={5}></Col>
          </Row>{/*end of next */}
        </Row>
      </div>
    )
  }
}
export default withRouter(OrQuiz);