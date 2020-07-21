import React, { PureComponent } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';

class PieCharts extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    constructor(props) {
      super(props);
      this.state = {
        local:true
      }
      this.apiUrl = 'http://localhost:51298/api/profiler/';
      if (!this.state.local) {
        this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/profiler/';//Dont forget to change
      }
  }
componentDidMount(){
     let url = this.apiUrl;
     let total = [];
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
            if(result[i].Profile === "השורד"){
              total[0] = {name: result[i].Profile, value: result[i].Total}
            }
            else if (result[i].Profile === "המאמין") {
              total[1] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המהפכן" ) {
              total[2] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המנתח") {
              total[3] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המאזן") {
              total[4] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המחושב") {
              total[5] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המתאים") {
              total[6] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "המעז") {
              total[7] = {name: result[i].Profile, value: result[i].Total}
            }
            
            else if (result[i].Profile === "האלוף") {
              total[8] = {name: result[i].Profile, value: result[i].Total}
            }
        }//end of for

           this.setState({
             data: total 
           })
        },
         (error) => {
           console.log("err post=", error);
         }
       );
 }
render() {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={true} data={this.state.data} cx={300} cy={200} outerRadius={80} fill="#8884d8" label />
      <Pie dataKey="value" data={this.state.data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
      <Tooltip />
    </PieChart>
  );
}

  }export default withRouter(PieCharts);

  
