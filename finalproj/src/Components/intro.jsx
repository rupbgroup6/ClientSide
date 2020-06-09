import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../CSS/rest.css";
import welcomePic from '../Images/IntroImage.png';
import iooi from '../Images/ioLogo.png';
import Button from 'react-bootstrap/Button';
import '../CSS/intro.css';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state  ={
            email: this.props.match.params.email,
            id: "",
            local: false
        }

        this.apiUrl = 'http://localhost:51298/api/users/login/';
        if (!this.state.local) {
          this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users/login/';//Dont forget to change
        }
    }

    fetchQuestions = () =>{
      this.props.getQuestions();
    }

    componentDidMount(){//take the current user info and all the question for next component
      let url = this.apiUrl + this.state.email;
        fetch(url, {//get the user id
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
            })
          })
            .then(res => {
              return res.json()
            })
            .then(
              (result) => {
               this.setState({
                 id: result[0].UserId
               });
                this.fetchQuestions();
              },
              (error) => {
                console.log("err post=", error);
              });
    }

  
    render() {
        return (
          <div className="cont2">
        <div className="align" >
        <Container>
        
          
            <div className="card6" style={{ marginTop: "3%", marginBottom: "3%" }}>
            
              <Row>
                <Col xs={12} >
                  <img className="pic" alt="" src={welcomePic} style={{ width: "100%", height:"100%", paddingBottom:"10px"}} />
                </Col>
              </Row>

              <Row>

                <Col xs={12}>
                  <Row className="title">
                    <Col xs={2}></Col>
                   
                    <Col xs={8}>
                      <Row>
                        <Col> <h4 style={{ color: "gray" }}>About </h4> </Col>
                      </Row>

                      <Row>
                        <Col>  <h6 style={{ color: "gray" }}> Outside-In - Inside-Out </h6> </Col>
                      </Row> 
                    </Col>

                    <Col xs={2}></Col>
                  </Row>

                </Col>

                <Row className="text1"> 
                <Col xs={12}>
                                <p><b style={{color:"white", paddingLeft:"10px", paddingTop:"5px"}}>  
                                שלום! 

אפליקציה זו מבוססת על מחקר אקדמי של ד"ר יואל אסרף מהמרכז האקדמי רופין ופרופ' אביב שהם מאוניברסיטת חיפה שהתפרסם בכתב העת International Marketing Review. במסך הבא תתבקש לענות על מספר שאלות שיסייעו לך לאבחן איזה סוג מנהל אתה? מנהל שנוקט בגישה אסטרטגית מסוג Outside-in או מנהל בעל גישת Inside-out. לאחר מילוי השאלון תוכל להעמיק את הלמידה בנושא, לבדוק היכן אתה מממוקם יחסית לאוכלוסיית המנהלים במחקר ולהבין את המשמעויות והדגשים השונים של כל גישה החל מפיתוח היכולות האסטרטגיות ועד ליחסים עם לקוחות, חדשנות ולקיחת סיכונים. חשוב להדגיש שאין תשובות נכונות או לא נכונות ולכן אנא סמן את התשובה המתארת במידה הטובה ביותר את הסכמתך עם ההיגדים. הפרטים שלך ימסרו בסודיות מוחלטת. 

בהצלחה!

                                </b></p>
                            </Col>

                </Row>




                <Row style={{ backgroundColor: "black", paddingTop: "10px" }}>
                  <Col xs={2} style={{ backgroundColor: "black" }}></Col>
                  <Col xs={8} style={{ backgroundColor: "black", textAlign: "center" }}><Link to={'/quiz/' + this.state.id}> <button  style={{background: "#33adff" , height:"55px",width:"135px" ,margin:"15px", borderRadius:"12px", color:" #003B15", fontSize:"17px", fontWeight:"700"}}>Let's start</button></Link></Col>
                  <Col xs={2} style={{ backgroundColor: "black" }}></Col>
                </Row>

              </Row>

            </div>
          </Container>
        </div >
      </div >
    );
  }
}
export default withRouter(Intro);