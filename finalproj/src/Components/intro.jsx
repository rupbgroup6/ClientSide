import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../CSS/rest.css";
import welcomePic from '../Images/welcome.JPG';
import Button from 'react-bootstrap/Button';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state  ={
            email: this.props.match.params.email,
            id: "",
            local: false
        }

        this.apiUrl = 'http://localhost:51298/api/users';
        if (!this.state.local) {
          this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users';//Dont forget to change
        }
    }

    fetchQuestions = () =>{
      this.props.getQuestions();
    }

    componentDidMount(){//take the current user info and all the question for next component
        fetch(this.apiUrl, {//get the user id
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
                result.map(user => {
                    if(user.Email === this.state.email.toLowerCase()){
                        this.setState({//saving the id of the specific user
                            id : user.UserId
                        });
                    }
                });
                this.fetchQuestions();
              },
              (error) => {
                console.log("err post=", error);
              });
    }

  
    render() {
        return (
           <div className="align2" style={{height:"100vh"}}>
                <Container fluid style={{padding:"0",height:"100%"}}>
                    <Row className="header">
                        <Col xs={4}><h2 style={{float:"right",color:"#33adff"}}>IO</h2></Col>
                        <Col xs={4}><h2 style={{textAlign:"center",color:"#fff"}}>-</h2></Col>
                        <Col xs={4}><h2 style={{float:"left",color:"#fff"}}>OI</h2></Col>
                        <Col xs={12} style={{padding:"0",height:"20%"}}>
                            <img className="for-intro" src={welcomePic} alt=""/>
                        </Col>
                    </Row>
                    <Row xs={2} className="about2">
                        <Col xs={6} style={{color:"black",textAlign:"center",border:"none",backgroundColor:"white",marginLeft:"0"}}><h2 className="logo" style={{float:"right",color:"black"}}>About</h2></Col>
                        <Col xs={6} style={{color:"#33adff",textAlign:"center",border:"none",backgroundColor:"white"}}><h2 className="logo" style={{color:"#33adff"}}>IO&nbsp;-&nbsp;OI</h2></Col>
                    </Row>
                    <Row style={{height:"45%",backgroundColor:"white",alignItems:"center"}}>
                      <Col></Col>
                      <Col xs={10} dir="rtl" style={{backgroundColor:"grey",height:"100%"}}><p dir="rtl" style={{backgroundColor:"grey",fontSize:"75%"}}>אפליקציה זו מבוססת על מחקר מדעי של ד"ר אסרף ופרופ' אביב שהם מאוניברסיטת חיפה שהתפרסם לאחרונה בכתב העת מספר 1 בעולם בתחום השיווק הבינלאומי: International Marketing Review.במסגרת המחקר נאספו נתונים מ 100 מנהלים מחברות ישראליות גדולות ו 100 מנהלים מחברות סטארט-אפ ישראליות. כל החברות במדגם עוסקות בפעילות שיווק בינלאומי. שאלת המחקר המרכזית הייתה איזו גישה אסטרטגית תביא לביצועים טובים יותר בשווקים בינלאומיים. בנוסף נבדק בצורה אמפירית מה תורם יותר להצלחה אסטרטגית גדולה יותר בשווקים בינלאומיים: יכולות שיווק או יכולות טכנולוגיות? התוצאות עשויות להפתיע חלק גדול מקהל היזמים בישראל ולהסביר לפחות חלק מהכישלון של סטארט-אפים רבים בפיתוח פעילות בינלאומית.</p></Col>
                      <Col></Col>
                    </Row>
                    <Row style={{backgroundColor:"white"}}>
                      <Col style={{backgroundColor:"white"}}></Col>
                      <Col style={{backgroundColor:"white",textAlign:"center"}}><Link to={'/quiz/' + this.state.id}> <Button variant="outline-primary" style={{}}>Let's start</Button></Link></Col>
                      <Col style={{backgroundColor:"white"}}></Col>
                    </Row>
                </Container>
           </div>
        );
    }
}
export default withRouter(Intro);