import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import '../CSS/Quiz.css';
import male from '../Images/Male.png';
import female from '../Images/Female.png';
import about from '../Images/About.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import next from '../Images/next2.png';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: true,
            questions: this.props.match.params.questions,
            id: this.props.match.params.id,
            gender: "",
            age: "",
            education : "",
            job: "",
            dateStamp: "",
            question1: ['text 1', 'text 2', 'text 3', 'text 4', 'text 5', 'text 6', 'text 7', 'text 8', 'text 9', 'text 10', 'text 11', 'text 12'],//need to be deleted later
            question2: ['text 1', 'text 2', 'text 3', 'text 4', 'text 5', 'text 6', 'text 7', 'text 8', 'text 9', 'text 10']//need to be deleted later
        }

        this.apiUrl = 'tbd';//Dont forget to change
        if (!this.state.local) {
          this.apiUrl = 'tbd';//Dont forget to change
        }
    }

  
    render() {
        return (
           <div>
                <div>
                <div className="align">
                    <img className="about" alt="" src={about} style={{ paddingTop: "10px" }} />
                    <div className="card2" style={{ paddingTop: "0" }}>
                        <form>


                            <Row className="gender">
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5 style={{ float: "Right" }}>מגדר</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button><img src={female} alt=""></img></button>

                                            <h6 style={{ textAlign: "center", paddingRight: "25px" }}>אישה</h6>
                                        </Col>
                                        <Col>
                                            <button><img src={male} alt=""></img></button>
                                            <h6 style={{ textAlign: "center", paddingRight: "35px" }}>גבר</h6>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="age">
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5 style={{ float: "Right" }}>גיל</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="slidecontainer">
                                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="education">
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5 style={{ float: "Right" }}>תפקיד</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2}></Col>
                                        <Col xs={8} style={{ padding: "10px" }}>
                                            <div class="btn-group" role="group" aria-label="Basic example" >
                                                <div><button type="button" class="btn btn-primary" >מנהל בכיר</button></div>
                                                <div><button type="button" class="btn btn-primary">מנהל</button></div>
                                                <div><button type="button" class="btn btn-primary">סטודנט</button></div>
                                            </div>
                                        </Col>
                                        <Col xs={2}></Col>
                                    </Row>
                                </Col>
                            </Row>


                            <Row className="job">
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5 style={{ float: "Right" }}>תעסוקה</h5>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Row>

                                                <div><button type="button" class="btn btn-primary" >השכלה תיכונית</button></div>
                                                <div><button type="button" class="btn btn-primary">השכלה אקדמאית</button></div>

                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <div><button type="button" class="btn btn-primary" >תואר ראשון</button></div>
                                                <div><button type="button" class="btn btn-primary">תואר שני</button></div>
                                            </Row>

                                        </Col>

                                        <Col></Col>

                                    </Row>

                                </Col>
                            </Row>


                        </form>

                        <Row className="next">
                            <Col></Col>
                            <Col></Col>
                            <Col><button><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </div>


                    <div className="align" style={{ paddingTop: "10px" }}>
                        <img className="about" alt="" src={about} style={{ paddingTop: "20px" }} />
                        <div className="card2" style={{ paddingTop: "0" }}>
                            <form>

                                <Row className="explanation">
                                    <h6 style={{ background: "gray" }}>סמן באיזו מידה אתה מסכים עם ההיגדים הבאים
                                    <br /> ( מסכים בהחלט = 5 , לא מסכים כלל = 1 )</h6>
                                </Row>

                                <Row className="question">


                                    {this.state.question1.map((q) => (
                                        <Col>
                                            <Row style={{ borderTop: "1px solid gray" }}>
                                                <Col className="q1">{q} </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div className="btn-group" role="group" aria-label="Basic example" >
                                                        <div><button type="button" class="btn btn-primary" >5</button></div>
                                                        <div><button type="button" class="btn btn-primary">4</button></div>
                                                        <div><button type="button" class="btn btn-primary">3</button></div>
                                                        <div><button type="button" class="btn btn-primary">2</button></div>
                                                        <div><button type="button" class="btn btn-primary">1</button></div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row className="note">
                                                <Col> <div><button style={{ float: "left" }} type="button" class="btn btn-primary" >מסכים בהחלט</button></div></Col>
                                                <Col> <div><button type="button" class="btn btn-primary" >לא מסכים</button></div></Col>
                                            </Row>

                                        </Col>
                                    ))}




                                    <Row className="question2">
                                        <Col>

                                            <Row className="explanation2" style={{ paddingTop: "10px" }}>
                                                <h6 style={{ background: "gray", padding: "8px", paddingRight: "70px", paddingLeft: "80px" }}>אנא סמן לאיזה היגד אתה מסכים יותר</h6>
                                            </Row>

                                            <Row style={{ borderBottom: "1px solid gray" }}>
                                                <Col >
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <div><button type="button" class="btn btn-primary" >Blbla1</button></div>
                                                        <Col></Col>
                                                        <div><button type="button" class="btn btn-primary">Bala2</button></div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row style={{ borderBottom: "1px solid gray" }}>
                                                <Col >
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <div><button type="button" class="btn btn-primary" >Blbla1</button></div>
                                                        <Col></Col>
                                                        <div><button type="button" class="btn btn-primary">Bala2</button></div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row style={{ borderBottom: "1px solid gray" }}>
                                                <Col >
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <div><button type="button" class="btn btn-primary" >Blbla1</button></div>
                                                        <Col></Col>
                                                        <div><button type="button" class="btn btn-primary">Bala2</button></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>

                                </Row>

                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><button><img style={{ height: "35px", width: "40px" }} src={next} alt=""></img></button></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>


                            </form>

                        </div>
                    </div>


                    <div className="align" style={{ paddingTop: "10px" }}>
                        <img className="about" alt="" src={about} style={{ paddingTop: "20px" }} />
                        <div className="card2" style={{ paddingTop: "0" }}>
                            <form>

                                <Row className="explanation">
                                    <h6 style={{ background: "gray" }}>דרגו את המידה בה שתי התכונות מתאימות לכם
                                    <br />אפילו אם תכונה אחת מתאימה לכם יותר מהשנייה

                                    <br />  ( מסכים בהחלט = 5 , לא מסכים כלל = 1 )</h6>
                                </Row>

                                <Row className="question">


                                    {this.state.question2.map((q) => (
                                        <Col>
                                            <Row style={{ borderTop: "1px solid gray" }}>
                                                <Col className="q1">{q} </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div className="btn-group" role="group" aria-label="Basic example" >
                                                        <div><button type="button" class="btn btn-primary" >5</button></div>
                                                        <div><button type="button" class="btn btn-primary">4</button></div>
                                                        <div><button type="button" class="btn btn-primary">3</button></div>
                                                        <div><button type="button" class="btn btn-primary">2</button></div>
                                                        <div><button type="button" class="btn btn-primary">1</button></div>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row className="note">
                                                <Col> <div><button style={{ float: "left" }} type="button" class="btn btn-primary" >מסכים בהחלט</button></div></Col>
                                                <Col> <div><button type="button" class="btn btn-primary" >לא מסכים</button></div></Col>
                                            </Row>

                                        </Col>
                                    ))}

                                </Row>

                                <Row className="finish">
                                <Col></Col>
                                <Col>
                                    <button type="button" class="btn btn-primary" >סיום</button>
                                </Col>
                                <Col></Col>
                            </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
           </div>
        );
    }
}
export default withRouter(Quiz);