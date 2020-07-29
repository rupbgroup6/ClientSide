import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import React from "react";
import ReactExport from "react-export-excel";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../CSS/excelReport.css';
import iooi from '../../Images/ioLogo.png';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


class ExcelReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      local: false
    }
    this.apiUrl = 'http://localhost:51298/api/users/';
    if (!this.state.local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users/';//Dont forget to change
    }
  }

  componentDidMount() {
    let url = this.apiUrl;
    let all = [];
    fetch(url, {
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
          for (var i = 0; i < result.length; i++) {//Dont forgte to change the name of the var!!
            all[i] = {
              UserId: result[i].UserId, Age: result[i].Age, Gender: result[i].Gender, Education: result[i].Education, Job: result[i].Job,
              Profile: result[i].Profile, ScoreA: result[i].ScoreA, ScoreB: result[i].ScoreB, AvgSay1: result[i].AvgSay1, AvgSay2: result[i].AvgSay2,
              AvgSay3: result[i].AvgSay3, AvgSay4: result[i].AvgSay4, AvgSay5: result[i].AvgSay5, DateStamp: result[i].DateStamp
            }
          }//end of for

          this.setState({
            data: all
          })
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Link to={"/HomeAdmin"}> <Button variant="secondary" style={{ float: "right" }}><i class="fa fa-home"></i></Button></Link>
          </Col>
        </Row>
        
        <Row className="header2" style={{ paddingTop: "15px" }}>
          <Col xs={2}></Col>
          <Col xs={8}><img className="title" alt="" src={iooi} style={{ paddingTop: "10px" }} /></Col>
          <Col xs={2}></Col>
        </Row>

        <div className="align10" >
          <Col>
            <Row >
              <Col xs={6} className="download">  <ExcelFile element={<Button type="button" style={{ backgroundColor:"#33adff"  }}  ><i class="fa fa-download" aria-hidden="true"></i> הורד קבצי אקסל  </Button>}>
                <ExcelSheet data={this.state.data} name="Students">
                  <ExcelColumn label="UserId" value="UserId" />
                  <ExcelColumn label="Age" value="Age" />
                  <ExcelColumn label="Gender" value="Gender" />
                  <ExcelColumn label="Education" value="Education" />
                  <ExcelColumn label="Job" value="Job" />
                  <ExcelColumn label="Profile" value="Profile" />
                  <ExcelColumn label="ScoreA" value="ScoreA" />
                  <ExcelColumn label="ScoreB" value="ScoreB" />
                  <ExcelColumn label="AvgSay1" value="AvgSay1" />
                  <ExcelColumn label="AvgSay2" value="AvgSay2" />
                  <ExcelColumn label="AvgSay3" value="AvgSay3" />
                  <ExcelColumn label="AvgSay4" value="AvgSay4" />
                  <ExcelColumn label="AvgSay5" value="AvgSay5" />
                  <ExcelColumn label="DateStamp" value="DateStamp" />
                </ExcelSheet>
              </ExcelFile>
              </Col>
            </Row>
          </Col>

        </div>
      </div>
    );
  }
} export default withRouter(ExcelReport);