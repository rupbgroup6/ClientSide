import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import '../../CSS/Quiz.css';
import about from '../../Images/about.png';
import iooi from '../../Images/io-oi.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import userchar from '../../Images/userChar.png';
import DemogQuiz from './DemogQuiz';
import IoQuiz from './IoQuiz';
import OrQuiz from './OrQuiz';
import BigQuiz from './BigQuiz';
import swal from 'sweetalert';

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
      dateStamp: "", //can be deleted later. not needed
      profile: this.props.match.params.profile,
      secondTime: this.props.match.params.secondTime,//take the val of secondTime
      allFull: false
    }

  }
  handleIoAnswers = (answers) =>{
    this.setState({
      ioAnswers : answers
    })
  }

  handleProfile = (profile) => {
    this.setState({
      profile: profile
    })
  }

  refreshProfile = () =>{
    return this.state.profile;
  }

  refreshIoAnswers = () =>{
    return this.state.ioAnswers;
  }

  componentDidMount() {
    $("#2nd").hide();
    $("#3rd").hide();
    $("#4th").hide();
    if(this.state.secondTime === "true"){
      swal("תוצאות השאלון לא ישתנו מאחר וזאת פעם שניה, אתה מוזמן למלא שוב כדי לראות איך תשובות שונות ישפיעו על התוצאה")
    }
  }

  render() {
    
    return (
      <Container>
        <Row className="align">
          <img className="about" alt="" src={about} style={{ paddingTop: "10px", width: "100px", height: "40px", background: "#0A0A0A" }} />
          <DemogQuiz id={this.state.id} secondTime = {this.state.secondTime} profile={this.state.profile}/>
          <br></br>
          <Row id="2nd">
            <img className="about" alt="" src={iooi} style={{ paddingTop: "10px", height: "50px", width: "80%", background: "#0A0A0A" }} />
            <IoQuiz ioQuestions={this.state.ioQuestions} ioAnswers={this.state.ioAnswers} handleIoAnswers={this.handleIoAnswers} id={this.state.id} handleProfile={this.handleProfile} secondTime = {this.state.secondTime}/>
          </Row>{/*end of io questions */}
          <br></br>
          <Row id="3rd">
          <OrQuiz secondTime = {this.state.secondTime} orQuestions={this.state.orQuestions} orAnswers={this.state.orAnswers} handleBigAnswers={this.handleBigAnswers} id={this.state.id}/>
          </Row>{/*end of 3rd */}
          <br></br>
          <Row id="4th">
            <img className="about" alt="" src={userchar} style={{ paddingTop: "10px", height: "50px", width: "80%", background: "#0A0A0A" }} />
            <BigQuiz secondTime = {this.state.secondTime} bigQuestions={this.state.bigQuestions} ioQuestions={this.state.ioQuestions} bigAnswers={this.state.bigAnswers} refreshIoAnswers={this.refreshIoAnswers} id={this.state.id} refreshProfile={this.refreshProfile} />
          </Row>{/*end of 4th */}
        </Row >{/*end of align */}
      </Container >
    );
  }
}
export default withRouter(Quiz);