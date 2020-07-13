import React, { PureComponent } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];




class PieCharts extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    constructor(props) {
      super(props);
      this.state = {
        data: [],
        counter: [],
        local:false
      }
      this.apiUrl = 'http://localhost:51298/api/users/';
      if (!this.state.local) {
        this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users/';//Dont forget to change
      }
  }
// componentDidMount(){
//     let url = this.apiUrl;
//     let counter = [];
//     fetch(url, {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json; charset=UTF-8',
//       })
//     })
//       .then(res => {
//         return res.json()
//       })
//       .then(
//         (result) => {
          
//           for(var i =0 ; i< result.length ; i++){//Dont forgte to change the name of the var!!
//               if(result[i].Profile === "השורד"){
//                 if(counter["השורד"] === undefined){
//                   counter["השורד"]= 1;
//                 }
//                 else {
//                   let current = counter["השורד"];
//                   counter["השורד"] = ++current;
//                 }
//               }
//               else if (result[i].Profile === "המחפש") {
//                 if(counter["המחפש"] === undefined){
//                   counter["המחפש"]= 1;
//                 }
//                 else {
//                   let current = counter["המחפש"];
//                   counter["המחפש"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המהפכן" ) {
//                 if(counter["המהפכן"] === undefined){
//                   counter["המהפכן"]= 1;
//                 }
//                 else {
//                   let current = counter["המהפכן"];
//                   counter["המהפכן"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המנתח") {
//                 if(counter["המנתח"] === undefined){
//                   counter["המנתח"]= 1;
//                 }
//                 else {
//                   let current = counter["המנתח"];
//                   counter["המנתח"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המאזן") {
//                 if(counter["המאזן"] === undefined){
//                   counter["המאזן"]= 1;
//                 }
//                 else {
//                   let current = counter["המאזן"];
//                   counter["המאזן"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המחושב") {
//                 if(counter["המחושב"] === undefined){
//                   counter["המחושב"]= 1;
//                 }
//                 else {
//                   let current = counter["המחושב"];
//                   counter["המחושב"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המגיב") {
//                 if(counter["המגיב"] === undefined){
//                   counter["המגיב"]= 1;
//                 }
//                 else {
//                   let current = counter["המגיב"];
//                   counter["המגיב"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "המעז") {
//                 if(counter["המעז"] === undefined){
//                   counter["המעז"]= 1;
//                 }
//                 else {
//                   let current = counter["המעז"];
//                   counter["המעז"] = ++current;
//                 }
//               }
              
//               else if (result[i].Profile === "האלוף") {
//                 if(counter["האלוף"] === undefined){
//                   counter["האלוף"]= 1;
//                 }
//                 else {
//                   let current = counter["האלוף"];
//                   counter["האלוף"] = ++current;
//                 }
//               }
              
//           }

//           this.setState({
//             data: counter
//           })
//        },
//         (error) => {
//           console.log("err post=", error);
//         });
  
// }
render() {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
      <Tooltip />
    </PieChart>
  );
}

  }export default withRouter(PieCharts);

  
