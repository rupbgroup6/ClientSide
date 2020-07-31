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
      local: false,
      dataA:[],
      dataB:[]
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
              AvgSay3: result[i].AvgSay3, AvgSay4: result[i].AvgSay4, AvgSay5: result[i].AvgSay5, DateStamp: result[i].DateStamp, Email: result[i].Email
            }
          }//end of for

          this.setState({
            dataA: all
          })
          let url2 = "";
          if (this.state.local) {
            url2 = "http://localhost:51298/api/Connections"
          }
          else {
            url2 = "http://proj.ruppin.ac.il/bgroup6/prod/api/Connections"
          }
          fetch(url2, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
            })
          })
            .then(res => {
              return res.json()
            })
            .then(
              (res) => {
                let conec = {
                  'השורד-האלוף': 0, 'השורד-המעז': 0, 'השורד-המתאים': 0, 'השורד-המחושב': 0, 'השורד-המאזן': 0, 'השורד-המנתח': 0, 'השורד-המהפכן': 0, 'השורד-המאמין': 0, 'השורד-השורד': 0,
                  'המאמין-האלוף': 0, 'המאמין-המעז': 0, 'המאמין-המתאים': 0, 'המאמין-המחושב': 0, 'המאמין-המאזן': 0, 'המאמין-המנתח': 0, 'המאמין-המהפכן': 0, 'המאמין-המאמין': 0,
                  'המהפכן-האלוף': 0, 'המהפכן-המעז': 0, 'המהפכן-המתאים': 0, 'המהפכן-המחושב': 0, 'המהפכן-המאזן': 0, 'המהפכן-המנתח': 0, 'המהפכן-המהפכן': 0,
                  'המאזן-המאזן': 0, 'המנתח-האלוף': 0, 'המנתח-המעז': 0, 'המנתח-המתאים': 0, 'המנתח-המחושב': 0, 'המנתח-המאזן': 0, 'המנתח-המנתח': 0,
                  'המאזן-האלוף': 0, 'המאזן-המעז': 0, 'המאזן-המתאים': 0, 'המאזן-המחושב': 0,
                  'המחושב-המתאים': 0, 'המחושב-האלוף': 0, 'המחושב-המעז': 0, 'המחושב-המחושב': 0,
                  'המתאים-האלוף': 0, 'המתאים-המעז': 0,
                  'המעז-האלוף': 0, 'המעז-המעז': 0, 'האלוף-האלוף': 0, 'המתאים-המתאים': 0,
                }
      
                var conec2 = [];
                for (var i = 0; i < res.length; i++) {
                  conec2.push({ EmailA: res[i].EmailA, EmailB: res[i].EmailB, ProfileA: res[i].ProfileA, ProfileB: res[i].ProfileB, UserA: res[i].UserA, UserB: res[i].UserB });
                }
      
                for (var i = 0; i < res.length; i++) {
                  if (res[i].ProfileA === "השורד" && res[i].ProfileB === "השורד") {
                    let current = conec["השורד-השורד"];
                    conec["השורד-השורד"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאמין" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המאמין") {
                    let current = conec["השורד-המאמין"];
                    conec["השורד-המאמין"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המהפכן") {
                    let current = conec["השורד-המהפכן"];
                    conec["השורד-המהפכן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המנתח") {
                    let current = conec["השורד-המנתח"];
                    conec["השורד-המנתח"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המאזן") {
                    let current = conec["השורד-המאזן"];
                    conec["השורד-המאזן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המחושב") {
                    let current = conec["השורד-המחושב"];
                    conec["השורד-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המתאים") {
                    let current = conec["השורד-המתאים"];
                    conec["השורד-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המעז") {
                    let current = conec["השורד-המעז"];
                    conec["השורד-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "האלוף") {
                    let current = conec["השורד-האלוף"];
                    conec["השורד-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאמין" && res[i].ProfileB === "המאמין") {
                    let current = conec["המאמין-המאמין"];
                    conec["המאמין-המאמין"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המהפכן") {
                    let current = conec["המאמין-המהפכן"];
                    conec["המאמין-המהפכן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המנתח") {
                    let current = conec["המאמין-המנתח"];
                    conec["המאמין-המנתח"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המאזן") {
                    let current = conec["המאמין-המאזן"];
                    conec["המאמין-המאזן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המחושב") {
                    let current = conec["המאמין-המחושב"];
                    conec["המאמין-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המתאים") {
                    let current = conec["המאמין-המתאים"];
                    conec["המאמין-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המעז") {
                    let current = conec["המאמין-המעז"];
                    conec["המאמין-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "האלוף") {
                    let current = conec["המאמין-האלוף"];
                    conec["המאמין-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המהפכן") {
                    let current = conec["המהפכן-המהפכן"];
                    conec["המהפכן-המהפכן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המנתח") {
                    let current = conec["המהפכן-המנתח"];
                    conec["המהפכן-המנתח"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המאזן") {
                    let current = conec["המהפכן-המאזן"];
                    conec["המהפכן-המאזן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המחושב") {
                    let current = conec["המהפכן-המחושב"];
                    conec["המהפכן-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המתאים") {
                    let current = conec["המהפכן-המתאים"];
                    conec["המהפכן-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המעז") {
                    let current = conec["המהפכן-המעז"];
                    conec["המהפכן-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "האלוף") {
                    let current = conec["המהפכן-האלוף"];
                    conec["המהפכן-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המנתח") {
                    let current = conec["המנתח-המנתח"];
                    conec["המנתח-המנתח"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המאזן") {
                    let current = conec["המנתח-המאזן"];
                    conec["המנתח-המאזן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המתאים") {
                    let current = conec["המנתח-המתאים"];
                    conec["המנתח-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המעז") {
                    let current = conec["המנתח-המעז"];
                    conec["המנתח-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המחושב") {
                    let current = conec["המנתח-המחושב"];
                    conec["המנתח-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "האלוף") {
                    let current = conec["המנתח-האלוף"];
                    conec["המנתח-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המאזן") {
                    let current = conec["המאזן-המאזן"];
                    conec["המאזן-המאזן"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המתאים") {
                    let current = conec["המאזן-המתאים"];
                    conec["המאזן-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המחושב") {
                    let current = conec["המאזן-המחושב"];
                    conec["המאזן-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המעז") {
                    let current = conec["המאזן-המעז"];
                    conec["המאזן-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "האלוף") {
                    let current = conec["המאזן-האלוף"];
                    conec["המאזן-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המחושב") {
                    let current = conec["המחושב-המחושב"];
                    conec["המחושב-המחושב"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "המתאים") {
                    let current = conec["המחושב-המתאים"];
                    conec["המחושב-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "המעז") {
                    let current = conec["המחושב-המעז"];
                    conec["המחושב-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "האלוף") {
                    let current = conec["המחושב-האלוף"];
                    conec["המחושב-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המתאים") {
                    let current = conec["המתאים-המתאים"];
                    conec["המתאים-המתאים"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המתאים" || res[i].ProfileA === "המתאים" && res[i].ProfileB === "המעז") {
                    let current = conec["המתאים-המעז"];
                    conec["המתאים-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המתאים" || res[i].ProfileA === "המתאים" && res[i].ProfileB === "האלוף") {
                    let current = conec["המתאים-האלוף"];
                    conec["המתאים-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המעז") {
                    let current = conec["המעז-המעז"];
                    conec["המעז-המעז"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המעז" || res[i].ProfileA === "המעז" && res[i].ProfileB === "האלוף") {
                    let current = conec["המעז-האלוף"];
                    conec["המעז-האלוף"] = parseInt(current + 1);
                  }
                  else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "האלוף") {
                    let current = conec["האלוף-האלוף"];
                    conec["האלוף-האלוף"] = parseInt(current + 1);
                  }
                }
                var ac = [];
                for (var key in conec) {
                  if (conec[key] != 0) {
                    //ac = [{ label: Object.values(conec), value: Object.values(conec)} ]
                    //ac.push({label: Object.keys(conec), value: Object.values(conec)})
                    ac.push({ label: key, value: conec[key] })
                  }
                }
      
      
      
                this.setState({
                  dataB: conec2
                })
              },
              (error) => {
                console.log("err post=", error);
              });
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
          <Col xs={12}>
            <Row >
              <Col xs={6} className="download">  <ExcelFile element={<Button type="button" style={{ backgroundColor:"#33adff"  }}  ><i class="fa fa-download" aria-hidden="true"></i> הורד נתוני משתמשים</Button>}>
                <ExcelSheet data={this.state.dataA} name="Students">
                <ExcelColumn label="Email" value="Email" />
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
          <br/>
          <br/>
          <Col xs={12}>
          <Row >
            <Col xs={6} className="download">  <ExcelFile element={<Button type="button" style={{ backgroundColor: "#33adff" }}  ><i class="fa fa-download" aria-hidden="true"></i> הורד קובץ קורלציה בין חברים  </Button>}>
              <ExcelSheet data={this.state.dataB} name="Students">
                <ExcelColumn label="Email A" value="EmailA" />
                <ExcelColumn label="Email B" value="EmailB" />
                <ExcelColumn label="User A" value="UserA" />
                <ExcelColumn label="User B" value="UserB" />
                <ExcelColumn label="Profile A" value="ProfileA" />
                <ExcelColumn label="Profile B" value="ProfileA" />
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