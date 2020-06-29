import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../CSS/rest.css";
import next from '../../Images/next2.png';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';

class BigQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            local: false,
            id: this.props.id,
            bigQuestions: this.props.bigQuestions,
            bigAnswers: this.props.bigAnswers,
            ioQuestions: this.props.ioQuestions 
        }

    }
    
    


    next = () => {
    let ioAnswers = this.props.refreshIoAnswers();
    let helper = this.state.bigQuestions.length;
    let counter = 0;
    let answers = this.state.bigAnswers;
    let combinedAnswers = [];
    let combinedBig = [];
    let combinedIo = [];
    Object.keys(this.state.bigAnswers).map((key, index) => {
      combinedBig.push(this.state.bigAnswers[key][0]);
    });
    Object.keys(ioAnswers).map((key, index) => {
      combinedIo.push(ioAnswers[key][0]);
    });

    for (let i = 0; i < Object.keys(this.state.bigAnswers).length; i++) {
      counter++;
    }
    if (counter !== helper) {
      swal("לא בחרת את כל הפרמטרים");
    }
    else {
        let counterA = 0;
        let counterB = 0;
        let counterC = 0;
        let counterD = 0;
        let counterE = 0;
        let sumA = 0;
        let sumB = 0;
        let sumC = 0;
        let sumD = 0;
        let sumE = 0;
        for(var key in answers){
          if(answers[key][1] === 1){
            counterA++;
            sumA += answers[key][0];
          }
          else if(answers[key][1] === 2){
            counterB++;
            sumB += answers[key][0];
          }
          else if(answers[key][1] === 3){
              counterC++;
              sumC += answers[key][0];
            }
            else if(answers[key][1] === 4){
              counterD++;
              sumD += answers[key][0];
            }
            else if(answers[key][1] === 5){
              counterE++;
              sumE += answers[key][0];
            }
        }
      let avgSay1 = (parseInt(sumA) / parseInt(counterA));
      let avgSay2 = (parseInt(sumB) / parseInt(counterB));
      let avgSay3 = (parseInt(sumC) / parseInt(counterC));
      let avgSay4 = (parseInt(sumD) / parseInt(counterD));
      let avgSay5 = (parseInt(sumE) / parseInt(counterE));
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
        AvgSay5: avgSay5,
        SecondTime: true
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
                  window.scrollBy({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
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

    render() {

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
                              let ans;
                              if(ques.OrOrderView === 1){
                                ans = [5,1]
                              }
                              else if(ques.OrOrderView === 2){
                                ans = [5,2]
                              }
                              else if(ques.OrOrderView === 3){
                                ans = [5,3]
                              }
                              else if(ques.OrOrderView === 4){
                                ans = [5,4]
                              }
                              else if(ques.OrOrderView === 5){
                                ans = [5,5]
                              }
                            this.setState({
                              bigAnswers: {
                                ...this.state.bigAnswers,
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
                          <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="4" onClick={() => {
                              let ans;
                              if(ques.OrOrderView === 1){
                                ans = [4,1]
                              }
                              else if(ques.OrOrderView === 2){
                                ans = [4,2]
                              }
                              else if(ques.OrOrderView === 3){
                                ans = [4,3]
                              }
                              else if(ques.OrOrderView === 4){
                                ans = [4,4]
                              }
                              else if(ques.OrOrderView === 5){
                                ans = [4,5]
                              }
                            this.setState({
                              bigAnswers: {
                                ...this.state.bigAnswers,
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
                          <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="3" onClick={() => {
                              let ans;
                              if(ques.OrOrderView === 1){
                                ans = [3,1]
                              }
                              else if(ques.OrOrderView === 2){
                                ans = [3,2]
                              }
                              else if(ques.OrOrderView === 3){
                                ans = [3,3]
                              }
                              else if(ques.OrOrderView === 4){
                                ans = [3,4]
                              }
                              else if(ques.OrOrderView === 5){
                                ans = [3,5]
                              }
                            this.setState({
                              bigAnswers: {
                                ...this.state.bigAnswers,
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
                          <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="2" onClick={() => {
                              let ans;
                              if(ques.OrOrderView === 1){
                                ans = [2,1]
                              }
                              else if(ques.OrOrderView === 2){
                                ans = [2,2]
                              }
                              else if(ques.OrOrderView === 3){
                                ans = [2,3]
                              }
                              else if(ques.OrOrderView === 4){
                                ans = [2,4]
                              }
                              else if(ques.OrOrderView === 5){
                                ans = [2,5]
                              }
                            this.setState({
                              bigAnswers: {
                                ...this.state.bigAnswers,
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
                          <input type="radio" className="multi-radio" name={"big" + (index + 1) + "-radio"} value="1" onClick={() => {
                              let ans;
                              if(ques.OrOrderView === 1){
                                ans = [1,1]
                              }
                              else if(ques.OrOrderView === 2){
                                ans = [1,2]
                              }
                              else if(ques.OrOrderView === 3){
                                ans = [1,3]
                              }
                              else if(ques.OrOrderView === 4){
                                ans = [1,4]
                              }
                              else if(ques.OrOrderView === 5){
                                ans = [1,5]
                              }
                            this.setState({
                              bigAnswers: {
                                ...this.state.bigAnswers,
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
            )
          });
        
        return (
            <div>
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
                  <button onClick={this.next}><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button>
                </Col>
                <Col xs={5}></Col>
              </Row>{/*end of next */}
              <br></br>
              {this.state.allFull ? <Row><Col style={{ textAlign: "center" }}><Link to={'/game/'+ this.props.refreshProfile()+"/"+this.state.id }> <button  style={{background: "#33adff" , height:"55px",width:"135px" ,margin:"15px", borderRadius:"12px", color:" #003B15", fontSize:"17px", fontWeight:"700"}}>Let's Continue</button></Link></Col></Row> : ""}
            </Row>{/*end of card2 */}
            </div>
        )
    }
}
export default withRouter(BigQuiz);