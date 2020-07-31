import React, { PureComponent } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../CSS/excelReport.css';


//BarChart
const colors1 = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

class BarCharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  constructor(props) {
    super(props);
    this.state = {
      counter: [],
      local: false,
      data: []
    }
    this.apiUrl = 'http://localhost:51298/api/users/';
    if (!this.state.local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/users/';//Dont forget to change
    }
  }

  componentDidMount() {
    let url = this.apiUrl;
    let counter = [];
    let totalcount = 0;
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
          let survivorAvg = 0;
          let fitAvg = 0;
          let analystAvg = 0;
          let balancedAvg = 0;
          let daredevilAvg = 0;
          let believerAvg = 0;
          let revolAvg = 0;
          let champAvg = 0;
          let calcAvg = 0;
          for (var i = 0; i < result.length; i++) {//Dont forgte to change the name of the var!!
            if (result[i].Profile === "השורד") {
              if (counter["השורד"] === undefined) {
                counter["השורד"] = 1;
              }
              else {
                let current = counter["השורד"];
                counter["השורד"] = ++current;
              }
            }
            else if (result[i].Profile === "המאמין") {
              if (counter["המאמין"] === undefined) {
                counter["המאמין"] = 1;
              }
              else {
                let current = counter["המאמין"];
                counter["המאמין"] = ++current;
              }
            }

            else if (result[i].Profile === "המהפכן") {
              if (counter["המהפכן"] === undefined) {
                counter["המהפכן"] = 1;
              }
              else {
                let current = counter["המהפכן"];
                counter["המהפכן"] = ++current;
              }
            }

            else if (result[i].Profile === "המנתח") {
              if (counter["המנתח"] === undefined) {
                counter["המנתח"] = 1;
              }
              else {
                let current = counter["המנתח"];
                counter["המנתח"] = ++current;
              }
            }

            else if (result[i].Profile === "המאזן") {
              if (counter["המאזן"] === undefined) {
                counter["המאזן"] = 1;
              }
              else {
                let current = counter["המאזן"];
                counter["המאזן"] = ++current;
              }
            }

            else if (result[i].Profile === "המחושב") {
              if (counter["המחושב"] === undefined) {
                counter["המחושב"] = 1;
              }
              else {
                let current = counter["המחושב"];
                counter["המחושב"] = ++current;
              }
            }

            else if (result[i].Profile === "המתאים") {
              if (counter["המתאים"] === undefined) {
                counter["המתאים"] = 1;
              }
              else {
                let current = counter["המתאים"];
                counter["המתאים"] = ++current;
              }
            }

            else if (result[i].Profile === "המעז") {
              if (counter["המעז"] === undefined) {
                counter["המעז"] = 1;
              }
              else {
                let current = counter["המעז"];
                counter["המעז"] = ++current;
              }
            }

            else if (result[i].Profile === "האלוף") {
              if (counter["האלוף"] === undefined) {
                counter["האלוף"] = 1;
              }
              else {
                let current = counter["האלוף"];
                counter["האלוף"] = ++current;
              }
            }
            totalcount++;
          }//end of for

          if (counter["השורד"] != undefined) {
            survivorAvg = Math.floor((counter["השורד"] / totalcount) * 100);
          }
          else survivorAvg = 0;
          if (counter["המאמין"] != undefined) {
            believerAvg = Math.floor((counter["המאמין"] / totalcount) * 100);
          }
          else believerAvg = 0;
          if (counter["המהפכן"] != undefined) {
            revolAvg = Math.floor((counter["המהפכן"] / totalcount) * 100);
          }
          else revolAvg = 0;
          if (counter["המנתח"] != undefined) {
            analystAvg = Math.floor((counter["המנתח"] / totalcount) * 100);
          }
          else analystAvg = 0;
          if (counter["המאזן"] != undefined) {
            balancedAvg = Math.floor((counter["המאזן"] / totalcount) * 100);
          }
          else balancedAvg = 0;
          if (counter["המחושב"] != undefined) {
            calcAvg = Math.floor((counter["המחושב"] / totalcount) * 100);
          }
          else calcAvg = 0;
          if (counter["המתאים"] != undefined) {
            fitAvg = Math.floor((counter["המתאים"] / totalcount) * 100);
          }
          else fitAvg = 0;
          if (counter["המעז"] != undefined) {
            daredevilAvg = Math.floor((counter["המעז"] / totalcount) * 100);
          }
          else daredevilAvg = 0;
          if (counter["האלוף"] != undefined) {
            champAvg = Math.floor((counter["האלוף"] / totalcount) * 100);
          }
          else champAvg = 0;

          let allavg = [{ name: "השורד", uv: survivorAvg }, { name: "המאמין", uv: believerAvg }, { name: "המהפכן", uv: revolAvg }, { name: "המנתח", uv: analystAvg }, { name: "המאזן", uv: balancedAvg }, { name: "המחושב", uv: calcAvg }, { name: "המתאים", uv: fitAvg }, { name: "המעז", uv: daredevilAvg }, { name: "האלוף", uv: champAvg }]
          
          this.setState({
            data: allavg
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

    <Row className="header2">
      <Col xs={2}></Col>
      <Col xs={8}><img className="title" alt="" src={process.env.PUBLIC_URL + "/Images/ioLogo.png"} style={{ }} /></Col>
      <Col xs={2}></Col>
    </Row>

       <Row>
          <Col><h2>ממוצע פרופילים</h2></Col>
        </Row>
     <Row className="align11">
          <Col className="chart" >
            <BarChart 
              width={420}
              height={450}
              data={this.state.data}
              margin={{
                top: 50, right: 0, left: 0, bottom: 5,
              }}
         >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={60}/>
              <YAxis />
              <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {
                  this.state.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors1[index % 20]} />
                  ))
                }
              </Bar>
            </BarChart>
          </Col>
          </Row>
      </div>
    );
  }
} export default withRouter(BarCharts);


