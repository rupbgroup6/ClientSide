import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import Row from 'react-bootstrap/Row';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Col from 'react-bootstrap/Col';
import "../../CSS/rest.css";
import RangeSlider from 'react-bootstrap-range-slider';
import male from '../../Images/Male.png';
import female from '../../Images/Female.png';
import next from '../../Images/next2.png';
import Button from 'react-bootstrap/Button';

class DemogQuiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      local: false,
      id: this.props.id,
      gender: "",
      education: "",
      job: "",
      age: "",
      profile: this.props.profile,
      secondTime: this.props.match.params.secondTime
    }

  }

  goHome = () => {
    this.props.history.replace("/home/" + this.state.id + "/" + this.state.profile + "/" + true, "urlhistory");
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

  next = () => {
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


  render() {
    return (
      <div>
        <Row className="card2">
          <Row>
            <Col xs={2}><h6 style={{ textAlign: "left", margin: "0", background: "#0A0A0A", width: "100%" }}> 1 / 4</h6></Col>
            <Col xs={8}></Col>
            {this.state.secondTime === "true"?(<Col xs={2}><Button variant="secondary" onClick={this.goHome}><i className="fas fa-home"></i></Button></Col>):(<Col xs={2}></Col>)}
            
          </Row>
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
                        <img src={process.env.PUBLIC_URL + "/Images/Female.png"} alt="" />
                        <h5 style={{ float: "center" }}>אישה</h5>
                      </label>
                    </Col>
                    <Col xs={6}>
                      <label>
                        <input className="gender-radio" type="radio" name="gender" value="גבר" id="male" onClick={this.handleGender} />
                        <img src={process.env.PUBLIC_URL + "/Images/Male.png"} alt="" />
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
                        <input type="radio" className="job-radio" name="job" value="מנהל בכיר" id="sManager" onClick={this.handleJob} />
                        <h5>מנהל בכיר</h5>
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
                        <input type="radio" className="job-radio" name="job" value="סטודנט" id="student" onClick={this.handleJob} />
                        <h5>סטודנט</h5>
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
                        <input type="radio" className="educ-radio" name="educ" value="תואר ראשון" id="B.A" onClick={this.handleEduc} />
                        <h5>תואר ראשון</h5>
                      </label>
                    </Col>
                    <Col>
                      <label>
                        <input type="radio" className="educ-radio" name="educ" value="תיכונית" id="High School" onClick={this.handleEduc} />
                        <h5>תיכונית</h5>
                      </label>
                    </Col>
                  </Row>
                  <Row xs={2}>
                    <Col>
                    <label>
                        <input type="radio" className="educ-radio" name="educ" value="דוקטורט" id="Doc" onClick={this.handleEduc} />
                        <h5>דוקטורט</h5>
                      </label>
                    </Col>
                    <Col>
                      <label>
                        <input type="radio" className="educ-radio" name="educ" value="תואר שני" id="M.A" onClick={this.handleEduc} />
                        <h5>תואר שני</h5>
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
              <button onClick={this.next}><img style={{ height: "35px", width: "40px" }} src={process.env.PUBLIC_URL + "/Images/next2.png"} alt=""></img></button>
            </Col>
            <Col xs={5}></Col>
          </Row>{/*end of next */}
        </Row>{/*end of first part */}
      </div>
    );
  }
}
export default withRouter(DemogQuiz);