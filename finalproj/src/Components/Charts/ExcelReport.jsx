import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import React from "react";
import ReactExport from "react-export-excel";
import Button from 'react-bootstrap/Button';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


class ExcelReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      local:false
    }
    this.apiUrl = 'http://localhost:51298/api/users/';
    if (!this.state.local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users/';//Dont forget to change
    }
}

componentDidMount(){
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
         for(var i =0 ; i< result.length ; i++){//Dont forgte to change the name of the var!!
             all[i] = {UserId: result[i].UserId, Age: result[i].Age, Gender: result[i].Gender, Education: result[i].Education, Job: result[i].Job,
              Profile: result[i].Profile, ScoreA: result[i].ScoreA, ScoreB: result[i].ScoreB, AvgSay1: result[i].AvgSay1, AvgSay2: result[i].AvgSay2,
              AvgSay3: result[i].AvgSay3, AvgSay4: result[i].AvgSay4, AvgSay5: result[i].AvgSay5, DateStamp: result[i].DateStamp}
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
            <ExcelFile element={<Button >Download ExcelFile <i class="fa fa-download" aria-hidden="true"></i> </Button>}>
                <ExcelSheet data={this.state.data} name="Students">
                    <ExcelColumn label="UserId" value="UserId"/>
                    <ExcelColumn label="Age" value="Age"/>
                    <ExcelColumn label="Gender" value="Gender"/>
                    <ExcelColumn label="Education" value="Education"/>
                    <ExcelColumn label="Job" value="Job"/>
                    <ExcelColumn label="Profile" value="Profile"/>
                    <ExcelColumn label="ScoreA" value="ScoreA"/>
                    <ExcelColumn label="ScoreB" value="ScoreB"/>
                    <ExcelColumn label="AvgSay1" value="AvgSay1"/>
                    <ExcelColumn label="AvgSay2" value="AvgSay2"/>
                    <ExcelColumn label="AvgSay3" value="AvgSay3"/>
                    <ExcelColumn label="AvgSay4" value="AvgSay4"/>
                    <ExcelColumn label="AvgSay5" value="AvgSay5"/>
                    <ExcelColumn label="DateStamp" value="DateStamp"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}export default withRouter(ExcelReport);